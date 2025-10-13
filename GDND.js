// Hiển thị sản phẩm gợi ý
const products = [
    { name: "Tai nghe Bluetooth", price: "350.000₫", img: "https://via.placeholder.com/150" },
    { name: "Chuột không dây", price: "250.000₫", img: "https://via.placeholder.com/150" },
    { name: "Bàn phím cơ", price: "800.000₫", img: "https://via.placeholder.com/150" },
    { name: "Sạc dự phòng", price: "400.000₫", img: "https://via.placeholder.com/150" },
];

const suggestContainer = document.getElementById("suggest-products");

products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.price}</p>
    `;
    suggestContainer.appendChild(div);
});

// Chọn trạng thái đơn hàng
function chonTrangThai(status) {
    const result = document.getElementById("order-result");
    result.innerText = `🕒 Bạn đang xem các đơn hàng: ${status}`;
}

// Hỗ trợ
function troGiup() {
    alert("Chào bạn! Vui lòng truy cập Trung tâm trợ giúp tại help.shop.com");
}

function troChuyen() {
    alert("Tính năng trò chuyện với admin đang được phát triển!");
}
