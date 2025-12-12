// rating.js - ĐÃ CẬP NHẬT HOÀN CHỈNH (Thêm hienThiRating chi tiết)

const ORDER_RATING_KEY = 'orderRatings'; // Key lưu trữ đánh giá

// 1. Lấy thông tin đánh giá (cả shop và shipper)
function getOrderRating(orderId) {
    const allRatings = JSON.parse(localStorage.getItem(ORDER_RATING_KEY)) || {};
    return allRatings[orderId] || { shop: null, shipper: null }; // Trả về cấu trúc mặc định
}
window.getOrderRating = getOrderRating;

// 2. Lưu đánh giá mới (phải chỉ rõ là đánh giá cho shop hay shipper)
function saveOrderRating(orderId, ratingType, rating, comment) {
    const allRatings = JSON.parse(localStorage.getItem(ORDER_RATING_KEY)) || {};
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert("Vui lòng đăng nhập để đánh giá!");
        return false;
    }
    
    // Đảm bảo cấu trúc orderId tồn tại
    if (!allRatings[orderId]) {
        allRatings[orderId] = { shop: null, shipper: null };
    }

    allRatings[orderId][ratingType] = {
        userId: currentUser.username, 
        rating: parseInt(rating),
        comment: comment.trim(),
        date: new Date().toISOString().substring(0, 10)
    };

    localStorage.setItem(ORDER_RATING_KEY, JSON.stringify(allRatings));
    alert(`Đánh giá ${ratingType === 'shop' ? 'Shop' : 'Shipper'} cho đơn hàng #${orderId} đã được gửi thành công!`);

    // Tải lại giao diện GDND.html
    window.location.reload(); 
    return true;
}
window.saveOrderRating = saveOrderRating;

// 3. Hàm hiển thị form đánh giá hoặc kết quả đánh giá (Dùng cho GDND.js)
function hienThiRating(orderId) {
    const rating = getOrderRating(orderId);
    const shopRating = rating.shop;
    const shipperRating = rating.shipper;

    let html = '';

    // --- 1. Đánh giá SHOP ---
    if (shopRating) {
        // Đã đánh giá Shop
        const stars = '★'.repeat(shopRating.rating) + '☆'.repeat(5 - shopRating.rating);
        html += `
            <div style="border: 1px solid #ff5722; padding: 10px; margin-top: 10px; border-radius: 5px; background: #fff8f5;">
                <p style="color: #ff5722; font-weight: bold;">1. Đã đánh giá SHOP:</p>
                <p class="product-rating"><span class="stars" style="color: gold; font-size: 18px;">${stars}</span> (Điểm: ${shopRating.rating}/5)</p>
                <p><strong>Nhận xét:</strong> ${shopRating.comment || 'Không có nhận xét.'}</p>
            </div>
        `;
    } else {
        // Form đánh giá Shop
        html += `
            <div style="border: 1px dashed #ff5722; padding: 10px; margin-top: 10px; border-radius: 5px;">
                <p style="color: #ff5722; font-weight: bold;">1. Đánh giá SHOP (Sản phẩm, Dịch vụ):</p>
                <select id="shop-rating-${orderId}">
                    <option value="5">5 Sao - Rất tốt</option>
                    <option value="4">4 Sao - Tốt</option>
                    <option value="3">3 Sao - Bình thường</option>
                    <option value="2">2 Sao - Kém</option>
                    <option value="1">1 Sao - Rất kém</option>
                </select>
                <textarea id="shop-comment-${orderId}" placeholder="Nhận xét về Shop..." rows="2" style="width: 100%; margin-top: 10px;"></textarea>
                <button 
                    onclick="saveOrderRating(
                        ${orderId}, 
                        'shop', 
                        document.getElementById('shop-rating-${orderId}').value, 
                        document.getElementById('shop-comment-${orderId}').value
                    )"
                    class="status-btn confirm" style="background: #ff5722;">Gửi đánh giá Shop</button>
            </div>
        `;
    }

    // --- 2. Đánh giá SHIPPER ---
    if (shipperRating) {
        // Đã đánh giá Shipper
        const stars = '★'.repeat(shipperRating.rating) + '☆'.repeat(5 - shipperRating.rating);
        html += `
            <div style="border: 1px solid #007bff; padding: 10px; margin-top: 10px; border-radius: 5px; background: #f5fcff;">
                <p style="color: #007bff; font-weight: bold;">2. Đã đánh giá Shipper:</p>
                <p class="product-rating"><span class="stars" style="color: gold; font-size: 18px;">${stars}</span> (Điểm: ${shipperRating.rating}/5)</p>
                <p><strong>Nhận xét:</strong> ${shipperRating.comment || 'Không có nhận xét.'}</p>
            </div>
        `;
    } else {
        // Form đánh giá Shipper
        html += `
            <div style="border: 1px dashed #007bff; padding: 10px; margin-top: 10px; border-radius: 5px;">
                <p style="color: #007bff; font-weight: bold;">2. Đánh giá Shipper (Thái độ, Tốc độ):</p>
                <select id="shipper-rating-${orderId}">
                    <option value="5">5 Sao - Rất hài lòng</option>
                    <option value="4">4 Sao - Hài lòng</option>
                    <option value="3">3 Sao - Bình thường</option>
                    <option value="2">2 Sao - Kém</option>
                    <option value="1">1 Sao - Rất kém</option>
                </select>
                <textarea id="shipper-comment-${orderId}" placeholder="Nhận xét về Shipper..." rows="2" style="width: 100%; margin-top: 10px;"></textarea>
                <button 
                    onclick="saveOrderRating(
                        ${orderId}, 
                        'shipper', 
                        document.getElementById('shipper-rating-${orderId}').value, 
                        document.getElementById('shipper-comment-${orderId}').value
                    )"
                    class="status-btn shipping" style="background: #007bff;">Gửi đánh giá Shipper</button>
            </div>
        `;
    }
    
    // Nếu đã đánh giá cả 2 phần, thông báo hoàn tất
    if (shopRating && shipperRating) {
        html = `<p style="color: green; font-weight: bold; text-align: center;">✅ Đã hoàn tất đánh giá cho đơn hàng này!</p>` + html;
    }

    return html;
}
window.hienThiRating = hienThiRating; // Ràng buộc hàm vào Window