// admin.js - LOGIC HOÀN CHỈNH CHO ADMIN (ĐÃ SỬA THEO YÊU CẦU MỚI)

const ORDER_STORAGE_KEY = 'userOrders';
const ORDER_RATING_KEY = 'orderRatings';
const UPDATED_PRODUCTS_KEY = 'updatedProducts'; // Key lưu trữ sản phẩm đã cập nhật

// Kiểm tra vai trò Admin
function checkAdminRole() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') {
        alert("Bạn không có quyền truy cập trang này!");
        window.location.href = 'index.html';
    }
}
window.checkAdminRole = checkAdminRole;

// Hàm chuyển đổi giữa các tab Admin
function showAdminTab(tabId, element) {
    // Ẩn tất cả nội dung tab
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    // Hiển thị tab được chọn
    document.getElementById(tabId).style.display = 'block';

    // Xóa active class khỏi tất cả các liên kết
    document.querySelectorAll('.navbar a').forEach(el => el.classList.remove('active'));
    // Thêm active class vào liên kết được click
    element.classList.add('active');

    // Chạy các hàm tải dữ liệu tương ứng
    if (tabId === 'orderManagement') {
        loadOrdersForAdmin();
    } else if (tabId === 'productManagement') {
        loadProductManagement();
    } else if (tabId === 'shopFeedback') {
        loadShopFeedback();
    }
}
window.showAdminTab = showAdminTab;

// Lấy đánh giá theo ID đơn hàng
function getOrderRating(orderId) {
    const allRatings = JSON.parse(localStorage.getItem(ORDER_RATING_KEY)) || {};
    return allRatings[orderId] || { shop: null };
}

// ----------------------------------------------------
// ====== QUẢN LÝ ĐƠN HÀNG (ĐÃ SỬA - THÊM CỘT KHÁCH HÀNG) =
// ----------------------------------------------------

function loadOrdersForAdmin() {
    const orderManagementContainer = document.getElementById('orderManagement');
    const orderListContainer = document.getElementById('orderList');
    if (!orderManagementContainer || !orderListContainer) return;

    orderListContainer.innerHTML = ''; // Xóa nội dung cũ

    let orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];

    // Sắp xếp đơn hàng theo ID giảm dần (mới nhất lên đầu)
    orders.sort((a, b) => b.id - a.id);

    orders.forEach(order => {
        const itemNames = order.items.map(item => `${item.name} (x${item.quantity})`).join('<br>');
        let actionButton = '';
        let statusDisplay = order.status;

        if (order.status === 'Chờ xác nhận') {
            actionButton = `
                <button class="status-btn confirm" onclick="updateOrderStatus(${order.id}, 'Chờ lấy hàng')">Xác nhận đơn</button>
                <button class="status-btn cancel" onclick="updateOrderStatus(${order.id}, 'Đã hủy')" style="background-color: #dc3545; margin-left: 5px;">Hủy đơn</button>
            `;
        } else if (order.status === 'Chờ lấy hàng') {
            actionButton = `Đang chờ Shipper lấy hàng...`;
        } else if (order.status === 'Đang giao') {
            actionButton = `Đã giao cho Shipper.`;
        } else if (order.status === 'Đã nhận hàng') {
            actionButton = `Đã giao thành công.`;
        } else if (order.status === 'Đã hủy') {
            actionButton = `Đơn hàng đã bị hủy.`;
        } else {
            actionButton = statusDisplay;
        }

        orderListContainer.innerHTML += `
            <tr>
                <td>${order.userId || 'Khách (Ẩn danh)'}</td>                 <td>#${order.id}</td>
                <td>${itemNames}</td>
                <td>${parseInt(order.totalPrice).toLocaleString()}₫</td>
                <td>${order.date}</td>
                <td>${statusDisplay}</td>
                <td>${actionButton}</td>
            </tr>
        `;
    });
}
window.loadOrdersForAdmin = loadOrdersForAdmin;

// Cập nhật trạng thái đơn hàng
function updateOrderStatus(orderId, newStatus) {
    let orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
    const orderIndex = orders.findIndex(o => o.id === orderId);

    if (orderIndex !== -1) {
        if (newStatus === 'Đã hủy') {
            if (orders[orderIndex].shipperId) {
                orders[orderIndex].shipperId = null;
            }
            alert(`Đơn hàng #${orderId} đã bị HỦY.`);
        } else {
            alert(`Đơn hàng #${orderId} đã chuyển sang trạng thái: ${newStatus}`);
        }

        orders[orderIndex].status = newStatus;
        localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
        window.dispatchEvent(new Event('orderUpdated'));
        loadOrdersForAdmin();
    }
}
window.updateOrderStatus = updateOrderStatus;

// ----------------------------------------------------
// ====== QUẢN LÝ SẢN PHẨM ===========================
// ----------------------------------------------------

function getEditableProducts() {
    const storedProducts = localStorage.getItem(UPDATED_PRODUCTS_KEY);
    return storedProducts ? JSON.parse(storedProducts) : (window.products || []);
}

function loadProductManagement() {
    const productListManagement = document.getElementById('productListManagement');
    if (!productListManagement) return;

    productListManagement.innerHTML = '';
    const products = getEditableProducts();

    products.forEach(product => {
        const formattedPrice = parseInt(product.price).toLocaleString('vi-VN');
        productListManagement.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${formattedPrice}₫</td>
                <td>${product.category}</td>
                <td>
                    <button class="action-btn" onclick="editProduct(${product.id})">Sửa</button>
                    <button class="action-btn" onclick="deleteProduct(${product.id})" style="background-color: #dc3545;">Xóa</button>
                </td>
            </tr>
        `;
    });
}
window.loadProductManagement = loadProductManagement;

function handleProductFormSubmit(event) {
    event.preventDefault();
    let products = getEditableProducts();

    const productId = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const img = document.getElementById('productImg').value;
    const category = document.getElementById('productCategory').value;
    const origin = document.getElementById('productOrigin').value;

    if (productId) {
        const index = products.findIndex(p => p.id == productId);
        if (index !== -1) {
            products[index] = { ...products[index], name, price, img, category, origin };
            alert(`Đã cập nhật sản phẩm ID: ${productId}`);
        }
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProduct = { id: newId, name, price, img, category, origin, sold: 0, rate: 5 };
        products.push(newProduct);
        alert(`Đã thêm sản phẩm mới: ${name} (ID: ${newId})`);
    }

    localStorage.setItem(UPDATED_PRODUCTS_KEY, JSON.stringify(products));
    loadProductManagement();
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.querySelector('#productForm button[type="submit"]').textContent = 'Thêm Sản phẩm';
    document.getElementById('cancelEdit').style.display = 'none';
    window.dispatchEvent(new Event('productsUpdated'));
}

function editProduct(productId) {
    const products = getEditableProducts();
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productImg').value = product.img;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productOrigin').value = product.origin;
        document.querySelector('#productForm button[type="submit"]').textContent = 'Cập nhật Sản phẩm';
        document.getElementById('cancelEdit').style.display = 'inline-block';
        window.scrollTo(0, 0);
    }
}
window.editProduct = editProduct;

function cancelEdit() {
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.querySelector('#productForm button[type="submit"]').textContent = 'Thêm Sản phẩm';
    document.getElementById('cancelEdit').style.display = 'none';
}

function deleteProduct(productId) {
    if (confirm(`Bạn có chắc muốn xóa sản phẩm ID: ${productId} này không?`)) {
        let products = getEditableProducts();
        products = products.filter(p => p.id !== productId);
        localStorage.setItem(UPDATED_PRODUCTS_KEY, JSON.stringify(products));
        loadProductManagement();
        window.dispatchEvent(new Event('productsUpdated'));
        alert(`Đã xóa sản phẩm ID: ${productId}`);
    }
}
window.deleteProduct = deleteProduct;

// ----------------------------------------------------
// ====== FEEDBACK SHOP ==============================
// ----------------------------------------------------

function loadShopFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    if (!feedbackList) return;
    feedbackList.innerHTML = '';

    const orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
    const allRatings = JSON.parse(localStorage.getItem(ORDER_RATING_KEY)) || {};

    const ordersWithShopRating = orders
        .filter(order => order.status === 'Đã nhận hàng' && allRatings[order.id]?.shop)
        .sort((a, b) => b.id - a.id);

    if (ordersWithShopRating.length === 0) {
        feedbackList.innerHTML = '<tr><td colspan="5" style="text-align: center;">Chưa có phản hồi Shop nào được ghi nhận.</td></tr>';
        return;
    }

    ordersWithShopRating.forEach(order => {
        const rating = allRatings[order.id].shop;
        const itemNames = order.items.map(item => `${item.name} (x${item.quantity})`).join(', ');
        const stars = '★'.repeat(rating.rating) + '☆'.repeat(5 - rating.rating);
        const ratingDisplay = `<span style="color: gold;">${stars}</span> (${rating.rating}/5)`;

        feedbackList.innerHTML += `
            <tr>
                <td>#${order.id}</td>
                <td>${itemNames}</td>
                <td>${ratingDisplay}</td>
                <td>${rating.comment || '<span style="color: #999;">Không có nhận xét.</span>'}</td>
                <td>${rating.userId}</td>
            </tr>
        `;
    });
}
window.loadShopFeedback = loadShopFeedback;

// ----------------------------------------------------
// ====== KHỞI TẠO TRANG ADMIN ======================
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    if (typeof checkAdminRole === 'function') checkAdminRole();
    loadOrdersForAdmin();

    const productForm = document.getElementById('productForm');
    if (productForm) productForm.addEventListener('submit', handleProductFormSubmit);

    const cancelEditBtn = document.getElementById('cancelEdit');
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', cancelEdit);
});

// Listener cập nhật lại danh sách sản phẩm
window.addEventListener('productsUpdated', () => {
    if (typeof applyFiltersAndSorts === 'function') applyFiltersAndSorts();
    const productManagementTab = document.getElementById('productManagement');
    if (productManagementTab && productManagementTab.style.display === 'block') loadProductManagement();
});

window.addEventListener('orderUpdated', loadOrdersForAdmin);