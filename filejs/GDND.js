// GDND.js - HOÀN CHỈNH (CÓ KHẮC PHỤC LỖI HIỂN THỊ HỒ SƠ)

// --- KEY CHUNG ---
const CART_STORAGE_KEY = 'cart';
const ORDER_STORAGE_KEY = 'userOrders'; 
// Lưu ý: Key ORDER_RATING_KEY nằm trong rating.js (cần giả định tồn tại)

// --- DỮ LIỆU SẢN PHẨM GỢI Ý ---
const products = [
    { name: "Tai nghe Bluetooth", price: "350.000₫", img: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Tai+nghe" },
    { name: "Chuột không dây", price: "250.000₫", img: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Chuot" },
    { name: "Bàn phím cơ", price: "800.000₫", img: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Ban+phim" },
    { name: "Sạc dự phòng", price: "400.000₫", img: "https://via.placeholder.com/150/FFFF00/000000?text=Sac+du+phong" },
];

// --- HIỂN THỊ TÊN VÀ SỐ ĐIỆN THOẠI NGƯỜI DÙNG ĐĂNG NHẬP (ĐÃ CẬP NHẬT) ---
function displayUserName() {
    const userNameElement = document.getElementById('userNameDisplay');
    const userPhoneElement = document.getElementById('userPhoneDisplay'); 
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    
    if (currentUser) {
        // Lấy displayName (tên hiển thị đã chỉnh sửa). Nếu chưa có, sử dụng username
        const nameToDisplay = currentUser.displayName || currentUser.username; 
        
        // 1. Cập nhật Tên hiển thị
        if (userNameElement) {
            userNameElement.innerHTML = `${nameToDisplay} <span class="verified-icon">✅</span>`; 
        }

        // 2. Cập nhật Số điện thoại
        if (userPhoneElement) {
            const phone = currentUser.phone || 'Chưa cập nhật'; 
            userPhoneElement.innerHTML = `Số điện thoại: <b>${phone}</b>`; 
        }
    }
}
window.displayUserName = displayUserName;

// === HÀM HIỂN THỊ ĐƠN HÀNG THEO TRẠNG THÁI ===
function hienThiDonHang(status) {
    const orderContentEl = document.getElementById('order-content');
    const orderButtons = document.querySelectorAll('.order-status button');
    
    if (!orderContentEl) return;
    
    // 1. Đánh dấu nút đang active (Cải tiến)
    orderButtons.forEach(btn => {
        btn.classList.remove('active-order-btn');
        if (btn.textContent.trim() === status) {
            btn.classList.add('active-order-btn');
        }
    });

    // 2. Lấy user hiện tại
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentUsername = currentUser ? currentUser.username : '';

    // 3. Lấy và Lọc đơn hàng
    const allOrders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
    let filteredOrders = allOrders.filter(o => o.username === currentUsername);
    
    let displayStatus = status;
    if (status === 'Đánh giá') {
        // Chỉ lọc đơn hàng đã hoàn thành (cần đánh giá)
        displayStatus = 'Đã nhận hàng';
        filteredOrders = filteredOrders.filter(o => o.status === 'Đã nhận hàng');
    } else {
        filteredOrders = filteredOrders.filter(o => o.status === status);
    }
    
    if (filteredOrders.length === 0) {
        orderContentEl.innerHTML = `<p class="note">Không có đơn hàng nào ở trạng thái "${status}"</p>`;
        return;
    }

    let html = '';
    
    // Đảo ngược thứ tự để hiển thị đơn mới nhất trước
    filteredOrders.reverse().forEach(order => { 
        const itemNames = order.items.map(item => `${item.name} (x${item.quantity})`).join('<br>');
        
        // Chuẩn hóa giá tiền trước khi hiển thị
        let rawPrice = String(order.totalPrice).replace(/[^\d]/g, ''); 
        const formattedPrice = Number(rawPrice).toLocaleString('vi-VN');
        
        let orderDetailHTML = `
            <div class="order-item">
                <p><strong>Mã đơn hàng:</strong> #${order.id}</p>
                <p><strong>Ngày đặt:</strong> ${order.date}</p>
                <p><strong>Trạng thái:</strong> <span class="status-badge status-${order.status.replace(/\s/g, '-')}" >${order.status}</span></p>
                <p><strong>Sản phẩm:</strong><br>${itemNames}</p>
                <p><strong>Tổng tiền:</strong> ${formattedPrice}₫</p>
        `;
        
        // HIỂN THỊ FORM/KẾT QUẢ ĐÁNH GIÁ (Nếu trạng thái là 'Đã nhận hàng')
        if (order.status === 'Đã nhận hàng') {
            // Lưu ý: Hàm hienThiRating(order.id) được giả định tồn tại trong rating.js
            const ratingHTML = window.hienThiRating ? window.hienThiRating(order.id) : '<button class="rating-btn" onclick="openRatingModal(\'Sản phẩm trong đơn hàng\', \'modal\')">Đánh giá ngay</button>';
            orderDetailHTML += `<div class="rating-section">${ratingHTML}</div>`;
        }

        orderDetailHTML += `</div>`;
        html += orderDetailHTML;
    });

    orderContentEl.innerHTML = html;
}
window.hienThiDonHang = hienThiDonHang;

// --- HÀM HỖ TRỢ ---
function hienThiHoTro(option) {
    const supportContent = document.getElementById('support-content');
    // Xóa note ban đầu và nội dung cũ
    supportContent.innerHTML = ''; 

    if (option === 'Trung tâm trợ giúp') {
        supportContent.innerHTML = `
            <h3>🔍 Các Chủ đề Trợ giúp Phổ biến</h3>
            
            <div class="support-topic">
                <h4>1. Vấn đề Đơn hàng & Vận chuyển</h4>
                <p>Tôi có thể theo dõi đơn hàng ở đâu? Đơn hàng đã giao nhưng tôi chưa nhận được?</p>
                </div>
            
            <div class="support-topic">
                <h4>2. Đổi trả & Hoàn tiền</h4>
                <p>Chính sách đổi trả sản phẩm lỗi như thế nào? Khi nào tôi nhận được tiền hoàn lại?</p>
                </div>
            
            <div class="support-topic">
                <h4>3. Tài khoản & Bảo mật</h4>
                <p>Cách đổi mật khẩu, cập nhật thông tin cá nhân. Tài khoản bị khóa?</p>
                </div>
            
            <p class="mt-20">Vẫn chưa tìm thấy câu trả lời? Vui lòng sử dụng tùy chọn "Trò chuyện với Admin" để nhận hỗ trợ trực tiếp.</p>
        `;
        supportContent.style.padding = '15px';


    } else if (option === 'Trò chuyện với admin') {
        // Phần này giữ nguyên
        supportContent.innerHTML = `
            <h3>💬 Trò chuyện Trực tuyến với Admin</h3>
            <p>Bấm vào nút dưới đây để mở giao diện trò chuyện riêng biệt.</p>
            <button class="chat-open-btn" onclick="window.location.href = 'chat.html';">
                Mở Cửa sổ Chat (Khách hàng)
            </button>
        `;
        supportContent.style.padding = '15px';
    }
}
window.hienThiHoTro = hienThiHoTro;

// --- KHỞI TẠO VÀ SỰ KIỆN ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiển thị tên (KHẮC PHỤC LỖI: Luôn gọi để đọc dữ liệu mới nhất từ localStorage)
    displayUserName(); 

    // 2. Load đơn hàng mặc định (Chờ xác nhận)
    hienThiDonHang('Chờ xác nhận');
    
    // 3. Gợi ý sản phẩm
    const suggestionsEl = document.getElementById('suggest-products');
    if (suggestionsEl) {
        suggestionsEl.innerHTML = products.map(p => `
            <div class="product">
                <img src="${p.img}" alt="${p.name}">
                <h4>${p.name}</h4>
                <p>${p.price}</p>
            </div>
        `).join('');
    }
    
    // 4. Lắng nghe sự kiện click nút Chỉnh sửa hồ sơ (ĐÃ THÊM LOGIC CHUYỂN HƯỚNG)
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            // Chuyển hướng đến trang chỉnh sửa hồ sơ
            window.location.href = 'giaodienhoso.html';
        });
    }
});

// Lắng nghe sự kiện khi đơn hàng được cập nhật 
window.addEventListener('orderUpdated', () => {
    const currentStatusElement = document.querySelector('.order-status button.active-order-btn');
    const statusToLoad = currentStatusElement ? currentStatusElement.textContent.trim() : 'Chờ xác nhận';
    hienThiDonHang(statusToLoad);
});