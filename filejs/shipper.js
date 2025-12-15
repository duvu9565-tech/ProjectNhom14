// shipper.js - FIX LỖI ĐỆ QUY & CHUYỂN TAB HOÀN TẤT + THÊM NÚT HỦY

// --- KEY CHUNG ---
const ORDER_STORAGE_KEY = 'userOrders';
const ORDER_RATING_KEY = 'orderRatings';

// --- LẤY ID CỦA SHIPPER HIỆN TẠI ---
function getCurrentShipperId() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser ? currentUser.username : null;
}
window.getCurrentShipperId = getCurrentShipperId;

// --- LẤY ĐÁNH GIÁ ĐƠN HÀNG (KHÔNG GÂY ĐỆ QUY) ---
function internalGetOrderRating(orderId) {
  const allRatings = JSON.parse(localStorage.getItem(ORDER_RATING_KEY)) || {};
  return allRatings[orderId] || { shop: null, shipper: null };
}

// Nếu rating.js chưa định nghĩa, gán từ file này
if (!window.getOrderRating) {
  window.getOrderRating = internalGetOrderRating;
}

// === 1. XÁC THỰC VÀ CẬP NHẬT TRẠNG THÁI ===
function checkShipperRole() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser || currentUser.role !== 'shipper') {
    alert('Bạn không có quyền truy cập trang này!');
    window.location.href = 'index.html';
  }
}
window.checkShipperRole = checkShipperRole;

function updateShipperStatus(orderId, newStatus) {
  let orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  const orderIndex = orders.findIndex(o => o.id === orderId);
  const shipperId = getCurrentShipperId();

  if (orderIndex === -1) return alert('Không tìm thấy đơn hàng.');
  if (!shipperId) return alert('Không tìm thấy Shipper ID. Vui lòng đăng nhập lại.');

  // Gán shipperId nếu chưa có (Chỉ xảy ra khi Shipper nhận đơn)
  if (!orders[orderIndex].shipperId) {
    orders[orderIndex].shipperId = shipperId;
  }

  let message = '';

  if (newStatus === 'Đang giao') {
    message = `🚚 Đơn hàng #${orderId} đã được gán cho bạn và đang giao.`;
  } else if (newStatus === 'Đã nhận hàng') {
    if (typeof updateProductSold === 'function') {
      orders[orderIndex].items.forEach(item => {
        updateProductSold(item.id, item.quantity);
      });
    }
    message = `✅ Đơn hàng #${orderId} đã HOÀN TẤT. Vui lòng kiểm tra tab "Đã HOÀN TẤT".`;
  } else if (newStatus === 'Đã hủy') {
    // Logic khi Shipper hủy đơn: Đơn hàng sẽ bị thu hồi khỏi Shipper
    orders[orderIndex].shipperId = null; 
    orders[orderIndex].status = 'Chờ xác nhận'; // Chuyển về Chờ xác nhận để Admin xem xét lại
    message = `❌ Đơn hàng #${orderId} đã bị HỦY. Đơn hàng đã được trả về hàng chờ để Admin xem xét.`;
  } else {
    message = `Đơn hàng #${orderId} đã đổi trạng thái: ${newStatus}`;
  }

  orders[orderIndex].status = newStatus === 'Đã hủy' ? 'Chờ xác nhận' : newStatus;
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));

  alert(message);

  // Phát sự kiện để cập nhật tab
  window.dispatchEvent(new CustomEvent('orderUpdated', { detail: { newStatus } }));
}
window.updateShipperStatus = updateShipperStatus;

// === 2. TÍNH ĐIỂM ĐÁNH GIÁ TRUNG BÌNH ===
function calculateShipperRating() {
  let orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  const currentShipperId = getCurrentShipperId();

  const completedOrders = orders.filter(
    order => order.status === 'Đã nhận hàng' && order.shipperId === currentShipperId
  );

  let totalRating = 0;
  let countRated = 0;

  completedOrders.forEach(order => {
    const ratingData = window.getOrderRating(order.id);
    const shipperRating = ratingData.shipper;
    if (shipperRating && shipperRating.rating) {
      totalRating += shipperRating.rating;
      countRated++;
    }
  });

  const avgRating = countRated > 0 ? (totalRating / countRated).toFixed(1) : 0;
  const totalStars = '★'.repeat(Math.round(avgRating)) + '☆'.repeat(5 - Math.round(avgRating));

  const ratingSummaryEl = document.getElementById('ratingSummary');
  if (ratingSummaryEl) {
    ratingSummaryEl.innerHTML = `
      <h3>${avgRating} / 5.0 ${totalStars}</h3>
      <p style="font-size: 16px;">(Dựa trên ${countRated} lượt đánh giá đã nhận)</p>
      <p style="color: ${avgRating >= 4 ? 'green' : avgRating >= 3 ? '#ff9800' : 'red'}; font-weight: bold;">
        Trạng thái: ${avgRating >= 4 ? 'Tuyệt vời' : avgRating >= 3 ? 'Ổn định' : 'Cần cải thiện'}
      </p>
    `;
  }
}
window.calculateShipperRating = calculateShipperRating;

// === 3. CHUYỂN TAB ===
function changeShipperTab(tabName) {
  const listDiv = document.getElementById('shipperOrderList');
  const ratingDiv = document.getElementById('shipperRatingContent');
  document.querySelectorAll('.shipper-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));

  if (tabName === 'rating') {
    document.getElementById('tabRatingSummary').classList.add('active');
    listDiv.style.display = 'none';
    ratingDiv.style.display = 'block';
    calculateShipperRating();
  } else {
    const tabElement = document.getElementById(
      `tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Orders`
    );
    if (tabElement) tabElement.classList.add('active');
    listDiv.style.display = 'block';
    ratingDiv.style.display = 'none';
    loadOrdersForShipper(tabName);
  }
}
window.changeShipperTab = changeShipperTab;

// === 4. HIỂN THỊ ĐƠN HÀNG ===
function loadOrdersForShipper(tabName = 'pending') {
  const shipperOrderList = document.getElementById('shipperOrderList');
  if (!shipperOrderList) return;
  shipperOrderList.innerHTML = '';

  const allOrders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  const currentShipperId = getCurrentShipperId();
  let filteredOrders = [];

  if (tabName === 'pending') {
    filteredOrders = allOrders.filter(
      o => o.status === 'Chờ lấy hàng' && (!o.shipperId || o.shipperId === null)
    );
  } else if (tabName === 'shipping') {
    filteredOrders = allOrders.filter(
      o => o.status === 'Đang giao' && o.shipperId === currentShipperId
    );
  } else if (tabName === 'completed') {
    filteredOrders = allOrders.filter(
      o => o.status === 'Đã nhận hàng' && o.shipperId === currentShipperId
    );
  }

  if (filteredOrders.length === 0) {
    const msg =
      tabName === 'pending'
        ? 'Không có đơn hàng nào đang chờ bạn lấy.'
        : tabName === 'shipping'
        ? 'Bạn chưa có đơn hàng nào đang giao.'
        : 'Bạn chưa có đơn hàng nào đã hoàn tất.';
    shipperOrderList.innerHTML = `<p style="padding:20px;text-align:center;color:#999;">${msg}</p>`;
    return;
  }

  filteredOrders.forEach(order => {
    const items = Array.isArray(order.items) ? order.items : [];
    const itemNames = items.map(i => `${i.name} (x${i.quantity})`).join(', ');

    let actionButtons = '';
    if (order.status === 'Chờ lấy hàng') {
      actionButtons = `<button class="shipper-btn start-shipping-btn" onclick="updateShipperStatus(${order.id}, 'Đang giao')">Bắt đầu giao hàng</button>`;
    } else if (order.status === 'Đang giao') {
        // ĐÃ THÊM NÚT HỦY ĐƠN HÀNG
      actionButtons = `
        <div class="shipper-btn-group">
            <button class="shipper-btn complete-btn" onclick="updateShipperStatus(${order.id}, 'Đã nhận hàng')">Hoàn tất giao hàng</button>
            <button class="shipper-btn cancel-btn" onclick="updateShipperStatus(${order.id}, 'Đã hủy')">Hủy đơn</button>
        </div>`;
    } else if (order.status === 'Đã nhận hàng') {
      const rating = window.getOrderRating(order.id);
      const r = rating.shipper;
      const info = r && r.rating
        ? `<p style="color:gold;font-size:20px;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</p><small>${r.comment || 'Không có nhận xét'}</small>`
        : '<small>Chưa có đánh giá Shipper.</small>';
      actionButtons = `<div class="shipper-feedback">${info}</div>`;
    }

    const color =
      order.status === 'Đang giao'
        ? '#2196F3'
        : order.status === 'Đã nhận hàng'
        ? '#4CAF50'
        : '#FF9800';

    shipperOrderList.innerHTML += `
      <div class="order-card">
        <h3>Đơn hàng #${order.id}</h3>
        <p><strong>Ngày đặt:</strong> ${order.date}</p>
        <p><strong>Trạng thái:</strong> <span style="color:${color}">${order.status}</span></p>
        <p><strong>Shipper ID:</strong> ${order.shipperId || 'Chưa gán'}</p>
        <p><strong>Sản phẩm:</strong> ${itemNames}</p>
        <p><strong>Tổng tiền:</strong> ${parseInt(order.totalPrice).toLocaleString()}₫</p>
        <div style="margin-top:10px;">${actionButtons}</div>
      </div>`;
  });
}
window.loadOrdersForShipper = loadOrdersForShipper;

// --- 5. KHỞI TẠO ---
document.addEventListener('DOMContentLoaded', () => {
  checkShipperRole();
  changeShipperTab('pending');
});

// Listener để tự động chuyển tab sau khi cập nhật trạng thái
window.addEventListener('orderUpdated', e => {
  const s = e.detail?.newStatus;
  let tab;
  if (s === 'Đang giao') {
    tab = 'shipping';
  } else if (s === 'Đã nhận hàng') {
    tab = 'completed';
  } else if (s === 'Đã hủy') {
    // Khi hủy, đơn hàng sẽ biến mất khỏi tab 'shipping' nên ta giữ nguyên tab để Shipper xem danh sách còn lại
    tab = 'shipping'; 
  } else {
    tab = 'pending';
  }
  changeShipperTab(tab);
});