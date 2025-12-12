// admin.js - CHỈ HIỂN THỊ ĐÁNH GIÁ CỦA SHOP

const ORDER_STORAGE_KEY = 'userOrders';
const ORDER_RATING_KEY = 'orderRatings';

// Kiểm tra vai trò Admin
function checkAdminRole() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser || currentUser.role !== 'admin') {
    alert("Bạn không có quyền truy cập trang này!");
    window.location.href = 'index.html';
  }
}
window.checkAdminRole = checkAdminRole;

// Lấy đánh giá theo ID đơn hàng
function getOrderRating(orderId) {
  const allRatings = JSON.parse(localStorage.getItem(ORDER_RATING_KEY)) || {};
  return allRatings[orderId] || { shop: null };
}

// Hiển thị danh sách đơn hàng
function loadOrdersForAdmin() {
  const orderList = document.getElementById('orderList');
  if (!orderList) return;
  orderList.innerHTML = '';

  let orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];

  orders.forEach(order => {
    const itemNames = order.items.map(item => `${item.name} (x${item.quantity})`).join('<br>');
    const rating = getOrderRating(order.id);
    const shopRating = rating.shop;

    let actionButton = '';
    let statusDisplay = order.status;

    if (order.status === 'Chờ xác nhận') {
      actionButton = `<button class="status-btn confirm" onclick="updateOrderStatus(${order.id}, 'Chờ lấy hàng')">Xác nhận đơn</button>`;
    } else if (order.status === 'Chờ lấy hàng') {
      actionButton = `Đang chờ Shipper lấy hàng...`;
    } else if (order.status === 'Đang giao') {
      actionButton = `Đã giao cho Shipper.`;
    } else if (order.status === 'Đã nhận hàng') {
      // ✅ Chỉ hiển thị Feedback Shop
      const starsShop = shopRating
        ? '★'.repeat(shopRating.rating) + '☆'.repeat(5 - shopRating.rating)
        : '';
      const ratingInfoShop = shopRating
        ? `<p class="product-rating"><span class="stars" style="color: gold;">${starsShop}</span> (Điểm: ${shopRating.rating})</p>
           <p><strong>Nhận xét:</strong> ${shopRating.comment || 'Không có nhận xét.'}</p>
           <p><small>Người đánh giá: ${shopRating.userId}</small></p>`
        : `<p style="color:#999;">Chưa có đánh giá Shop!</p>`;

      actionButton = `Đã giao thành công<br>
        <div style="padding: 5px; border: 1px dashed #ff5722; margin-top: 5px; border-radius: 4px;">
          <strong>Feedback Shop:</strong><br>${ratingInfoShop}
        </div>`;
    } else {
      actionButton = statusDisplay;
    }

    orderList.innerHTML += `
      <tr>
        <td>#${order.id}</td>
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
    orders[orderIndex].status = newStatus;
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
    alert(`Đơn hàng #${orderId} đã chuyển sang trạng thái: ${newStatus}`);
    window.dispatchEvent(new Event('orderUpdated'));
    loadOrdersForAdmin();
  }
}
window.updateOrderStatus = updateOrderStatus;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof checkAdminRole === 'function') checkAdminRole();
  loadOrdersForAdmin();
});

window.addEventListener('orderUpdated', loadOrdersForAdmin);
