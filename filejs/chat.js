// filejs/chat.js - PHIÊN BẢN HOÀN CHỈNH VÀ ĐÃ BỎ HÀM SETINTERVAL LỖI

const CHAT_STORAGE_KEY = 'allUserChatHistories';
const CURRENT_USER_ID = getCurrentUserId(); 

function getCurrentUserId() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // Trả về username nếu không phải admin, hoặc 'admin_system' nếu là admin
        return currentUser.role === 'admin' ? 'admin_system' : currentUser.username; 
    }
    return 'Guest'; 
}

// ----------------------------------------------------
// ====== QUẢN LÝ LỊCH SỬ CHUNG (Tải và Lưu) ===========
// ----------------------------------------------------

function getChatHistory(targetUserId) {
    const allHistories = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY)) || {};
    return allHistories[targetUserId] || [];
}

function saveChatHistory(targetUserId, history) {
    let allHistories = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY)) || {};
    allHistories[targetUserId] = history;
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(allHistories));
}

/**
 * Lấy danh sách tất cả Khách hàng đã có lịch sử chat.
 */
function getAllChattingUsers() {
    const allHistories = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY)) || {};
    // Lọc ra tất cả các key không phải là 'admin_system' và 'Guest'
    return Object.keys(allHistories).filter(id => id !== 'admin_system' && id !== 'Guest');
}
window.getAllChattingUsers = getAllChattingUsers;


/**
 * Kiểm tra xem có tin nhắn MỚI (tin cuối là của user)
 */
function hasNewMessage(userId) {
    const history = getChatHistory(userId);
    if (history.length === 0) return false;
    return history[history.length - 1].sender === 'user';
}
window.hasNewMessage = hasNewMessage;


// ----------------------------------------------------
// ====== LOGIC HIỂN THỊ TIN NHẮN (TẢI) ================
// ----------------------------------------------------

function loadChat(role, targetUserId = CURRENT_USER_ID) {
    const chatbox = document.getElementById('chatbox');
    if (!chatbox) return;

    const history = getChatHistory(targetUserId);
    chatbox.innerHTML = '';
    
    if (history.length === 0) {
        // Chỉ hiển thị thông báo nếu đang chat với một người dùng hợp lệ
        if (targetUserId !== 'Guest') { 
            chatbox.innerHTML = '<p class="welcome-message">Bắt đầu trò chuyện để nhận hỗ trợ.</p>';
        }
        return;
    }

    history.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (msg.sender === 'user') {
            messageDiv.classList.add('user-message');
            messageDiv.textContent = msg.text;
        } 
        else if (msg.sender === 'admin_system') {
            messageDiv.classList.add('admin-message');
            
            // Xử lý hiển thị cho User và Admin
            if (role === 'user') {
                messageDiv.textContent = `Admin: ${msg.text}`;
            } else { 
                messageDiv.textContent = msg.text;
            }
        }

        chatbox.appendChild(messageDiv);
    });

    chatbox.scrollTop = chatbox.scrollHeight;
}
window.loadChat = loadChat;

// ----------------------------------------------------
// ====== LOGIC GỬI TIN NHẮN ===========================
// ----------------------------------------------------

function sendMessage(event, role, targetUserId = CURRENT_USER_ID) {
    event.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const text = messageInput.value.trim();

    if (!text) return;

    const senderRole = role === 'user' ? 'user' : 'admin_system';
    // Khách hàng gửi cho chính mình (CURRENT_USER_ID); Admin gửi cho targetUserId
    const finalTargetId = role === 'user' ? CURRENT_USER_ID : targetUserId; 

    const newMessage = {
        id: Date.now(),
        sender: senderRole,
        userId: finalTargetId, 
        timestamp: new Date().toLocaleTimeString(),
        text: text
    };

    let history = getChatHistory(finalTargetId);
    history.push(newMessage);
    saveChatHistory(finalTargetId, history);

    // Tải lại giao diện chat
    loadChat(role, finalTargetId);

    // Xóa input
    messageInput.value = '';
    
    // Kích hoạt event để Admin Dashboard biết có tin nhắn mới (chỉ khi Khách hàng gửi)
    if (role === 'user') {
         window.dispatchEvent(new Event('newMessage'));
    }
}
window.sendMessage = sendMessage;

// *** LƯU Ý QUAN TRỌNG: BỎ PHẦN setInterval CŨ Ở ĐÂY VÌ NÓ GÂY LỖI LOGIC ADMIN ***
// Việc tự động cập nhật đã được chuyển sang adminChat.html và loadChatList()