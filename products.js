const products = [
     {
        id: 1,
        name: "Tokyo Banana",
        description: "Kue spons yang lembut dan halus ini diisi penuh dengan krim custard pisang. Kue ini dibuat dengan pisang asli yang ditekan lembut menjadi bubur, dengan perhatian penuh untuk menciptakan rasa yang disukai siapa pun.",
        price: 1000,
        image: "https://tokyofreshdirect.com/cdn/shop/articles/not-to-be-missed-when-visiting-tokyo-the-complete-guide-to-tokyo-banana-494990_600x600_crop_center.png?v=1709777358 "
    },
    {
        id: 2,
        name: "Bourbon Alfort",
        description: "Coklat dengan toping biskuit yang enak",
        price: 2000,
        image: "https://hellojapanph.com/cdn/shop/products/image_5de0a7c1-b20f-45fd-b187-dadc4016275c_530x@2x.jpg?v=1604235542"
    },
    {
        id: 3,
        name: "Choco Almond",
        description: "Kacang Almond yang dibalut dengan coklat",
        price: 340,
        image: "https://oishipedia.com/wp-content/uploads/2024/02/lotte-almond-chocolate-edited-1.jpg"
    },
    {
        id: 4,
        name: "Choco Almond Crispy",
        description: "Kacang Almond dan rice crispy yang dibalut dengan coklat",
        price: 340,
        image: "https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFaQ2lNbFRaM0wuX1NMMTUwMF8uanBn.jpg"
    },
    {
        id: 5,
        name: "Choco Macadamia",
        description: "Kacang Macadamia yang dibalut dengan coklat",
        price: 340,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmUXaBLxTVj-3_gUxgQ5HG5WXFpI7ZytJ9Q&s"
    },
    {
        id: 6,
        name: "Mini Choco",
        description: "coklat mini",
        price: 6000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHbPdDPGws-Z41S-6qzadJTpiJQGOGlXW6VUTl_GhlwKuq81_spC4apdEiPFlUQ5AFGo&usqp=CAU"
    },
    {
        id: 7,
        name: "Chocobi",
        description: "Snack kesukaan Shinchan",
        price: 7000,
        image: "https://down-id.img.susercontent.com/file/3b51ed003ed2daaeca479f7b77b3d5ad"
    },
    {
        id: 8,
        name: "Mini Milk Choco",
        description: "coklat susu mini ",
        price: 8000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_onMcpDpUmxKqFhq4z1iLvoYh0GqwJGBbBw&s"
    },
    {
        id: 9,
        name: "Fruity Candy",
        description: "permen rasa buah",
        price: 9000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_onMcpDpUmxKqFhq4z1iLvoYh0GqwJGBbBw&s"
    },
    {
        id: 10,
        name: "Milk Candy",
        description: "permen susu",
        price: 10000,
        image: "https://m.media-amazon.com/images/I/61FA+3c-sPL.jpg"
    },
    {
        id: 11,
        name: "Strawberry Milk candy",
        description: "permen susu strawberry",
        price: 11000,
        image: "https://donki-ec-static-1306051524.file.myqcloud.com/images/4902750936973-1.jpg"
    },
    {
        id: 12,
        name: "Brown Sugar Candy",
        description: "permen Gula merah",
        price: 260,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruvYKq6jx7YaiMPUgEnYaoEzE-xwL-8O3mQ&s"
    },
    {
        id: 13,
        name: "Coffee Candy",
        description: "permen kopi",
        price: 13000,
        image: "https://www.japancandystore.com/cdn/shop/products/20200922_027.jpg?v=1675386050"
    },
    {
        id: 14,
        name: "Melon Milk candy",
        description: "permen susu melon",
        price: 14000,
        image: "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/GxkAAOSwhsplqHUV/$_57.JPG?set_id=880000500F"
    },
    {
        id: 15,
        name: "Guraku Choco",
        description: "Coklat crispy bar",
        price: 15000,
        image: "https://pbs.twimg.com/media/GiyCr-8aoAAt5jU?format=jpg&name=large"
    },
    {
        id: 16,
        name: "Choco & Coffee Biscuit",
        description: "biskuit dengan krim coklat dan kopi diatasnya",
        price: 16000,
        image: "https://japanese-snacks-republic.com/media/binary/000/079/460/79460.jpg.webp"
    },
    {
        id: 17,
        name: "Nama Kurimu Choco",
        description: "coklat yang berisi krim",
        price: 17000,
        image: "https://ichibajunction.com.au/cdn/shop/files/FURUTA-Nama-Cream-Choco-184g_f_720x.jpg?v=1727009480"
    },
    {
        id: 18,
        name: "Sakusaku Crunky Choco",
        description: "coklat dengan isian rice crispy",
        price: 18000,
        image: "https://images.deliveryhero.io/image/nv/Hong-Kong/Pandamart/x5np-4903333292899_1_240603.jpg?height=480"
    },
    {
        id: 19,
        name: "Senbe",
        description: "opak jepang",
        price: 19000,
        image: "https://images.deliveryhero.io/image/nv/Hong-Kong/Pandamart/x5np-4903333292899_1_240603.jpg?height=480"
    },
    {
        id: 20,
        name: "Instan Miso Soup",
        description: "sup miso instan",
        price: 20000,
        image: "https://www.marukome.co.jp/global/en/wp-global/wp-content/uploads/2020/06/501910J%E8%BC%B8%E5%87%BA%E7%94%A8%E3%81%9F%E3%81%A3%E3%81%B5%E3%82%9A%E3%82%8A%E3%81%8A%E5%BE%B3%E6%96%99%E4%BA%AD%E3%81%AE%E5%91%B324%E9%A3%9F.jpg"
    },
    {
        id: 21,
        name: "Elise Choco cream & white cream wafer",
        description: "wafer dengan isian coklat dan krim putih",
        price: 21000,
        image: "https://m.media-amazon.com/images/I/711cmKbxurL.jpg"
    },
    {
        id: 22,
        name: "Koala No Machi",
        description: "biskuit koala yang di isi krim coklat",
        price: 22000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4JKdeYoL5tnYh50lIyaE_m97qiV6Qm2k9A&s"
    },
    {
        id: 23,
        name: "Blendy Stick MaTcha",
        description: "matcha latte",
        price: 23000,
        image: "https://m.media-amazon.com/images/I/81zQV6lGjUL.jpg"
    },
  // Tambahkan produk lainnya di sini...
];
