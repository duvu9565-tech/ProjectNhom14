
// Biến toàn cục để lưu trữ danh sách sản phẩm mẫu.
// Dòng này phải được thực thi SAU KHI thẻ <section> đã được tải

const products = [
    // =======================================================
    // ====== ĐIỆN THOẠI (1/20) ===============================
    {
       
    id: 1,
    name: "Điện thoại Samsung Galaxy S23",
    price: "21990000",
    img: "/images/dt23.jpg",
    category: "Điện thoại",
    origin: "Hàn Quốc",
    sold: 1532,
    rate: 4.8
}
    ,
    // ====== ĐIỆN THOẠI (2/20)
    {
        id: 2,
        name: "Điện thoại iPhone 15 Pro Max",
        price: "30990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-pro-max-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Mỹ",
        sold: 2541,
        rate: 4.9
    },
    // ====== ĐIỆN THOẠI (3/20)
    {
        id: 3,
        name: "Xiaomi 13T Pro",
        price: "16990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/306782/xiaomi-13t-pro-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 850,
        rate: 4.7
    },
    // ====== ĐIỆN THOẠI (4/20)
    {
        id: 4,
        name: "OPPO Reno10 5G",
        price: "9990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/307409/oppo-reno10-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 1200,
        rate: 4.6
    },
    // ====== ĐIỆN THOẠI (5/20)
    {
        id: 5,
        name: "Vivo V29 5G",
        price: "11990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/307222/vivo-v29-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 600,
        rate: 4.5
    },
    // ====== ĐIỆN THOẠI (6/20)
    {
        id: 6,
        name: "iPhone 14 Pro Max (Cũ)",
        price: "24000000",
        img: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-thumb-den-600x600.jpg",
        category: "Điện thoại",
        origin: "Mỹ",
        sold: 3100,
        rate: 4.9
    },
    // ====== ĐIỆN THOẠI (7/20)
    {
        id: 7,
        name: "Samsung Galaxy A54",
        price: "10490000",
        img: "https://cdn.tgdd.vn/Products/Images/42/292728/samsung-galaxy-a54-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Hàn Quốc",
        sold: 1800,
        rate: 4.5
    },
    // ====== ĐIỆN THOẠI (8/20)
    {
        id: 8,
        name: "Realme C51",
        price: "3490000",
        img: "https://cdn.tgdd.vn/Products/Images/42/313330/realme-c51-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 950,
        rate: 4.4
    },
    // ====== ĐIỆN THOẠI (9/20)
    {
        id: 9,
        name: "Nokia C21 Plus",
        price: "2590000",
        img: "https://cdn.tgdd.vn/Products/Images/42/269151/nokia-c21-plus-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Phần Lan",
        sold: 700,
        rate: 4.3
    },
    // ====== ĐIỆN THOẠI (10/20)
    {
        id: 10,
        name: "Google Pixel 8 Pro",
        price: "28990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/314275/google-pixel-8-pro-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Mỹ",
        sold: 450,
        rate: 4.8
    },
    // ====== ĐIỆN THOẠI (11/20)
    {
        id: 11,
        name: "ASUS ROG Phone 7 Ultimate",
        price: "29990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/306782/xiaomi-13t-pro-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Đài Loan",
        sold: 250,
        rate: 4.9
    },
    // ====== ĐIỆN THOẠI (12/20)
    {
        id: 12,
        name: "OnePlus 11 5G",
        price: "17990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/307409/oppo-reno10-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 550,
        rate: 4.7
    },
    // ====== ĐIỆN THOẠI (13/20)
    {
        id: 13,
        name: "iPhone SE (2022)",
        price: "10990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/272214/iphone-se-2022-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Mỹ",
        sold: 1500,
        rate: 4.5
    },
    // ====== ĐIỆN THOẠI (14/20)
    {
        id: 14,
        name: "Samsung Galaxy Z Fold5",
        price: "40990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/305282/samsung-galaxy-z-fold5-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Hàn Quốc",
        sold: 780,
        rate: 4.8
    },
    // ====== ĐIỆN THOẠI (15/20)
    {
        id: 15,
        name: "Motorola Edge 30 Ultra",
        price: "18990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/292728/samsung-galaxy-a54-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Mỹ",
        sold: 350,
        rate: 4.6
    },
    // ====== ĐIỆN THOẠI (16/20)
    {
        id: 16,
        name: "Tecno Spark 10 Pro",
        price: "3990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/306782/xiaomi-13t-pro-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 620,
        rate: 4.2
    },
    // ====== ĐIỆN THOẠI (17/20)
    {
        id: 17,
        name: "Infinix Note 30",
        price: "4990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/307409/oppo-reno10-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 510,
        rate: 4.4
    },
    // ====== ĐIỆN THOẠI (18/20)
    {
        id: 18,
        name: "HONOR Magic5 Pro",
        price: "24990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/314275/google-pixel-8-pro-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Trung Quốc",
        sold: 280,
        rate: 4.7
    },
    // ====== ĐIỆN THOẠI (19/20)
    {
        id: 19,
        name: "Sony Xperia 1 V",
        price: "27990000",
        img: "https://cdn.tgdd.vn/Products/Images/42/250622/samsung-galaxy-s23-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Nhật Bản",
        sold: 190,
        rate: 4.8
    },
    // ====== ĐIỆN THOẠI (20/20)
    {
        id: 20,
        name: "LG Wing (Cũ)",
        price: "15000000",
        img: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-pro-max-thumb-600x600.jpg",
        category: "Điện thoại",
        origin: "Hàn Quốc",
        sold: 100,
        rate: 4.1
    },

    // =======================================================
    // ====== LAPTOP (1/20) ===================================
    {
        id: 21,
        name: "Laptop Acer Aspire 7",
        price: "18490000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 964,
        rate: 4.5
    },
    // ====== LAPTOP (2/20)
    {
        id: 22,
        name: "Laptop MacBook Air M2",
        price: "28990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Mỹ",
        sold: 721,
        rate: 4.8
    },
    // ====== LAPTOP (3/20)
    {
        id: 23,
        name: "Laptop HP Pavilion Gaming 15",
        price: "21990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 800,
        rate: 4.6
    },
    // ====== LAPTOP (4/20)
    {
        id: 24,
        name: "Laptop Dell Inspiron 14",
        price: "15990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Mỹ",
        sold: 1100,
        rate: 4.5
    },
    // ====== LAPTOP (5/20)
    {
        id: 25,
        name: "Laptop ASUS ROG Strix",
        price: "35990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Đài Loan",
        sold: 450,
        rate: 4.9
    },
    // ====== LAPTOP (6/20)
    {
        id: 26,
        name: "Laptop Lenovo Legion 5",
        price: "26990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 620,
        rate: 4.7
    },
    // ====== LAPTOP (7/20)
    {
        id: 27,
        name: "Laptop Microsoft Surface 5",
        price: "29990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Mỹ",
        sold: 310,
        rate: 4.8
    },
    // ====== LAPTOP (8/20)
    {
        id: 28,
        name: "Laptop MSI Gaming GF63",
        price: "16490000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Đài Loan",
        sold: 900,
        rate: 4.4
    },
    // ====== LAPTOP (9/20)
    {
        id: 29,
        name: "Laptop Gigabyte G5",
        price: "19990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Đài Loan",
        sold: 750,
        rate: 4.5
    },
    // ====== LAPTOP (10/20)
    {
        id: 30,
        name: "Laptop Razer Blade 15",
        price: "45000000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Mỹ",
        sold: 150,
        rate: 4.9
    },
    // ====== LAPTOP (11/20)
    {
        id: 31,
        name: "Laptop HP Envy x360",
        price: "24990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 580,
        rate: 4.6
    },
    // ====== LAPTOP (12/20)
    {
        id: 32,
        name: "Laptop Dell XPS 13 Plus",
        price: "42000000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Mỹ",
        sold: 210,
        rate: 4.9
    },
    // ====== LAPTOP (13/20)
    {
        id: 33,
        name: "Laptop Lenovo ThinkPad X1 Carbon",
        price: "38000000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 390,
        rate: 4.7
    },
    // ====== LAPTOP (14/20)
    {
        id: 34,
        name: "Laptop LG Gram 17",
        price: "33990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Hàn Quốc",
        sold: 480,
        rate: 4.6
    },
    // ====== LAPTOP (15/20)
    {
        id: 35,
        name: "Laptop Xiaomi RedmiBook Pro",
        price: "19990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 550,
        rate: 4.5
    },
    // ====== LAPTOP (16/20)
    {
        id: 36,
        name: "Laptop Huawei MateBook X Pro",
        price: "32990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 300,
        rate: 4.7
    },
    // ====== LAPTOP (17/20)
    {
        id: 37,
        name: "Laptop HP Victus 15",
        price: "17990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 720,
        rate: 4.4
    },
    // ====== LAPTOP (18/20)
    {
        id: 38,
        name: "Laptop ASUS Zenbook Flip",
        price: "23990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Đài Loan",
        sold: 490,
        rate: 4.6
    },
    // ====== LAPTOP (19/20)
    {
        id: 39,
        name: "Laptop MacBook Pro M3 (Mới)",
        price: "55000000",
        img: "https://cdn.tgdd.vn/Products/Images/44/309882/acer-aspire-7-2023-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Mỹ",
        sold: 180,
        rate: 5.0
    },
    // ====== LAPTOP (20/20)
    {
        id: 40,
        name: "Laptop Dell Vostro 3520",
        price: "13990000",
        img: "https://cdn.tgdd.vn/Products/Images/44/289697/macbook-air-m2-2022-thumb-600x600.jpg",
        category: "Laptop",
        origin: "Trung Quốc",
        sold: 880,
        rate: 4.3
    },

    // =======================================================
    // ====== ÂM THANH (1/20) =================================
    {
        id: 41,
        name: "Tai nghe Sony WH-1000XM5",
        price: "9990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Nhật Bản",
        sold: 210,
        rate: 4.9
    },
    // ====== ÂM THANH (2/20)
    {
        id: 42,
        name: "Loa Bluetooth JBL Charge 5",
        price: "3990000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 890,
        rate: 4.7
    },
    // ====== ÂM THANH (3/20)
    {
        id: 43,
        name: "Tai nghe Apple AirPods Pro 2",
        price: "5990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 1500,
        rate: 4.8
    },
    // ====== ÂM THANH (4/20)
    {
        id: 44,
        name: "Loa Marshall Stanmore II",
        price: "7490000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Thụy Điển",
        sold: 400,
        rate: 4.9
    },
    // ====== ÂM THANH (5/20)
    {
        id: 45,
        name: "Tai nghe Samsung Galaxy Buds 2 Pro",
        price: "4990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Hàn Quốc",
        sold: 650,
        rate: 4.5
    },
    // ====== ÂM THANH (6/20)
    {
        id: 46,
        name: "Loa Harman Kardon Aura Studio 3",
        price: "5990000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 320,
        rate: 4.7
    },
    // ====== ÂM THANH (7/20)
    {
        id: 47,
        name: "Tai nghe JBL Tune 510BT",
        price: "1290000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 1100,
        rate: 4.4
    },
    // ====== ÂM THANH (8/20)
    {
        id: 48,
        name: "Loa Sony SRS-XB100",
        price: "1190000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Nhật Bản",
        sold: 950,
        rate: 4.6
    },
    // ====== ÂM THANH (9/20)
    {
        id: 49,
        name: "Tai nghe Beats Studio Buds+",
        price: "3990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 550,
        rate: 4.7
    },
    // ====== ÂM THANH (10/20)
    {
        id: 50,
        name: "Loa di động Bose SoundLink Flex",
        price: "4290000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 480,
        rate: 4.8
    },
    // ====== ÂM THANH (11/20)
    {
        id: 51,
        name: "Tai nghe Razer Barracuda X",
        price: "2490000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 300,
        rate: 4.5
    },
    // ====== ÂM THANH (12/20)
    {
        id: 52,
        name: "Loa JBL PartyBox 310",
        price: "15990000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 150,
        rate: 4.9
    },
    // ====== ÂM THANH (13/20)
    {
        id: 53,
        name: "Tai nghe Sennheiser Momentum 4",
        price: "8500000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Đức",
        sold: 220,
        rate: 4.8
    },
    // ====== ÂM THANH (14/20)
    {
        id: 54,
        name: "Loa Yamaha YAS-109 Soundbar",
        price: "6990000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Nhật Bản",
        sold: 180,
        rate: 4.6
    },
    // ====== ÂM THANH (15/20)
    {
        id: 55,
        name: "Tai nghe Logitech G Pro X",
        price: "3490000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Thụy Sĩ",
        sold: 410,
        rate: 4.5
    },
    // ====== ÂM THANH (16/20)
    {
        id: 56,
        name: "Loa Edifier R1280DBs",
        price: "3190000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Trung Quốc",
        sold: 700,
        rate: 4.4
    },
    // ====== ÂM THANH (17/20)
    {
        id: 57,
        name: "Tai nghe B&O Beoplay H95",
        price: "22000000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Đan Mạch",
        sold: 50,
        rate: 4.9
    },
    // ====== ÂM THANH (18/20)
    {
        id: 58,
        name: "Micro thu âm Rode NT1",
        price: "5500000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Úc",
        sold: 120,
        rate: 4.8
    },
    // ====== ÂM THANH (19/20)
    {
        id: 59,
        name: "Loa Apple HomePod mini",
        price: "2500000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Mỹ",
        sold: 980,
        rate: 4.6
    },
    // ====== ÂM THANH (20/20)
    {
        id: 60,
        name: "Tai nghe Xiaomi Buds 3",
        price: "2190000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Trung Quốc",
        sold: 800,
        rate: 4.3
    },

    // =======================================================
    // ====== ĐỒNG HỒ (1/20) ==================================
    {
        id: 61,
        name: "Đồng hồ Apple Watch Series 9",
        price: "11990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Mỹ",
        sold: 475,
        rate: 4.8
    },
    // ====== ĐỒNG HỒ (2/20)
    {
        id: 62,
        name: "Đồng hồ Samsung Galaxy Watch 6",
        price: "7990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Hàn Quốc",
        sold: 320,
        rate: 4.6
    },
    // ====== ĐỒNG HỒ (3/20)
    {
        id: 63,
        name: "Đồng hồ Garmin Forerunner 965",
        price: "16990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Mỹ",
        sold: 150,
        rate: 4.9
    },
    // ====== ĐỒNG HỒ (4/20)
    {
        id: 64,
        name: "Đồng hồ Huawei Watch GT 3 Pro",
        price: "6990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Trung Quốc",
        sold: 510,
        rate: 4.5
    },
    // ====== ĐỒNG HỒ (5/20)
    {
        id: 65,
        name: "Đồng hồ Casio G-Shock GA-B2100",
        price: "3990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Nhật Bản",
        sold: 800,
        rate: 4.7
    },
    // ====== ĐỒNG HỒ (6/20)
    {
        id: 66,
        name: "Đồng hồ Xiaomi Watch S1 Pro",
        price: "4990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Trung Quốc",
        sold: 400,
        rate: 4.4
    },
    // ====== ĐỒNG HỒ (7/20)
    {
        id: 67,
        name: "Đồng hồ Fossil Gen 6",
        price: "5990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Mỹ",
        sold: 280,
        rate: 4.6
    },
    // ====== ĐỒNG HỒ (8/20)
    {
        id: 68,
        name: "Đồng hồ Citizen Eco-Drive",
        price: "8500000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Nhật Bản",
        sold: 190,
        rate: 4.8
    },
    // ====== ĐỒNG HỒ (9/20)
    {
        id: 69,
        name: "Đồng hồ Suunto 9 Peak Pro",
        price: "12990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Phần Lan",
        sold: 100,
        rate: 4.9
    },
    // ====== ĐỒNG HỒ (10/20)
    {
        id: 70,
        name: "Đồng hồ Tissot Le Locle",
        price: "18000000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Thụy Sĩ",
        sold: 50,
        rate: 5.0
    },
    // ====== ĐỒNG HỒ (11/20)
    {
        id: 71,
        name: "Đồng hồ Apple Watch SE 2022",
        price: "7490000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Mỹ",
        sold: 920,
        rate: 4.7
    },
    // ====== ĐỒNG HỒ (12/20)
    {
        id: 72,
        name: "Đồng hồ Polar Pacer Pro",
        price: "8990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Phần Lan",
        sold: 140,
        rate: 4.5
    },
    // ====== ĐỒNG HỒ (13/20)
    {
        id: 73,
        name: "Đồng hồ Tag Heuer Aquaracer",
        price: "50000000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Thụy Sĩ",
        sold: 20,
        rate: 4.9
    },
    // ====== ĐỒNG HỒ (14/20)
    {
        id: 74,
        name: "Đồng hồ Orient Bambino",
        price: "4500000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Nhật Bản",
        sold: 650,
        rate: 4.6
    },
    // ====== ĐỒNG HỒ (15/20)
    {
        id: 75,
        name: "Đồng hồ Fitbit Charge 6",
        price: "3990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Mỹ",
        sold: 720,
        rate: 4.4
    },
    // ====== ĐỒNG HỒ (16/20)
    {
        id: 76,
        name: "Đồng hồ Amazfit GTS 4 Mini",
        price: "2490000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Trung Quốc",
        sold: 1050,
        rate: 4.3
    },
    // ====== ĐỒNG HỒ (17/20)
    {
        id: 77,
        name: "Đồng hồ Seiko Presage",
        price: "9500000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Nhật Bản",
        sold: 210,
        rate: 4.8
    },
    // ====== ĐỒNG HỒ (18/20)
    {
        id: 78,
        name: "Đồng hồ Montblanc Summit 3",
        price: "35000000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Đức",
        sold: 30,
        rate: 4.9
    },
    // ====== ĐỒNG HỒ (19/20)
    {
        id: 79,
        name: "Đồng hồ Longines HydroConquest",
        price: "25000000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/311036/apple-watch-s9-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Thụy Sĩ",
        sold: 70,
        rate: 5.0
    },
    // ====== ĐỒNG HỒ (20/20)
    {
        id: 80,
        name: "Đồng hồ Timex Expedition",
        price: "1990000",
        img: "https://cdn.tgdd.vn/Products/Images/7077/313039/samsung-galaxy-watch-6-thumb-600x600.jpg",
        category: "Đồng hồ",
        origin: "Mỹ",
        sold: 990,
        rate: 4.3
    },

    // =======================================================
    // ====== PHỤ KIỆN (1/20) =================================
    {
        id: 81,
        name: "Sạc nhanh 25W Samsung chính hãng",
        price: "590000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Việt Nam",
        sold: 2100,
        rate: 4.8
    },
    // ====== PHỤ KIỆN (2/20)
    {
        id: 82,
        name: "Chuột không dây Logitech M331",
        price: "450000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 870,
        rate: 4.6
    },
    // ====== PHỤ KIỆN (3/20)
    {
        id: 83,
        name: "Bàn phím cơ AKKO 3087",
        price: "1990000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 450,
        rate: 4.7
    },
    // ====== PHỤ KIỆN (4/20)
    {
        id: 84,
        name: "Ổ cứng SSD Samsung 1TB",
        price: "2490000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Hàn Quốc",
        sold: 600,
        rate: 4.8
    },
    // ====== PHỤ KIỆN (5/20)
    {
        id: 85,
        name: "Webcam Logitech C922",
        price: "1890000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Thụy Sĩ",
        sold: 350,
        rate: 4.6
    },
    // ====== PHỤ KIỆN (6/20)
    {
        id: 86,
        name: "Hub chuyển đổi USB-C HyperDrive",
        price: "1590000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Mỹ",
        sold: 520,
        rate: 4.5
    },
    // ====== PHỤ KIỆN (7/20)
    {
        id: 87,
        name: "Giá đỡ Laptop nhôm",
        price: "250000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Việt Nam",
        sold: 1500,
        rate: 4.4
    },
    // ====== PHỤ KIỆN (8/20)
    {
        id: 88,
        name: "Cáp sạc nhanh Innostyle C-L",
        price: "490000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Hồng Kông",
        sold: 1200,
        rate: 4.8
    },
    // ====== PHỤ KIỆN (9/20)
    {
        id: 89,
        name: "Bao da iPad Pro 11 inch",
        price: "790000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 670,
        rate: 4.5
    },
    // ====== PHỤ KIỆN (10/20)
    {
        id: 90,
        name: "Pin sạc dự phòng Xiaomi 10000mAh",
        price: "550000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 2500,
        rate: 4.6
    },
    // ====== PHỤ KIỆN (11/20)
    {
        id: 91,
        name: "Chuột Gaming SteelSeries Rival 3",
        price: "1190000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Đan Mạch",
        sold: 400,
        rate: 4.7
    },
    // ====== PHỤ KIỆN (12/20)
    {
        id: 92,
        name: "Bàn di chuột Razer Goliathus",
        price: "350000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Mỹ",
        sold: 900,
        rate: 4.4
    },
    // ====== PHỤ KIỆN (13/20)
    {
        id: 93,
        name: "Cáp HDMI 2.1 Ugreen",
        price: "490000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 700,
        rate: 4.5
    },
    // ====== PHỤ KIỆN (14/20)
    {
        id: 94,
        name: "Bộ vệ sinh màn hình Laptop",
        price: "150000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Việt Nam",
        sold: 1800,
        rate: 4.2
    },
    // ====== PHỤ KIỆN (15/20)
    {
        id: 95,
        name: "Thiết bị định vị Apple AirTag",
        price: "790000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Mỹ",
        sold: 550,
        rate: 4.7
    },
    // ====== PHỤ KIỆN (16/20)
    {
        id: 96,
        name: "Bộ chuyển đổi USB 3.0",
        price: "290000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 950,
        rate: 4.3
    },
    // ====== PHỤ KIỆN (17/20)
    {
        id: 97,
        name: "Kính cường lực iPhone 15",
        price: "250000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Việt Nam",
        sold: 3000,
        rate: 4.9
    },
    // ====== PHỤ KIỆN (18/20)
    {
        id: 98,
        name: "Tai nghe có dây Samsung",
        price: "190000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Hàn Quốc",
        sold: 1100,
        rate: 4.4
    },
    // ====== PHỤ KIỆN (19/20)
    {
        id: 99,
        name: "Đèn LED RGB cho màn hình",
        price: "690000",
        img: "https://cdn.tgdd.vn/Products/Images/9499/237346/sac-25w-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Trung Quốc",
        sold: 400,
        rate: 4.6
    },
    // ====== PHỤ KIỆN (20/20)
    {
        id: 100,
        name: "Thẻ nhớ MicroSD Sandisk 128GB",
        price: "390000",
        img: "https://cdn.tgdd.vn/Products/Images/86/223142/logitech-m331-thumb-600x600.jpg",
        category: "Phụ kiện",
        origin: "Mỹ",
        sold: 1500,
        rate: 4.8
    },
    
    // =======================================================
    // ====== GIA DỤNG (1/20) =================================
    {
        id: 101,
        name: "Nồi chiên không dầu Philips HD9252",
        price: "2590000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hà Lan",
        sold: 560,
        rate: 4.8
    },
    // ====== GIA DỤNG (2/20)
    {
        id: 102,
        name: "Máy hút bụi Xiaomi Mi Vacuum G10",
        price: "4490000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Trung Quốc",
        sold: 375,
        rate: 4.7
    },
    // ====== GIA DỤNG (3/20)
    {
        id: 103,
        name: "Robot hút bụi Ecovacs Deebot T20",
        price: "15900000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Trung Quốc",
        sold: 150,
        rate: 4.9
    },
    // ====== GIA DỤNG (4/20)
    {
        id: 104,
        name: "Máy lọc không khí Sharp FP-J80EV-H",
        price: "6990000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Nhật Bản",
        sold: 480,
        rate: 4.6
    },
    // ====== GIA DỤNG (5/20)
    {
        id: 105,
        name: "Nồi cơm điện tử Cuckoo 1.8L",
        price: "2990000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hàn Quốc",
        sold: 900,
        rate: 4.5
    },
    // ====== GIA DỤNG (6/20)
    {
        id: 106,
        name: "Máy rửa chén Bosch SMS46",
        price: "18990000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Đức",
        sold: 80,
        rate: 4.8
    },
    // ====== GIA DỤNG (7/20)
    {
        id: 107,
        name: "Bếp từ đôi Kangaroo",
        price: "3490000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Việt Nam",
        sold: 720,
        rate: 4.4
    },
    // ====== GIA DỤNG (8/20)
    {
        id: 108,
        name: "Máy ép chậm Hurom H200",
        price: "9500000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hàn Quốc",
        sold: 250,
        rate: 4.9
    },
    // ====== GIA DỤNG (9/20)
    {
        id: 109,
        name: "Máy pha cà phê Delonghi",
        price: "7990000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Ý",
        sold: 180,
        rate: 4.7
    },
    // ====== GIA DỤNG (10/20)
    {
        id: 110,
        name: "Máy sấy tóc Dyson Supersonic",
        price: "11990000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Anh",
        sold: 100,
        rate: 5.0
    },
    // ====== GIA DỤNG (11/20)
    {
        id: 111,
        name: "Lò vi sóng Sharp R-G222VN-S",
        price: "1590000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Thái Lan",
        sold: 880,
        rate: 4.3
    },
    // ====== GIA DỤNG (12/20)
    {
        id: 112,
        name: "Bình đun siêu tốc Philips HD9350",
        price: "1290000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hà Lan",
        sold: 1100,
        rate: 4.4
    },
    // ====== GIA DỤNG (13/20)
    {
        id: 113,
        name: "Máy xay sinh tố Sunhouse",
        price: "990000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Việt Nam",
        sold: 1300,
        rate: 4.2
    },
    // ====== GIA DỤNG (14/20)
    {
        id: 114,
        name: "Quạt không cánh Dyson AM07",
        price: "9990000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Anh",
        sold: 120,
        rate: 4.8
    },
    // ====== GIA DỤNG (15/20)
    {
        id: 115,
        name: "Bàn ủi hơi nước Tefal FV9845",
        price: "3590000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Pháp",
        sold: 350,
        rate: 4.6
    },
    // ====== GIA DỤNG (16/20)
    {
        id: 116,
        name: "Máy hút ẩm Sharp DW-D12A",
        price: "5500000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Nhật Bản",
        sold: 210,
        rate: 4.7
    },
    // ====== GIA DỤNG (17/20)
    {
        id: 117,
        name: "Máy làm bánh mì Lock&Lock",
        price: "2990000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hàn Quốc",
        sold: 400,
        rate: 4.5
    },
    // ====== GIA DỤNG (18/20)
    {
        id: 118,
        name: "Nồi áp suất điện Sunhouse",
        price: "1790000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Việt Nam",
        sold: 650,
        rate: 4.3
    },
    // ====== GIA DỤNG (19/20)
    {
        id: 119,
        name: "Bếp nướng điện không khói Philips",
        price: "2290000",
        img: "https://cdn.tgdd.vn/Products/Images/1982/248654/philips-hd9252-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Hà Lan",
        sold: 500,
        rate: 4.6
    },
    // ====== GIA DỤNG (20/20)
    {
        id: 120,
        name: "Cân điện tử Xiaomi Smart Scale 2",
        price: "590000",
        img: "https://cdn.tgdd.vn/Products/Images/2221/235433/xiaomi-mi-vacuum-g10-thumb-600x600.jpg",
        category: "Gia dụng",
        origin: "Trung Quốc",
        sold: 950,
        rate: 4.5
    }
];

// ========== HIỂN THỊ SẢN PHẨM ==========
function showProducts(list) {
    const productList = document.getElementById("productList");
    if (!productList) return; // tránh lỗi nếu phần tử chưa sẵn sàng

    productList.innerHTML = "";

    list.forEach(p => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p><b>Giá:</b> ${parseInt(p.price).toLocaleString()}đ</p>
                <p><b>Nơi SX:</b> ${p.origin}</p>
                <p><b>Đã bán:</b> ${p.sold}</p>
                <p><b>Đánh giá:</b> ⭐ ${p.rate}</p>
                <button class="add-btn" onclick="addToCart(${p.id})">🛒 Thêm</button>
            </div>
        `;
    });
}

// ========== TÌM KIẾM SẢN PHẨM ==========
function searchProduct() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    showProducts(filtered);
}

// ========== THÊM VÀO GIỎ HÀNG ==========
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
}

// ========== LỌC THEO DANH MỤC ==========
function filterCategory(category) {
    if (!category) {
        showProducts(products);
        return;
    }
    const filtered = products.filter(p => p.category === category);
    showProducts(filtered);
}

// ========== HIỂN THỊ TẤT CẢ ==========
function showAll() {
    showProducts(products);
}

// ========== CHAT VỚI ADMIN ==========
function toggleChat() {
    document.getElementById("chatBody").classList.toggle("show");
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message) {
        const chatBody = document.getElementById("chatBody");
        chatBody.innerHTML += `<div class='chat-message user'>${message}</div>`;
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// ========== CHẠY SAU KHI HTML TẢI XONG ==========
window.onload = function() {
    showProducts(products);
};