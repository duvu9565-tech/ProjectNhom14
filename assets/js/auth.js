// auth.js (Phần đầu giữ nguyên)

const AUTH_KEY = "isAuthenticated";
const REDIRECT_PAGE = "index.html";
const LOGIN_PAGE = "dangnhap.html";

// Tạo tài khoản admin mặc định nếu chưa có
const defaultAdmin = { username: "admin", password: "123456", role: "admin" };
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([defaultAdmin]));
}

/**
 * Kiểm tra trạng thái đăng nhập
 * @param {boolean} isLoginPage - true nếu đang ở trang đăng nhập
 */
function checkAuth(isLoginPage = false) {
  const isLoggedIn = localStorage.getItem(AUTH_KEY) === "true";
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (isLoginPage) {
    // Nếu đã login và đang ở login page, chuyển về index.html (hoặc theo role)
    if (isLoggedIn && currentUser) {
      if (currentUser.role === "admin") {
        window.location.href = "admin.html";
      } else if (currentUser.role === "shipper") {
        window.location.href = "shipper.html";
      } else {
        window.location.href = REDIRECT_PAGE;
      }
    }
    return;
  }

  // Trang cần bảo vệ
  if (!isLoggedIn || !currentUser) {
    const currentPath = window.location.pathname.split("/").pop();
    if (currentPath !== LOGIN_PAGE) {
      localStorage.setItem("redirectAfterLogin", currentPath);
    }
    window.location.href = LOGIN_PAGE;
  }
}

/**
 * Xử lý đăng nhập
 */
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Thêm tài khoản Shipper mẫu
  let defaultShipper = {
    username: "shipper",
    password: "123",
    role: "shipper",
  };
  if (!users.find((u) => u.username === defaultShipper.username)) {
    users.push(defaultShipper);
    localStorage.setItem("users", JSON.stringify(users)); // Lưu lại danh sách nếu thêm shipper mẫu
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    // LOGIC CHUYỂN HƯỚNG MỚI DỰA TRÊN VAI TRÒ
    if (user.role === "admin") {
      window.location.href = "admin.html";
    } else if (user.role === "shipper") {
      window.location.href = "shipper.html";
    } else {
      // Vai trò 'user' thông thường
      const redirect =
        localStorage.getItem("redirectAfterLogin") || REDIRECT_PAGE;
      localStorage.removeItem("redirectAfterLogin");
      window.location.href = redirect;
    }
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

/**
 * Xử lý đăng ký (ĐÃ THÊM THAM SỐ VAI TRÒ)
 */
function handleRegister(username, password, role) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((u) => u.username === username)) {
    alert("Tên đăng nhập này đã tồn tại!");
    return false;
  }
  // Sử dụng vai trò được truyền vào
  users.push({ username, password, role: role });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");
  return true;
}

/**
 * Xử lý đăng xuất
 */
function handleLogout() {
  localStorage.setItem(AUTH_KEY, "false");
  localStorage.removeItem("currentUser");
  alert("Bạn đã đăng xuất thành công!");
  window.location.href = LOGIN_PAGE;
}

// -----------------------------------------------------
// LOGIC XỬ LÝ DOM VÀ CHUYỂN ĐỔI FORM (ĐÃ SỬA ĐỔI)
// -----------------------------------------------------

// Lấy tên file hiện tại
const currentPage = window.location.pathname.split("/").pop();
const isLoginPage = currentPage === LOGIN_PAGE;

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Các phần tử DOM mới
  const showRegisterUserBtn = document.getElementById("showRegisterUser");
  const showRegisterShipperBtn = document.getElementById("showRegisterShipper");
  const backToLoginBtn = document.getElementById("backToLogin");
  const regRoleInput = document.getElementById("regRole");
  const registerRoleDisplay = document.getElementById("registerRoleDisplay");
  const registerOptionsDiv = document.querySelector(".register-options");

  // Xử lý form Login
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  // Hàm chung để chuyển sang form đăng ký và thiết lập vai trò
  function showRegisterForm(role) {
    if (loginForm) loginForm.style.display = "none";
    if (registerOptionsDiv) registerOptionsDiv.style.display = "none";
    if (registerForm) registerForm.style.display = "block";

    if (regRoleInput) regRoleInput.value = role;
    if (registerRoleDisplay) {
      registerRoleDisplay.textContent =
        role === "shipper" ? "Người vận chuyển" : "Người dùng";
    }
  }

  // Xử lý chuyển đổi khi nhấn các nút đăng ký mới
  if (showRegisterUserBtn && registerForm && loginForm) {
    showRegisterUserBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showRegisterForm("user");
    });
  }

  if (showRegisterShipperBtn && registerForm && loginForm) {
    showRegisterShipperBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showRegisterForm("shipper");
    });
  }

  // Xử lý nút Quay lại đăng nhập
  if (backToLoginBtn && registerForm && loginForm) {
    backToLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (registerForm) registerForm.style.display = "none";
      if (loginForm) loginForm.style.display = "block";
      if (registerOptionsDiv) registerOptionsDiv.style.display = "block"; // Hiện lại các nút chọn vai trò
      if (registerForm) registerForm.reset();
    });
  }

  // Xử lý form Register Submission
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const role = document.getElementById("regRole").value; // Lấy vai trò đã thiết lập

      // Gọi hàm đăng ký với vai trò
      const success = handleRegister(username, password, role);

      // Đăng ký xong (thành công), quay lại đăng nhập
      if (success) {
        if (registerForm) registerForm.reset();
        if (registerForm) registerForm.style.display = "none";
        if (loginForm) loginForm.style.display = "block";
        if (registerOptionsDiv) registerOptionsDiv.style.display = "block"; // Hiện lại các nút chọn vai trò
      }
    });
  }

  // LOGIC KHẮC PHỤC LỖI: Chỉ gọi checkAuth(true) nếu đang ở trang đăng nhập.
  if (isLoginPage) {
    checkAuth(true);
  } else {
    checkAuth(false);
  }
});
