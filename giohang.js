function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartBody = document.getElementById("cartBody");
  const totalPriceEl = document.getElementById("totalPrice");

  if (cart.length === 0) {
    cartBody.innerHTML = "<tr><td colspan='6'>Giỏ hàng trống!</td></tr>";
    totalPriceEl.textContent = "0";
    return;
  }

  let total = 0;
  cartBody.innerHTML = "";
  cart.forEach((item, index) => {
    const price = parseInt(item.price);
    const itemTotal = price * item.quantity;
    total += itemTotal;

    cartBody.innerHTML += `
      <tr>
        <td><img src="${item.img}" class="cart-img"></td>
        <td>${item.name}</td>
        <td>${price.toLocaleString()}đ</td>
        <td>
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          ${item.quantity}
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </td>
        <td>${itemTotal.toLocaleString()}đ</td>
        <td><button class="remove-btn" onclick="removeItem(${item.id})">🗑️</button></td>
      </tr>
    `;
  });

  totalPriceEl.textContent = total.toLocaleString();
}

function changeQty(id, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(p => p.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(p => p.id !== id);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(p => p.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// ✅ HÀM CHECKOUT MỚI (bạn thêm vào đây, thay cho bản cũ)
function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }
  
  // 1. Lấy danh sách đơn hàng hiện tại (Đã có hoặc trống)
  let orders = JSON.parse(localStorage.getItem("userOrders")) || [];
  let nextOrderId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1000;
  const currentDate = new Date().toISOString().substring(0, 10);

  // 2. Chuyển giỏ hàng thành một đơn hàng mới ở trạng thái "Chờ lấy hàng"
  const newOrder = {
    id: nextOrderId,
    items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
    })),
    totalPrice: document.getElementById("totalPrice").textContent.replace(/\D/g, ''), // Lấy tổng tiền
    status: "Chờ lấy hàng",
    date: currentDate
  };

  orders.push(newOrder);

  // 3. Lưu lại danh sách đơn hàng đã cập nhật
  localStorage.setItem("userOrders", JSON.stringify(orders));

  // 4. Xóa giỏ hàng sau khi thanh toán
  localStorage.removeItem("cart");

  alert("🎉 Thanh toán thành công! Đơn hàng của bạn đang ở trạng thái 'Chờ lấy hàng'. Vui lòng kiểm tra mục Người dùng.");
  
  // 5. Tải lại giỏ hàng (hiện Giỏ hàng trống)
  loadCart();

  // Tuỳ chọn: Chuyển hướng sang trang Người dùng
  // window.location.href = 'GDND.html';
}

// Khi trang vừa load
loadCart();
