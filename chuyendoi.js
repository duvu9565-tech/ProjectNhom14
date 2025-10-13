// Danh sách sản phẩm mẫu
const products = [
    {
        id: 1,
        name: "Điện thoại Galaxy S23",
        price: "21990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/274684/samsung-galaxy-s23-600x600.jpg",
        origin: "Hàn Quốc",
        sold: 1532,
        rate: 4.8
    },
    {
        id: 2,
        name: "Laptop Acer Aspire 7",
        price: "18490000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        origin: "Trung Quốc",
        sold: 964,
        rate: 4.5
    },
    {
        id: 3,
        name: "Tai nghe Sony WH-1000XM5",
        price: "9990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        origin: "Nhật Bản",
        sold: 210,
        rate: 4.9
    }
];

const productList = document.getElementById("productList");

// Hiển thị sản phẩm
function showProducts(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p><b>Giá:</b> ${parseInt(p.price).toLocaleString()}đ</p>
                <p><b>Nơi SX:</b> ${p.origin}</p>
                <p><b>Đã bán:</b> ${p.sold}</p>
                <p><b>Đánh giá:</b> ⭐ ${p.rate}</p>
                <button class="add-btn" onclick="addToCart(${p.id})">+</button>
            </div>
        `;
    });
}
showProducts(products);

// Tìm kiếm sản phẩm
function searchProduct() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    showProducts(filtered);
}

// Thêm vào giỏ hàng
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Đã thêm sản phẩm vào giỏ hàng!");
}

// Chat với admin
function toggleChat() {
    document.getElementById("chatBody").classList.toggle("show");
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message) {
        const chatBody = document.getElementById("chatBody");
        chatBody.innerHTML += `<div class='chat-message user'>${message}</div>`;
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
