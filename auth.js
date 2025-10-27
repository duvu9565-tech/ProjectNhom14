// auth.js (Phần đầu giữ nguyên)

const AUTH_KEY = 'isAuthenticated';
const REDIRECT_PAGE = 'index.html';
const LOGIN_PAGE = 'dangnhap.html';

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
  const isLoggedIn = localStorage.getItem(AUTH_KEY) === 'true';
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (isLoginPage) {
    // Nếu đã login và đang ở login page, chuyển về index.html
    if (isLoggedIn && currentUser) {
      window.location.href = REDIRECT_PAGE;
    }
    // Nếu chưa login, ở login page → không redirect nữa
    return;
  }

  // Trang cần bảo vệ
  if (!isLoggedIn || !currentUser) {
    const currentPath = window.location.pathname.split('/').pop();
    // Chỉ lưu redirect nếu không phải login.html
    if (currentPath !== LOGIN_PAGE) {
      localStorage.setItem('redirectAfterLogin', currentPath);
    }
    window.location.href = LOGIN_PAGE;
  }
}


/**
 * Xử lý đăng nhập
 */
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem(AUTH_KEY, 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert(`Đăng nhập thành công! Xin chào ${user.username}`);

    // Chuyển hướng về trang đã cố gắng truy cập trước đó hoặc index.html
    const redirectTo = localStorage.getItem('redirectAfterLogin') || REDIRECT_PAGE;
    localStorage.removeItem('redirectAfterLogin');
    window.location.href = redirectTo;

  } else {
    localStorage.setItem(AUTH_KEY, 'false');
    localStorage.removeItem('currentUser');
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

/**
 * Xử lý đăng ký
 */
function handleRegister(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(u => u.username === username)) {
    alert("Tên đăng nhập này đã tồn tại!");
    return;
  }
  users.push({ username, password, role: "user" });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");
}

/**
 * Xử lý đăng xuất
 */
function handleLogout() {
  localStorage.setItem(AUTH_KEY, 'false');
  localStorage.removeItem('currentUser');
  alert("Bạn đã đăng xuất thành công!");
  window.location.href = LOGIN_PAGE;
}

// -----------------------------------------------------
// PHẦN CODE ĐÃ ĐƯỢC SỬA ĐỂ KHẮC PHỤC LỖI CHUYỂN HƯỚNG VÔ HẠN
// -----------------------------------------------------

// Lấy tên file hiện tại
const currentPage = window.location.pathname.split('/').pop();
const isLoginPage = currentPage === LOGIN_PAGE;

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const showRegisterBtn = document.getElementById("showRegister");
  const backToLoginBtn = document.getElementById("backToLogin");

  // Xử lý form Login
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  // Xử lý chuyển đổi giữa Login và Register
  if (showRegisterBtn && registerForm && loginForm) {
    showRegisterBtn.addEventListener("click", e => {
      e.preventDefault();
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });
    backToLoginBtn.addEventListener("click", e => {
      e.preventDefault();
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  // Xử lý form Register
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      handleRegister(username, password);
      registerForm.reset();
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  // LOGIC KHẮC PHỤC LỖI: Chỉ gọi checkAuth(true) nếu đang ở trang đăng nhập.
  // Nếu là trang khác (cần bảo vệ) thì gọi checkAuth()
  if (isLoginPage) {
    checkAuth(true); 
  } else {
    // Nếu trang hiện tại không phải là trang đăng nhập, thì nó là trang cần bảo vệ.
    // Gọi checkAuth() để kiểm tra nếu chưa login thì chuyển hướng đến trang đăng nhập.
    checkAuth(false); // checkAuth() hoặc checkAuth(false) là giống nhau
  }
});