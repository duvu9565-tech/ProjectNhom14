// Biến toàn cục để lưu trữ danh sách sản phẩm mẫu.
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
        price: "6990000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Úc",
        sold: 120,
        rate: 4.8
    },
    // ====== ÂM THANH (19/20)
    {
        id: 59,
        name: "Mixer Yamaha MG10XU",
        price: "8990000",
        img: "https://cdn.tgdd.vn/Products/Images/2162/261057/jbl-charge-5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Nhật Bản",
        sold: 80,
        rate: 4.7
    },
    // ====== ÂM THANH (20/20)
    {
        id: 60,
        name: "Tai nghe Jabra Elite 7 Pro",
        price: "5490000",
        img: "https://cdn.tgdd.vn/Products/Images/54/284734/sony-wh-1000xm5-thumb-600x600.jpg",
        category: "Âm thanh",
        origin: "Đan Mạch",
        sold: 350,
        rate: 4.6
    },
// =======================================================
    // ====== ĐỒNG HỒ (10 SẢN PHẨM) ==========================
    { id: 31, name: "Apple Watch Series 9 GPS 41mm", price: "10990000", img: "https://cdn.tgdd.vn/Products/Images/707/306325/apple-watch-s9-41mm-den-thumb-600x600.jpg", category: "Đồng hồ", origin: "Mỹ", sold: 900, rate: 4.8 },
    { id: 32, name: "Samsung Galaxy Watch 6 Classic 47mm", price: "8990000", img: "https://cdn.tgdd.vn/Products/Images/707/306325/samsung-galaxy-watch6-classic-47mm-thumb-600x600.jpg", category: "Đồng hồ", origin: "Hàn Quốc", sold: 650, rate: 4.7 },
    { id: 33, name: "Đồng hồ thông minh Garmin Forerunner 265", price: "12500000", img: "https://cdn.tgdd.vn/Products/Images/707/304200/garmin-forerunner-265-thumb-600x600.jpg", category: "Đồng hồ", origin: "Mỹ", sold: 450, rate: 4.9 },
    { id: 34, name: "Đồng hồ thông minh Xiaomi Watch S1 Pro", price: "4990000", img: "https://cdn.tgdd.vn/Products/Images/707/304200/xiaomi-watch-s1-pro-thumb-600x600.jpg", category: "Đồng hồ", origin: "Trung Quốc", sold: 700, rate: 4.6 },
    { id: 35, name: "Đồng hồ thông minh Huawei Watch GT 4", price: "5990000", img: "https://cdn.tgdd.vn/Products/Images/707/304200/huawei-watch-gt-4-thumb-600x600.jpg", category: "Đồng hồ", origin: "Trung Quốc", sold: 550, rate: 4.5 },
    { id: 36, name: "Vòng đeo tay thông minh Xiaomi Band 8", price: "990000", img: "https://cdn.tgdd.vn/Products/Images/707/304200/xiaomi-band-8-thumb-600x600.jpg", category: "Đồng hồ", origin: "Trung Quốc", sold: 1800, rate: 4.4 },
    { id: 37, name: "Apple Watch SE 2023", price: "6990000", img: "https://cdn.tgdd.vn/Products/Images/707/306325/apple-watch-se-2023-thumb-600x600.jpg", category: "Đồng hồ", origin: "Mỹ", sold: 850, rate: 4.7 },
    { id: 38, name: "Đồng hồ thông minh Amazfit Bip 3 Pro", price: "1590000", img: "https://cdn.tgdd.vn/Products/Images/707/287372/amazfit-bip-3-pro-thumb-600x600.jpg", category: "Đồng hồ", origin: "Trung Quốc", sold: 1100, rate: 4.3 },
    { id: 39, name: "Đồng hồ thông minh Suunto 9 Peak Pro", price: "18000000", img: "https://cdn.tgdd.vn/Products/Images/707/304200/suunto-9-peak-pro-thumb-600x600.jpg", category: "Đồng hồ", origin: "Phần Lan", sold: 200, rate: 4.9 },
    { id: 40, name: "Đồng hồ Casio G-Shock GA-2100", price: "3500000", img: "https://cdn.tgdd.vn/Products/Images/6970/202022/casio-g-shock-ga-2100-thumb-600x600.jpg", category: "Đồng hồ", origin: "Nhật Bản", sold: 500, rate: 4.6 },

    // =======================================================
    // ====== PHỤ KIỆN (10 SẢN PHẨM) =========================
    { id: 41, name: "Sạc dự phòng Anker PowerCore III 20000mAh", price: "1290000", img: "https://cdn.tgdd.vn/Products/Images/58/281313/sac-du-phong-anker-powercore-iii-elite-20000mah-thumb-600x600.jpg", category: "Phụ kiện", origin: "Mỹ", sold: 2100, rate: 4.5 },
    { id: 42, name: "Cáp sạc nhanh Innostyle C to Lightning", price: "390000", img: "https://cdn.tgdd.vn/Products/Images/58/267990/cap-sac-nhanh-innostyle-thumb-600x600.jpg", category: "Phụ kiện", origin: "Mỹ", sold: 3500, rate: 4.7 },
    { id: 43, name: "Bàn phím cơ Logitech G Pro X TKL", price: "4500000", img: "https://cdn.tgdd.vn/Products/Images/86/300438/ban-phim-co-logitech-g-pro-tkl-thumb-600x600.jpg", category: "Phụ kiện", origin: "Thụy Sĩ", sold: 500, rate: 4.8 },
    { id: 44, name: "Chuột không dây Logitech MX Master 3S", price: "2490000", img: "https://cdn.tgdd.vn/Products/Images/86/275336/chuot-khong-day-logitech-mx-master-3s-thumb-600x600.jpg", category: "Phụ kiện", origin: "Thụy Sĩ", sold: 650, rate: 4.9 },
    { id: 45, name: "Hub chuyển đổi HyperDrive USB-C", price: "1890000", img: "https://cdn.tgdd.vn/Products/Images/58/275336/hub-chuyen-doi-hyperdrive-thumb-600x600.jpg", category: "Phụ kiện", origin: "Mỹ", sold: 400, rate: 4.6 },
    { id: 46, name: "Ốp lưng iPhone 15 Pro Max Silicon", price: "450000", img: "https://cdn.tgdd.vn/Products/Images/60/281570/op-lung-iphone-15-pro-max-silicon-thumb-600x600.jpg", category: "Phụ kiện", origin: "Trung Quốc", sold: 4200, rate: 4.4 },
    { id: 47, name: "Màn hình di động ASUS ZenScreen 15.6 inch", price: "6990000", img: "https://cdn.tgdd.vn/Products/Images/55/281570/man-hinh-di-dong-asus-thumb-600x600.jpg", category: "Phụ kiện", origin: "Đài Loan", sold: 150, rate: 4.7 },
    { id: 48, name: "Thẻ nhớ MicroSD Sandisk Ultra 128GB", price: "390000", img: "https://cdn.tgdd.vn/Products/Images/707/287372/the-nho-microsd-sandisk-thumb-600x600.jpg", category: "Phụ kiện", origin: "Mỹ", sold: 5000, rate: 4.5 },
    { id: 49, name: "Đế sạc không dây Belkin Boost Charge 3-in-1", price: "2990000", img: "https://cdn.tgdd.vn/Products/Images/58/281570/de-sac-khong-day-belkin-thumb-600x600.jpg", category: "Phụ kiện", origin: "Mỹ", sold: 300, rate: 4.8 },
    { id: 50, name: "Webcam Logitech C922 Pro Stream", price: "1990000", img: "https://cdn.tgdd.vn/Products/Images/86/281570/webcam-logitech-c922-thumb-600x600.jpg", category: "Phụ kiện", origin: "Thụy Sĩ", sold: 450, rate: 4.6 },

    // =======================================================
    // ====== GIA DỤNG (10 SẢN PHẨM) =========================
    { id: 51, name: "Máy lọc không khí Xiaomi Air Purifier 4 Pro", price: "4990000", img: "https://cdn.tgdd.vn/Products/Images/1942/272378/may-loc-khong-khi-xiaomi-air-purifier-4-pro-thumb-600x600.jpg", category: "Gia dụng", origin: "Trung Quốc", sold: 750, rate: 4.4 },
    { id: 52, name: "Nồi chiên không dầu Philips HD9270/90", price: "3990000", img: "https://cdn.tgdd.vn/Products/Images/1942/272378/noi-chien-khong-dau-philips-thumb-600x600.jpg", category: "Gia dụng", origin: "Hà Lan", sold: 800, rate: 4.6 },
    { id: 53, name: "Robot hút bụi Ecovacs Deebot T10", price: "11990000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/robot-hut-bui-ecovacs-t10-thumb-600x600.jpg", category: "Gia dụng", origin: "Trung Quốc", sold: 550, rate: 4.8 },
    { id: 54, name: "Máy hút bụi cầm tay Dyson V12 Detect Slim", price: "17990000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/may-hut-bui-dyson-v12-thumb-600x600.jpg", category: "Gia dụng", origin: "Anh", sold: 300, rate: 4.9 },
    { id: 55, name: "Bếp từ đôi Sunhouse SHD6800", price: "2490000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/bep-tu-doi-sunhouse-thumb-600x600.jpg", category: "Gia dụng", origin: "Việt Nam", sold: 1200, rate: 4.3 },
    { id: 56, name: "Máy pha cà phê Delonghi Dedica EC685", price: "5990000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/may-pha-ca-phe-delonghi-thumb-600x600.jpg", category: "Gia dụng", origin: "Ý", sold: 400, rate: 4.7 },
    { id: 57, name: "Máy ép chậm Hurom H-200", price: "7500000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/may-ep-cham-hurom-thumb-600x600.jpg", category: "Gia dụng", origin: "Hàn Quốc", sold: 600, rate: 4.5 },
    { id: 58, name: "Quạt không cánh Xiaomi Mijia A1", price: "3490000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/quat-khong-canh-xiaomi-thumb-600x600.jpg", category: "Gia dụng", origin: "Trung Quốc", sold: 950, rate: 4.4 },
    { id: 59, name: "Bàn ủi hơi nước Philips GC558", price: "2990000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/ban-ui-hoi-nuoc-philips-thumb-600x600.jpg", category: "Gia dụng", origin: "Hà Lan", sold: 1000, rate: 4.2 },
    { id: 60, name: "Cân điện tử thông minh Xiaomi Scale 2", price: "690000", img: "https://cdn.tgdd.vn/Products/Images/1942/301799/can-dien-tu-xiaomi-thumb-600x600.jpg", category: "Gia dụng", origin: "Trung Quốc", sold: 1500, rate: 4.6 },
];

// Biến lưu trữ trạng thái sản phẩm hiện tại (đã lọc/sắp xếp)
let currentProducts = [...products]; 
const PRICE_LIMIT = 3000000;


// ========== HÀM TRỢ GIÚP ==========
function formatCurrency(number) {
    // Định dạng tiền tệ VNĐ: 21.990.000₫
    return number.toLocaleString('vi-VN') + '₫';
}

// ========== HIỂN THỊ SẢN PHẨM ============
function showProducts(productsToShow) {
    // Tìm phần tử ngay bên trong hàm để đảm bảo DOM đã được tải
    const container = document.getElementById('productList'); 

    if (!container) {
        console.error("Không tìm thấy phần tử #productList để hiển thị sản phẩm.");
        return;
    }

    container.innerHTML = '';
    
    if (productsToShow.length === 0) {
        container.innerHTML = '<p class="no-products">Không tìm thấy sản phẩm nào phù hợp.</p>';
        return;
    }

    productsToShow.forEach(p => {
        // Chuyển giá từ string sang number để định dạng
        const priceNumber = parseInt(p.price, 10); 
        const priceFormatted = formatCurrency(priceNumber);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="product-price">${priceFormatted}</p>
            <p class="product-sold">Đã bán: ${p.sold} sản phẩm</p>
            <button class="add-cart" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        `;
        container.appendChild(card); 
    });
}

// ========== SẮP XẾP SẢN PHẨM (tăng/giảm dần giá) ===========
// Hàm này được gọi khi dropdown Sắp xếp theo Giá thay đổi
function sortProducts() {
    // 1. Lấy giá trị sắp xếp
    const sortValue = document.getElementById('sort-price').value;
    
    // 2. Lấy danh sách sản phẩm hiện tại (đã được lọc/lọc nhanh/danh mục)
    let listToSort = [...currentProducts];

    // 3. Thực hiện sắp xếp
    if (sortValue === 'asc') {
        // Tăng dần
        listToSort.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
    } else if (sortValue === 'desc') {
        // Giảm dần
        listToSort.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
    } else {
        // Mặc định: Sắp xếp theo ID gốc (cần áp dụng lại logic lọc gần nhất)
        // **Quan trọng: Khi chọn "Giá (Mặc định)", ta cần tái áp dụng lọc khoảng giá nếu có**
        
        // Ta cần biết danh sách products gốc của category đang được chọn
        const categoryElement = document.querySelector('.category-list li.active'); 
        let categoryName = categoryElement ? categoryElement.textContent.trim().replace(/[\uD800-\uDBFF\uDC00-\uDFFF]/g, '').trim() : null;

        if(categoryName === 'Tất cả') categoryName = null;

        let baseList = categoryName ? products.filter(p => p.category === categoryName) : [...products];

        // Áp dụng lại lọc khoảng giá hiện tại (nếu có)
        const priceRange = document.getElementById('filter-price-range').value;

        if (priceRange === 'low') {
            baseList = baseList.filter(p => parseInt(p.price, 10) < PRICE_LIMIT);
        } else if (priceRange === 'high') {
            baseList = baseList.filter(p => parseInt(p.price, 10) >= PRICE_LIMIT);
        }
        
        // Sắp xếp mặc định theo ID gốc của danh sách đã được lọc khoảng giá
        baseList.sort((a, b) => a.id - b.id);
        listToSort = baseList;
    }
    
    // 4. Cập nhật và hiển thị
    currentProducts = listToSort;
    showProducts(currentProducts);
}

// ========== LỌC THEO KHOẢNG GIÁ/MUA NHIỀU/MỚI NHẤT =========
// Hàm này được gọi khi dropdown Khoảng giá thay đổi HOẶC khi click nút
function filterProducts(filterType = null) {
    
    // 1. Lấy danh sách sản phẩm cơ sở (đã lọc theo danh mục, nếu có)
    const categoryElement = document.querySelector('.category-list li.active'); 
    let categoryName = categoryElement ? categoryElement.textContent.trim().replace(/[\uD800-\uDBFF\uDC00-\uDFFF]/g, '').trim() : null;

    if(categoryName === 'Tất cả') categoryName = null;

    // Bắt đầu lọc từ danh sách gốc hoặc danh sách đã lọc theo category
    let filtered = categoryName ? products.filter(p => p.category === categoryName) : [...products]; 
    
    // 2. --- Lọc theo Khoảng giá (Dropdown: ưu tiên lọc trước) ---
    const priceRange = document.getElementById('filter-price-range').value;

    if (priceRange === 'low') {
        filtered = filtered.filter(p => parseInt(p.price, 10) < PRICE_LIMIT);
    } else if (priceRange === 'high') {
        filtered = filtered.filter(p => parseInt(p.price, 10) >= PRICE_LIMIT);
    }
    
    // 3. --- Sắp xếp theo Nút bấm (Được mua nhiều, Mới nhất) ---
    if (filterType === 'popular') {
        // Sắp xếp giảm dần theo số lượng đã bán (sold)
        filtered.sort((a, b) => b.sold - a.sold); 
        // Đặt lại dropdown Sắp xếp theo Giá về mặc định
        document.getElementById('sort-price').value = '';
        
    } else if (filterType === 'newest') {
        // Sắp xếp giảm dần theo ID (ID cao nhất là mới nhất)
        filtered.sort((a, b) => b.id - a.id);
        // Đặt lại dropdown Sắp xếp theo Giá về mặc định
        document.getElementById('sort-price').value = '';
    }
    
    // Cập nhật currentProducts và render
    currentProducts = filtered; 
    showProducts(currentProducts);
}

// ========== TÌM KIẾM SẢN PHẨM ==========
function searchProduct() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    showProducts(filtered);
    currentProducts = filtered;
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

// ========== LỌC THEO DANH MỤC (ĐÃ SỬA LỖI RESET LỌC) ==========
function filterCategory(category) {
    // 1. Reset trạng thái lọc/sắp xếp
    if(document.getElementById('sort-price')) document.getElementById('sort-price').value = '';
    if(document.getElementById('filter-price-range')) document.getElementById('filter-price-range').value = '';

    // 2. Xóa/Thêm class active cho danh mục
    document.querySelectorAll('.category-list li').forEach(li => li.classList.remove('active'));
    
    // Thêm class 'active' cho li được hover (Nếu bạn muốn thêm styling active)
    // Lưu ý: Do dùng onmouseover, bạn có thể cần truyền thêm event/this vào hàm.
    // Tạm thời, tôi sẽ không thêm class 'active' ở đây vì dùng onmouseover (hover)

    // 3. Lọc sản phẩm
    if (!category) {
        currentProducts = [...products]; // Reset về tất cả
    } else {
        currentProducts = products.filter(p => p.category === category);
    }
    
    // 4. Hiển thị sản phẩm mới
    showProducts(currentProducts);
}

// ========== HIỂN THỊ TẤT CẢ (Đã cập nhật) ==========
function showAll() {
    // Reset các thanh lọc/sắp xếp
    if(document.getElementById('sort-price')) document.getElementById('sort-price').value = '';
    if(document.getElementById('filter-price-range')) document.getElementById('filter-price-range').value = '';

    currentProducts = [...products];
    showProducts(currentProducts);
}

// ========== CHAT VỚI ADMIN ==========
function toggleChat() {
    // Sửa lại class để phù hợp với CSS nếu có
    const chatBox = document.getElementById("chatBox");
    if (chatBox.classList.contains('open')) {
        chatBox.classList.remove('open');
        document.getElementById("chatBody").style.display = 'none';
    } else {
        chatBox.classList.add('open');
        document.getElementById("chatBody").style.display = 'block';
    }
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message) {
        const chatBody = document.getElementById("chatBody");
        const newMessage = document.createElement("div");
        newMessage.className = "chat-message user"; 
        newMessage.textContent = message;
        chatBody.appendChild(newMessage);
        input.value = "";
        
        // Auto-reply giả lập
        setTimeout(() => {
            const adminReply = document.createElement("div");
            adminReply.className = "chat-message admin"; 
            adminReply.textContent = "Admin: Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất.";
            chatBody.appendChild(adminReply);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);

        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// ========== KHỞI TẠO TRANG ==========
// Chạy khi toàn bộ DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị tất cả sản phẩm khi tải trang lần đầu
    showProducts(products);
});