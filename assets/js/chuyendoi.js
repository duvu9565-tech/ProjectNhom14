// chuyendoi.js - ĐÃ CẬP NHẬT HOÀN CHỈNH (Fix hiển thị, Giỏ hàng và Lọc/Sắp xếp)

// Biến toàn cục để lưu trữ danh sách sản phẩm mẫu.
const products = [
    // =======================================================
    // ====== ĐIỆN THOẠI (1/20) ===============================
    {
       
    id: 1,
    name: "Điện thoại Samsung Galaxy S23",
    price: "21990000",
    img: "/images/dt23.jpg",
    category: "Điện thoại",
    origin: "Hàn Quốc",
    sold: 1532,
    rate: 4.8
}
    ,
    // ====== ĐIỆN THOẠI (2/20)
    {
        id: 2,
        name: "Điện thoại iPhone 15 Pro Max",
        price: "30990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-pro-max-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Mỹ",
        sold: 2541,
        rate: 4.9
    },
    // ====== ĐIỆN THOẠI (3/20)
    {
        id: 3,
        name: "Xiaomi 13T Pro",
        price: "16990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/306782/xiaomi-13t-pro-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 850,
        rate: 4.7
    },
    // ====== ĐIỆN THOẠI (4/20)
    {
        id: 4,
        name: "OPPO Reno10 5G",
        price: "9990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/307409/oppo-reno10-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 1200,
        rate: 4.6
    },
    // ====== ĐIỆN THOẠI (5/20)
    {
        id: 5,
        name: "Vivo V29 5G",
        price: "11990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/307222/vivo-v29-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 600,
        rate: 4.5
    },
    // ... (15 sản phẩm Điện thoại khác)
    {
        id: 20,
        name: "LG Wing (Cũ)",
        price: "15000000",
        img: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-pro-max-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Hàn Quốc",
        sold: 100,
        rate: 4.1
    },
    // =======================================================
    // ====== LAPTOP (1/20) ===================================
    {
        id: 21,
        name: "Laptop Acer Aspire 7",
        price: "18490000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-gaming-a715-43g-r8ga-r5-nhq8fsn002-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Đài Loan",
        sold: 900,
        rate: 4.6
    },
    // ... (19 sản phẩm Laptop khác)
    {
        id: 40,
        name: "Laptop GPD Win Max 2",
        price: "27990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/300508/msi-gaming-gf63-thin-11uc-i7-9s7-16r612-408-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 80,
        rate: 4.5
    },
    // =======================================================
    // ====== PHỤ KIỆN (1/10) =================================
    {
        id: 41,
        name: "Tai nghe Bluetooth Sony WH-1000XM5",
        price: "8990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/278918/sony-wh-1000xm5-den-thumb-600x600.jpeg",
        category: "Phụ kiện",
        origin: "Nhật Bản",
        sold: 1200,
        rate: 4.8
    },
    // ... (8 sản phẩm Phụ kiện khác)
    {
        id: 50,
        name: "Giá đỡ điện thoại, laptop đa năng",
        price: "350000",
        img: "https://cdn.tgdd.vn/Products/Images/131/280036/hub-chuyen-doi-usb-c-6-in-1-hyperdrive-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 3000,
        rate: 4.5
    },
    // === BỔ SUNG CATEGORY THIẾU TỪ index.html ===
    {
        id: 51,
        name: "Loa Marshall Kilburn II",
        price: "7990000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/276481/loa-bluetooth-jbl-flip-6-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Thụy Điển",
        sold: 400,
        rate: 4.9
    },
    {
        id: 52,
        name: "Đồng hồ thông minh Samsung Watch 6",
        price: "8490000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/307137/apple-watch-s9-gps-41mm-vien-nhom-day-silicone-thumb-1-600x600.jpg",
        category: "Đồng hồ",
        origin: "Hàn Quốc",
        sold: 900,
        rate: 4.7
    },
    {
        id: 53,
        name: "Nồi chiên không dầu Lock&Lock",
        price: "2490000",
        img: "https://cdn.tgdd.vn/Products/Images/4619/236968/camera-hanh-trinh-vietmap-c61-pro-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hàn Quốc",
        sold: 1500,
        rate: 4.6
    }
];

// Biến toàn cục để lưu trữ danh sách sản phẩm đang được hiển thị (đã lọc/sắp xếp)
let currentProducts = [...products];
// Biến lưu trữ bộ lọc hiện tại (dùng để giữ trạng thái khi sắp xếp)
let currentFilter = {
    category: '🌐 Tất cả',
    priceRange: '',
    sortType: '',
    popular: false,
    newest: false
};


// --- HÀM HỖ TRỢ LẤY KEY CÁ NHÂN HÓA ---
function getCurrentUserKey(suffix) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // Trả về key localStorage: 'suffix_username'
    return currentUser ? `${suffix}_${currentUser.username}` : null;
}
window.getCurrentUserKey = getCurrentUserKey;

// === HÀM HIỂN THỊ SẢN PHẨM ==============================
function showProducts(productsArray) {
    const productList = document.getElementById('productList');
    if (!productList) return;

    productList.innerHTML = ''; // Xóa nội dung cũ

    if (productsArray.length === 0) {
        productList.innerHTML = '<p style="text-align: center; font-size: 1.2em; color: #ff5722;">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    productsArray.forEach(product => {
        // Định dạng giá tiền
        const formattedPrice = parseInt(product.price).toLocaleString('vi-VN') + '₫';
        // Tạo chuỗi sao
        const stars = '★'.repeat(Math.round(product.rate)) + '☆'.repeat(5 - Math.round(product.rate));

        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" class="product-img">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formattedPrice}</p>
                <div class="product-info">
                    <p class="product-sold">Đã bán: ${product.sold}</p>
                    <p class="product-rating">${stars} (${product.rate})</p>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
            </div>
        `;
    });
}
window.showProducts = showProducts; // Ràng buộc hàm vào Window

// --- HÀM TẢI DỮ LIỆU SẢN PHẨM MỚI NHẤT ---
function getSourceProducts() {
    const storedProducts = localStorage.getItem('updatedProducts');
    // Nếu có dữ liệu đã lưu, dùng nó. Nếu không, dùng mảng products mặc định.
    return storedProducts ? JSON.parse(storedProducts) : products;
}

// === HÀM ÁP DỤNG LỌC VÀ SẮP XẾP CHUNG ===
function applyFiltersAndSorts() {
    // 1. Lấy nguồn dữ liệu mới nhất
    let filteredProducts = getSourceProducts();
    
    // 2. Áp dụng LỌC theo Category
    if (currentFilter.category !== '🌐 Tất cả') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter.category);
    }

    // 3. Áp dụng LỌC theo Tìm kiếm (nếu có)
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase().trim();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
    }
    
    // 4. Áp dụng LỌC theo Khoảng giá
    if (currentFilter.priceRange === 'low') {
        // Dưới 3.000.000₫
        filteredProducts = filteredProducts.filter(p => parseInt(p.price) < 3000000);
    } else if (currentFilter.priceRange === 'high') {
        // Trên 3.000.000₫
        filteredProducts = filteredProducts.filter(p => parseInt(p.price) >= 3000000);
    }

    // 5. Áp dụng LỌC Nhanh (Được mua nhiều/Mới nhất)
    if (currentFilter.popular) {
        // Lọc theo sold (Đã bán)
        filteredProducts.sort((a, b) => b.sold - a.sold); 
    } else if (currentFilter.newest) {
        // Lọc theo ID (Giả định ID cao nhất là mới nhất)
        filteredProducts.sort((a, b) => b.id - a.id);
    }


    // 6. Áp dụng SẮP XẾP Giá (Ưu tiên Sắp xếp sau khi Lọc Nhanh/Mặc định đã chạy)
    if (currentFilter.sortType === 'asc') {
        filteredProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price)); // Tăng dần
    } else if (currentFilter.sortType === 'desc') {
        filteredProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price)); // Giảm dần
    }
    
    // Cập nhật biến toàn cục và hiển thị
    currentProducts = filteredProducts;
    showProducts(currentProducts);
}
window.applyFiltersAndSorts = applyFiltersAndSorts;

// === CÁC HÀM GỌI TỪ index.html ===

function searchProduct() {
    // Tìm kiếm chỉ đơn giản là áp dụng bộ lọc và sắp xếp
    applyFiltersAndSorts();
}
window.searchProduct = searchProduct; 

function sortProducts() {
    const sortValue = document.getElementById('sort-price').value;
    currentFilter.sortType = sortValue;
    // Reset lọc nhanh khi sắp xếp giá
    currentFilter.popular = false;
    currentFilter.newest = false;
    applyFiltersAndSorts();
}
window.sortProducts = sortProducts;

function filterCategory(category) {
    // 1. Cập nhật filter
    currentFilter.category = category;
    
    // 2. Cập nhật trạng thái active trên Sidebar
    document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
    
    // Tìm phần tử click và thêm class active
    const activeEl = Array.from(document.querySelectorAll('.sidebar li')).find(el => el.textContent.includes(category));
    if (activeEl) {
        activeEl.classList.add('active');
    }

    // 3. Áp dụng bộ lọc
    applyFiltersAndSorts();
}
window.filterCategory = filterCategory;
window.showAll = () => filterCategory('🌐 Tất cả'); 

function filterProducts(type = '') {
    const priceRangeValue = document.getElementById('filter-price-range').value;
    
    if (type === 'popular') {
        currentFilter.popular = true;
        currentFilter.newest = false;
    } else if (type === 'newest') {
        currentFilter.popular = false;
        currentFilter.newest = true;
    } else {
        // Lọc theo khoảng giá
        currentFilter.priceRange = priceRangeValue;
        currentFilter.popular = false;
        currentFilter.newest = false;
    }
    
    // Áp dụng bộ lọc
    applyFiltersAndSorts();
}
window.filterProducts = filterProducts;


// --- HÀM THÊM SẢN PHẨM VÀO GIỎ HÀNG (ĐÃ SỬA LỖI KEY) ---
function addToCart(productId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
        return;
    }
    
    const cartKey = getCurrentUserKey('cart'); 

    // Lấy danh sách sản phẩm TỪ SOURCE ĐÃ CẬP NHẬT
    const sourceProducts = getSourceProducts(); 

    const product = sourceProducts.find(p => p.id === productId);

    if (!product) {
        alert("Sản phẩm không tồn tại!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
        alert(`Đã cập nhật số lượng ${product.name} (x${existingItem.quantity})!`);
    } else {
        const priceCleaned = product.price.replace(/[\D]/g, ''); 
        
        const cartItem = {
            id: product.id,
            name: product.name,
            price: priceCleaned, 
            img: product.img,
            quantity: 1,
        };
        cart.push(cartItem);
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    
    // Cần hàm loadCart trong giohang.js được định nghĩa là window.loadCart
    if (typeof loadCart === 'function') {
        loadCart();
    }
}
window.addToCart = addToCart;


// === HÀM CẬP NHẬT SỐ LƯỢNG ĐÃ BÁN (SOLD) ===============
function updateProductSold(productId, quantity = 1) {
    // Lấy dữ liệu sản phẩm mới nhất
    let productsToUpdate = getSourceProducts();
    
    const product = productsToUpdate.find(p => p.id === productId); 

    if (!product) {
        console.error(`Sản phẩm với ID ${productId} không tồn tại.`);
        return false;
    }
    
    product.sold += quantity; 

    // Lưu lại toàn bộ mảng đã cập nhật
    localStorage.setItem('updatedProducts', JSON.stringify(productsToUpdate));

    return true;
}
window.updateProductSold = updateProductSold;


// === LOGIC TẢI DỮ LIỆU KHI TẢI TRANG (index.html) =======
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tải dữ liệu sản phẩm mới nhất (nếu có)
    const updatedProducts = getSourceProducts();

    // 2. Cập nhật mảng products toàn cục và currentProducts
    products.length = 0; 
    products.push(...updatedProducts); 
    
    // 3. Khởi tạo currentProducts và hiển thị (áp dụng lọc mặc định)
    currentProducts = [...products];

    // Cần phải gọi applyFiltersAndSorts thay vì showProducts trực tiếp 
    // để đảm bảo các bộ lọc (nếu có trong URL hoặc mặc định) được áp dụng
    if (typeof applyFiltersAndSorts === 'function') {
         applyFiltersAndSorts();
    } else {
        // Trường hợp khẩn cấp, chỉ hiển thị sản phẩm thô
        showProducts(currentProducts);
    }
});