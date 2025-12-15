// hoso.js - Xử lý logic chỉnh sửa và lưu trữ hồ sơ

const CURRENT_USER_KEY = 'currentUser'; // Key mặc định cho người dùng hiện tại

// --- 1. Load thông tin cũ vào form ---
function loadProfileData() {
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    
    // Nếu không có người dùng, không làm gì hoặc chuyển hướng
    if (!currentUser) return; 

    // Điền dữ liệu cũ vào form
    const userNameInput = document.getElementById('userName');
    const userPhoneInput = document.getElementById('userPhone');
    
    if (userNameInput) {
        // Điền tên hiện tại (sử dụng OR để tránh lỗi nếu trường không tồn tại)
        userNameInput.value = currentUser.username || '';
    }
    if (userPhoneInput) {
        // Điền số điện thoại hiện tại
        userPhoneInput.value = currentUser.phone || '';
    }
    
    // Giả định cập nhật Avatar (chỉ cần URL/Base64)
    const currentAvatarEl = document.getElementById('currentAvatar');
    if (currentAvatarEl && currentUser.avatarUrl) {
        currentAvatarEl.src = currentUser.avatarUrl;
    }
}
window.loadProfileData = loadProfileData;

// --- 2. Xử lý sự kiện Submit Form (LƯU DỮ LIỆU) ---
function handleProfileSubmit(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    const newName = document.getElementById('userName').value.trim();
    const newPhone = document.getElementById('userPhone').value.trim();
    
    // Lấy đối tượng người dùng hiện tại
    let currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

    if (currentUser) {
        // Cập nhật các trường thông tin quan trọng
        currentUser.username = newName;
        currentUser.phone = newPhone; // Thêm trường phone vào đối tượng currentUser
        
        // Lưu lại đối tượng đã được cập nhật vào localStorage
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); 

        alert('Cập nhật hồ sơ thành công!');
        
        // Chuyển hướng người dùng về trang Dashboard (GDND.html)
        window.location.href = 'GDND.html'; 
    } else {
        alert('Lỗi: Không tìm thấy thông tin người dùng để cập nhật.');
    }
}

// --- 3. Gắn sự kiện khi DOM được tải ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tải dữ liệu cũ vào form ngay lập tức
    loadProfileData(); 

    // 2. Lắng nghe sự kiện submit của form
    const form = document.getElementById('profileEditForm');
    if (form) {
        form.addEventListener('submit', handleProfileSubmit);
    }
});