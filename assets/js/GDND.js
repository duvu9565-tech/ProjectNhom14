// GDND.js - ĐÃ CẬP NHẬT HOÀN CHỈNH (Hàm hienThiDonHang được sửa)

// --- KEY CHUNG ---
const CART_STORAGE_KEY = 'cart';
const ORDER_STORAGE_KEY = 'userOrders'; // Dùng key chung cho toàn bộ đơn hàng
// Lưu ý: Key ORDER_RATING_KEY nằm trong rating.js

// --- DỮ LIỆU SẢN PHẨM GỢI Ý ---
const products = [
  { name: "Tai nghe Bluetooth", price: "350.000₫", img: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Tai+nghe" },
  { name: "Chuột không dây", price: "250.000₫", img: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Chuot" },
  { name: "Bàn phím cơ", price: "800.000₫", img: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Ban+phim" },
  { name: "Sạc dự phòng", price: "400.000₫", img: "https://via.placeholder.com/150/FFFF00/000000?text=Sac+du+phong" },
];

// --- HIỂN THỊ TÊN NGƯỜI DÙNG ĐĂNG NHẬP ---
function displayUserName() {
  const userNameElement = document.getElementById('userNameDisplay');
  const currentUser = JSON.parse(localStorage.getItem('currentUser')); 
  if (userNameElement && currentUser) {
    userNameElement.textContent = currentUser.username + ' ✅'; 
  }
}
window.displayUserName = displayUserName;

// === HÀM HIỂN THỊ ĐƠN HÀNG THEO TRẠNG THÁI ===
function hienThiDonHang(status) {
    const orderContentEl = document.getElementById('order-content');
    if (!orderContentEl) return;
    
    // 1. Lấy user hiện tại
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentUsername = currentUser ? currentUser.username : '';

    // 2. Lấy đơn hàng của user
    const allOrders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
    let filteredOrders = allOrders.filter(o => o.username === currentUsername);
    
    // 3. Lọc theo trạng thái
    let displayStatus = status;
    if (status === 'Đánh giá') {
        // Trạng thái 'Đánh giá' thực chất là đơn hàng đã hoàn thành ('Đã nhận hàng') 
        // và cần hiển thị form/kết quả đánh giá.
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
        
        let orderDetailHTML = `
            <div class="order-item">
                <p><strong>Mã đơn hàng:</strong> #${order.id}</p>
                <p><strong>Ngày đặt:</strong> ${order.date}</p>
                <p><strong>Trạng thái:</strong> <span class="status-badge">${order.status}</span></p>
                <p><strong>Sản phẩm:</strong><br>${itemNames}</p>
                <p><strong>Tổng tiền:</strong> ${parseInt(order.totalPrice).toLocaleString()}₫</p>
        `;
        
        // 4. HIỂN THỊ FORM/KẾT QUẢ ĐÁNH GIÁ (Chỉ áp dụng cho đơn đã hoàn thành)
        if (order.status === 'Đã nhận hàng') {
            // Hàm hienThiRating(order.id) được định nghĩa trong rating.js
            const ratingHTML = hienThiRating(order.id); 
            orderDetailHTML += `<div class="rating-section">${ratingHTML}</div>`;
        }

        orderDetailHTML += `</div>`;
        html += orderDetailHTML;
    });

    orderContentEl.innerHTML = html;
}
window.hienThiDonHang = hienThiDonHang;

// --- HÀM HỖ TRỢ ---
function hienThiHoTro(type) {
  const supportContentArea = document.getElementById("support-content");
  if (!supportContentArea) return;

  let content = '';
  if (type === 'Trung tâm trợ giúp') {
    content = `
      <h4>📚 Trung tâm trợ giúp</h4>
      <p>Vui lòng chọn chủ đề cần hỗ trợ:</p>
      <form>
        <select>
          <option>Vấn đề về thanh toán</option>
          <option>Vấn đề về vận chuyển</option>
          <option>Đổi trả hàng hóa</option>
          <option>Bảo mật tài khoản</option>
        </select>
        <input type="text" placeholder="Nhập từ khóa tìm kiếm...">
        <button type="submit">Tìm kiếm</button>
      </form>
      <p><a href="mailto:help@shop.com">Gửi email hỗ trợ</a></p>
    `;
  } else if (type === 'Trò chuyện với admin') {
    content = `
      <h4>💬 Trò chuyện trực tuyến</h4>
      <p style="color:red;">Tính năng này đang được phát triển!</p>
      <textarea placeholder="Nhập nội dung cần hỗ trợ..."></textarea>
      <button onclick="alert('Đã gửi yêu cầu trò chuyện. Vui lòng chờ phản hồi.')">Bắt đầu trò chuyện</button>
      <p class="note">Thời gian phản hồi dự kiến: 10 phút</p>
    `;
  }

  supportContentArea.innerHTML = content;
}
window.hienThiHoTro = hienThiHoTro;

// --- KHỞI TẠO VÀ SỰ KIỆN ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiển thị tên
    displayUserName();

    // 2. Load đơn hàng mặc định (Chờ xác nhận)
    hienThiDonHang('Chờ xác nhận');
    
    // Gợi ý sản phẩm (Giữ nguyên hoặc tùy chỉnh theo nhu cầu)
    const suggestionsEl = document.getElementById('suggestions');
    if (suggestionsEl) {
        suggestionsEl.innerHTML = products.map(p => `
            <div class="suggest-item">
                <img src="${p.img}" alt="${p.name}">
                <p>${p.name}</p>
            </div>
        `).join('');
    }

});

// Lắng nghe sự kiện khi đơn hàng được cập nhật (từ admin/shipper) để tải lại danh sách
window.addEventListener('orderUpdated', () => {
    // Tải lại trạng thái hiện tại (hoặc mặc định 'Chờ xác nhận')
    const currentStatusElement = document.querySelector('.order-status button.active');
    const statusToLoad = currentStatusElement ? currentStatusElement.textContent.trim() : 'Chờ xác nhận';
    hienThiDonHang(statusToLoad);
});