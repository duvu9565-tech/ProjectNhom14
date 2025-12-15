// adminChat.js
// Logic xử lý chat và hiển thị tên người dùng cho giao diện Admin (adminChat.html)

// Biến lưu trữ ID khách hàng hiện tại Admin đang chat
let currentChattingUserId = null; 

/**
 * Lấy Tên hiển thị (displayName) của User từ Local Storage.
 * @param {string} userId - Tên đăng nhập (username) của người dùng.
 * @returns {string} - Tên hiển thị mới nhất, hoặc tên đăng nhập nếu chưa chỉnh sửa.
 */
function getUserDisplayName(userId) {
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Tìm người dùng bằng tên đăng nhập (userId)
    const user = allUsers.find(u => u.username === userId); 
    
    // Trả về displayName nếu có, ngược lại trả về username (userId)
    return user ? (user.displayName || userId) : userId; 
}

/**
 * Khởi tạo chức năng chat Admin. Được gọi qua body onload.
 */
function initializeAdminChat() {
    loadChatList();
    
    // Thiết lập interval tự động cập nhật danh sách và chat
    setInterval(loadChatList, 5000); 
    
    // Listener để reload danh sách nếu có tin nhắn mới từ Khách hàng
    window.addEventListener('newMessage', loadChatList);
}
window.initializeAdminChat = initializeAdminChat;


/**
 * 1. Hàm tải danh sách khách hàng (Sidebar) - SỬ DỤNG displayName.
 */
function loadChatList() {
    const customerChatList = document.getElementById('customerChatList');
    const scrollTop = customerChatList.scrollTop; 
    customerChatList.innerHTML = '';
    
    // Giả định getAllChattingUsers và getChatHistory/hasNewMessage được định nghĩa trong chat.js
    const userIds = getAllChattingUsers(); 

    if (userIds.length === 0) {
        customerChatList.innerHTML = '<p style="padding: 10px; color: #666;">Chưa có khách hàng nào gửi tin nhắn.</p>';
        return;
    }

    userIds.forEach(userId => {
        const history = getChatHistory(userId);
        const lastMessage = history.length > 0 ? history[history.length - 1] : null; 
        const isNew = hasNewMessage(userId);
        
        // LẤY TÊN HIỂN THỊ ĐÃ CHỈNH SỬA
        const nameToDisplay = getUserDisplayName(userId); 

        const itemDiv = document.createElement('div');
        itemDiv.className = 'user-chat-item';
        
        if (userId === currentChattingUserId) {
            itemDiv.classList.add('active');
        }
        
        itemDiv.dataset.userId = userId;
        
        const lastMsgText = lastMessage 
            ? (lastMessage.sender === 'user' ? 'Khách: ' : 'Bạn: ') + lastMessage.text.substring(0, 30) + (lastMessage.text.length > 30 ? '...' : '')
            : 'Chưa có tin nhắn.';
            
        itemDiv.innerHTML = `
            <strong>👤 ${nameToDisplay}</strong> 
            ${isNew && userId !== currentChattingUserId ? '<span class="new-message-indicator">MỚI</span>' : ''}
            <p style="color: #666; font-size: 0.85em; margin: 5px 0 0;">
                ${lastMsgText}
            </p>
        `;
        itemDiv.onclick = () => openAdminChatWindow(userId);
        
        customerChatList.appendChild(itemDiv);
    });
    
    customerChatList.scrollTop = scrollTop;

    if (!currentChattingUserId && userIds.length > 0) {
        openAdminChatWindow(userIds[0]);
    } else if (currentChattingUserId) {
        loadChat('admin', currentChattingUserId);
    }
}
window.loadChatList = loadChatList; 

/**
 * 2. Hàm mở cửa sổ chat với khách hàng được chọn - SỬ DỤNG displayName.
 * @param {string} userId - Tên đăng nhập của người dùng cần chat.
 */
function openAdminChatWindow(userId) {
    currentChattingUserId = userId;
    
    document.querySelectorAll('.user-chat-item').forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`[data-user-id="${userId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    const indicator = activeItem ? activeItem.querySelector('.new-message-indicator') : null;
    if (indicator) {
        indicator.remove();
    }

    // LẤY TÊN HIỂN THỊ ĐÃ CHỈNH SỬA
    const nameToDisplay = getUserDisplayName(userId); 

    // Cập nhật tiêu đề khung chat
    document.getElementById('chatHeader').textContent = `Đang chat với: 👤 ${nameToDisplay}`;
    
    document.getElementById('messageInput').disabled = false;
    document.querySelector('.message-form button').disabled = false;

    // Tải lịch sử chat (hàm từ chat.js)
    loadChat('admin', userId); 
}

/**
 * 3. Hàm xử lý gửi tin nhắn của Admin.
 * @param {Event} event - Sự kiện submit form.
 */
function handleAdminSend(event) {
    if (currentChattingUserId) {
        // sendMessage là hàm từ chat.js
        sendMessage(event, 'admin', currentChattingUserId);
    }
}
window.handleAdminSend = handleAdminSend; // Xuất hàm để form HTML có thể gọi