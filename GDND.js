// --- KHAI BÁO KEY SỬ DỤNG CHUNG ---
const CART_STORAGE_KEY = 'cart';
const ORDER_STORAGE_KEY = 'userOrders';

// --- DỮ LIỆU & HIỂN THỊ SẢN PHẨM GỢI Ý ---
const products = [
  { name: "Tai nghe Bluetooth", price: "350.000₫", img: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Tai+nghe" },
  { name: "Chuột không dây", price: "250.000₫", img: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Chuot" },
  { name: "Bàn phím cơ", price: "800.000₫", img: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Ban+phim" },
  { name: "Sạc dự phòng", price: "400.000₫", img: "https://via.placeholder.com/150/FFFF00/000000?text=Sac+du+phong" },
];

const suggestContainer = document.getElementById("suggest-products");

if (suggestContainer) {
  suggestContainer.innerHTML = '';
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
}

// --- CHỨC NĂNG ĐƠN MUA (DỮ LIỆU THẬT) ---
const orderContentArea = document.getElementById("order-content");

/**
 * Lấy danh sách đơn hàng dựa trên trạng thái.
 * @param {string} status - "Chờ xác nhận" | "Chờ lấy hàng" | "Đang giao" | "Đánh giá"
 */
function getAllTransactions(status) {
  let orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

  if (status === 'Chờ xác nhận') {
    return cart.map(item => ({
      id: item.id,
      name: `${item.name} (x${item.quantity})`,
      price: (parseInt(item.price) * item.quantity).toLocaleString('vi-VN') + '₫',
      status: "Chờ xác nhận",
      type: "cart_item"
    }));
  }
  return orders.filter(order => order.status === status);
}

/**
 * Hiển thị danh sách đơn hàng theo trạng thái (thật từ localStorage)
 */
function hienThiDonHang(status) {
  const transactions = getAllTransactions(status);
  let content = `<h4>Danh sách Đơn hàng: ${status} (${transactions.length} mục)</h4>`;

  if (status === 'Chờ xác nhận') {
    content += `<p style="color: red;">*Các mục này đang ở Giỏ hàng và chưa thanh toán.</p>`;
    if (transactions.length > 0) {
      content += `<button onclick="window.location.href='giohang.html'" style="background-color:#ff9800;color:white;padding:10px;margin-bottom:15px;border:none;cursor:pointer;border-radius:5px;">Đi đến Giỏ hàng để Thanh toán</button>`;
    }
  }

  if (transactions.length > 0) {
    content += `<ul style="list-style-type:none;padding:0;">`;
    transactions.forEach(t => {
      let detailHtml = '';

      if (t.type === 'cart_item') {
        detailHtml = `Giá: ${t.price}`;
        content += `<li style="border:1px solid #eee;padding:10px;margin-bottom:5px;border-radius:3px;">
          ${t.name} | ${detailHtml}
        </li>`;
      } else {
        if (t.status === 'Chờ lấy hàng') {
          detailHtml = `Tổng: ${parseInt(t.totalPrice).toLocaleString('vi-VN')}₫. Đang chờ vận chuyển.`;
        } else if (t.status === 'Đang giao' && t.tracking) {
          detailHtml = `Mã VĐ: <b>${t.tracking}</b>. Đặt ngày: ${t.date}`;
        } else if (t.status === 'Đánh giá') {
          detailHtml = `Đã giao ngày: ${t.date} <button style="margin-left:10px;padding:5px 10px;cursor:pointer;">Viết đánh giá</button>`;
        }

        const itemNames = t.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
        content += `<li style="border:1px solid #eee;padding:10px;margin-bottom:5px;border-radius:3px;">
          <b>ĐH #${t.id}</b>: ${itemNames} | ${detailHtml}
        </li>`;
      }
    });
    content += `</ul>`;
  } else {
    content += `<p style="color:gray;font-style:italic;">Không có đơn hàng nào ở trạng thái ${status}.</p>`;
  }

  if (orderContentArea) orderContentArea.innerHTML = content;
}

// --- CHỨC NĂNG HỖ TRỢ ---
const supportContentArea = document.getElementById("support-content");

function hienThiHoTro(type) {
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

  if (supportContentArea) supportContentArea.innerHTML = content;
}
