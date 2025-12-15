// hoso.js - Xử lý logic chỉnh sửa và lưu trữ hồ sơ

const CURRENT_USER_KEY = 'currentUser';
const USERS_STORAGE_KEY = 'users'; 
// KHÔNG CẦN KHAI BÁO LOGIN_PAGE (vì nó đã có trong auth.js)


// --- 1. Load thông tin cũ vào form ---
function loadProfileData() {
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    
    if (!currentUser) {
        // Sử dụng biến toàn cục LOGIN_PAGE từ auth.js
        if (typeof LOGIN_PAGE !== 'undefined') {
            window.location.href = LOGIN_PAGE;
        } else {
            window.location.href = 'dangnhap.html';
        }
        return; 
    } 

    const userNameInput = document.getElementById('userName');
    const userPhoneInput = document.getElementById('userPhone');
    
    // HIỂN THỊ TÊN ĐƯỢC LƯU TRONG TRƯỜNG 'displayName'
    if (userNameInput) {
        // Ưu tiên displayName, nếu không có thì dùng username (tên đăng nhập)
        userNameInput.value = currentUser.displayName || currentUser.username || '';
    }
    if (userPhoneInput) {
        userPhoneInput.value = currentUser.phone || '';
    }
    
    // Giả định cập nhật Avatar
    const currentAvatarEl = document.getElementById('currentAvatar');
    if (currentAvatarEl && currentUser.avatarUrl) {
        currentAvatarEl.src = currentUser.avatarUrl;
    }
}
window.loadProfileData = loadProfileData;


// --- 2. Xử lý sự kiện Submit Form (CHỈ CẬP NHẬT TÊN HIỂN THỊ VÀ PHONE) ---
function handleProfileSubmit(event) {
    event.preventDefault(); // QUAN TRỌNG: Ngăn chặn reload trang

    const newDisplayName = document.getElementById('userName').value.trim();
    const newPhone = document.getElementById('userPhone').value.trim();
    
    let currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

    if (currentUser) {
        let allUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY)) || [];

        // 1. CẬP NHẬT currentUser TẠM THỜI
        currentUser.displayName = newDisplayName; // Tên hiển thị mới
        currentUser.phone = newPhone; 
        
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); 

        // 2. CẬP NHẬT DANH SÁCH USERS VĨNH VIỄN
        const userIndex = allUsers.findIndex(u => u.username === currentUser.username); 

        if (userIndex !== -1) {
            allUsers[userIndex].displayName = newDisplayName; 
            allUsers[userIndex].phone = newPhone; 
            // Đảm bảo username (tên đăng nhập) KHÔNG BỊ THAY ĐỔI
            
            localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(allUsers));
        } else {
            console.warn('Cảnh báo: Không tìm thấy người dùng trong danh sách Users để lưu vĩnh viễn.');
        }

        alert('Cập nhật hồ sơ thành công!');
        window.location.href = 'GDND.html'; 
    } else {
        alert('Lỗi: Không tìm thấy thông tin người dùng để cập nhật.');
    }
}
window.handleProfileSubmit = handleProfileSubmit; // Xuất hàm để có thể truy cập nếu cần

// --- 3. Gắn sự kiện khi DOM được tải ---
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData(); 

    const form = document.getElementById('profileEditForm');
    if (form) {
        form.addEventListener('submit', handleProfileSubmit);
    }
});