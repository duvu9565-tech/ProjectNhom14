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

function checkout() {
  alert("🧾 Cảm ơn bạn đã mua hàng! Chức năng thanh toán đang được phát triển.");
  localStorage.removeItem("cart");
  loadCart();
}

// Khi trang vừa load
loadCart();
