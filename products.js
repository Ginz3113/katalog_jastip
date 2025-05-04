const products = [
     {
        id: 1,
        name: "Tokyo Banana",
        description: "Kue spons yang lembut dan halus ini diisi penuh dengan krim custard pisang. Kue ini dibuat dengan pisang asli yang ditekan lembut menjadi bubur, dengan perhatian penuh untuk menciptakan rasa yang disukai siapa pun.",
        price: 2000,
        image: "https://tokyofreshdirect.com/cdn/shop/articles/not-to-be-missed-when-visiting-tokyo-the-complete-guide-to-tokyo-banana-494990_600x600_crop_center.png?v=1709777358 "
    },
    {
        id: 2,
        name: "Bourbon Alfort",
        description: "Coklat dengan toping biskuit yang enak",
        price: 390,
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
        price: 370,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHbPdDPGws-Z41S-6qzadJTpiJQGOGlXW6VUTl_GhlwKuq81_spC4apdEiPFlUQ5AFGo&usqp=CAU"
    },
    {
        id: 7,
        name: "Chocobi",
        description: "Snack kesukaan Shinchan",
        price: 330,
        image: "https://down-id.img.susercontent.com/file/3b51ed003ed2daaeca479f7b77b3d5ad"
    },
    {
        id: 8,
        name: "Mini Milk Choco",
        description: "coklat susu mini ",
        price: 370,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_onMcpDpUmxKqFhq4z1iLvoYh0GqwJGBbBw&s"
    },
    {
        id: 9,
        name: "Fruity Candy",
        description: "permen rasa buah",
        price: 330,
        image: "https://2519.cdn.simplo7.net/static/2519/sku/doces-japoneses-bala-japonesa-de-frutas-sortidas-nodoame-112-gramas-1692382144781.jpg"
    },
    {
        id: 10,
        name: "Milk Candy",
        description: "permen susu",
        price: 330,
        image: "https://m.media-amazon.com/images/I/61FA+3c-sPL.jpg"
    },
    {
        id: 11,
        name: "Strawberry Milk candy",
        description: "permen susu strawberry",
        price: 330,
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
        price: 260,
        image: "https://www.japancandystore.com/cdn/shop/products/20200922_027.jpg?v=1675386050"
    },
    {
        id: 14,
        name: "Melon Milk candy",
        description: "permen susu melon",
        price: 350,
        image: "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/GxkAAOSwhsplqHUV/$_57.JPG?set_id=880000500F"
    },
    {
        id: 15,
        name: "Guraku Choco",
        description: "Coklat crispy bar",
        price: 400,
        image: "https://pbs.twimg.com/media/GiyCr-8aoAAt5jU?format=jpg&name=large"
    },
    {
        id: 16,
        name: "Choco & Coffee Biscuit",
        description: "biskuit dengan krim coklat dan kopi diatasnya",
        price: 300,
        image: "https://japanese-snacks-republic.com/media/binary/000/079/460/79460.jpg.webp"
    },
    {
        id: 17,
        name: "Nama Kurimu Choco",
        description: "coklat yang berisi krim",
        price: 430,
        image: "https://ichibajunction.com.au/cdn/shop/files/FURUTA-Nama-Cream-Choco-184g_f_720x.jpg?v=1727009480"
    },
    {
        id: 18,
        name: "Sakusaku Crunky Choco",
        description: "coklat dengan isian rice crispy",
        price: 470,
        image: "https://i.ebayimg.com/images/g/GhAAAOSw~qVni49v/s-l400.jpg"
    },
    {
        id: 19,
        name: "Senbe",
        description: "opak jepang",
        price: 260,
        image: "https://media-hosting.imagekit.io/bf1b4259abb24852/20250504_130601.jpg?Expires=1840952343&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yBWY1YrCpvZPqnWRDdXMdlB6bD0~ycbqQ3BcXT-3dYfXC2OEw4xNjPX~F6HK35DtCfVNYvFF~fUjNb9xuHCxCb8rv2AWxJDXhXN-Dh1jBbWxfL2QZZRYQriPxQLMYDymfK-dx~jyj2ebmlFCte5YAWGpEpNBfbmjJW5aYUzYVRgNlWOiZwQVRW8CvjCv1Jhozadi1MSZ7nSAoczGEKVEaZsGOUwBxkxmop5ybpS8UvSftwWt7senD2GhH5qUC6oOHshOHhcA3bsvktMyR2rvN54ZafKrXaQCITjzeWJafuA946vYMBNHGXTIA65O97h1hjuBIJeTqIMmlcnZUtxVVg__"
    },
    {
        id: 20,
        name: "Instan Miso Soup",
        description: "sup miso instan",
        price: 650,
        image: "https://media-hosting.imagekit.io/4e03ff8d4836454a/20250504_131737.jpg?Expires=1840952439&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Po7AJasK2WJmE93YbKTGkki2WHlry6kXI0Zf2tdIehjHzZU9Nlu5JCf4Hb7aUesQkXrGHQdnhZIfPmDT2VQp9eFVcSr19a3ELmvpzM4tVQDdEjtB25jqi4LFv8~gbUaNVrTMl-8k3xemIHLdEqP3MkbkjUlzirqox75HF1pEHrxjlvhAHnsARptTyK2i8lplf95LCEqTkLoWFCxwTO~uGGpGm0YQnFfqA3sSAy4nZi8YDA4slWVeUcaC4YDABVEQSvpNed0XZVP3fY7nyzV8qDaux2EyKk517YdiAOCYGOh9J-UOXW51dO5b7OG-yRzC7nsC9uvgeXM7lMoCwKev~w__"
    },
    {
        id: 21,
        name: "Elise Choco cream & white cream wafer",
        description: "wafer dengan isian coklat dan krim putih",
        price: 430,
        image: "https://m.media-amazon.com/images/I/711cmKbxurL.jpg"
    },
    {
        id: 22,
        name: "Koala No Machi",
        description: "biskuit koala yang di isi krim coklat",
        price: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4JKdeYoL5tnYh50lIyaE_m97qiV6Qm2k9A&s"
    },
    {
        id: 23,
        name: "Blendy Stick MaTcha",
        description: "matcha latte isi 21",
        price: 780,
        image: "https://m.media-amazon.com/images/I/81zQV6lGjUL.jpg"
    },
    {
        id: 24,
        name: "Blendy Stick Karamel Machiato",
        description: "Karamel Machiato",
        price: 390,
        image: "https://www.japanesegreenteashops.com/cdn/shop/files/AGFBlendyCafeLatoryRichCaramelMacchiato7Sticks.jpg?v=1735526292"
    },
    {
        id: 25,
        name: "Blendy Stick Choco latte",
        description: "Choco latte",
        price: 390,
        image: "https://i.ebayimg.com/images/g/uLAAAOSwVaJmTq~-/s-l1200.png"
    },
    {
        id: 26,
        name: "Blendy Stick Strawberry White Choco Latte",
        description: "Strawberry White Choco Latte",
        price: 390,
        image: "https://mrmax.jp/static_files/product_images/4901111528147_01.jpg"
    },
    {
        id: 27,
        name: "Blendy Stick Pistachio White Choco Latte",
        description: "Pistachio White Choco Latte",
        price: 390,
        image: "https://item-shopping.c.yimg.jp/i/n/h-lohaco_rh39846_1_d_20240903181947"
    },
    {
        id: 28,
        name: "Blendy Stick Hazelnut Latte",
        description: "Hazelnut Latte",
        price: 390,
        image: "https://m.media-amazon.com/images/I/713eQfPKISL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 29,
        name: "Milk Matcha Candy",
        description: "Permen rasa Susu Matcha",
        price: 390,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTT5R5_SWhswnjtCtUxVJfW57y1zWtXL8C4A&s"
    },
    {
        id: 30,
        name: "Caramel Milk Candy",
        description: "Permen susu Karamel",
        price: 390,
        image: "https://media-hosting.imagekit.io/e4c6bfe19eb74dd5/Caramel.jpg?Expires=1840952157&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dk9uhbaZ-ramwUVz7z52ykWmfJOt-GXdMjFI3hn4vcfZsPRzLSnPY4gUbxFdDxyYUH4u~8dzER0sQjLkIwa4SoUpTp4zWaluXLnEEKKxZVMvg92GdJ455oSdBBiX3eI5jlSIhhn39qdvok-e7c-F~ucUETtER2iAB8vFGVTE9Ug~2VPBpuN5i8ctEtYf7lWigGFvpDVhSm8dF7FHE2Jyv48y~eV4kVYcJWLC2fyBrN9~0FE6UTIN8GfeMAIUho0-6BLbUwnqnKmnfLwbBDg2gsA0mh~MuXA8e~~6B5qo9G6mzJ1fQOzjBO0z~0emzOVdPfO1DWiFgH2wkIbILvqUuw__"
    },
    {
        id: 31,
        name: "Choco Pistachio",
        description: "Kacang Pistachio dibalut dengan coklat",
        price: 390,
        image: "https://down-id.img.susercontent.com/file/id-11134207-23010-cm257dnv2pmv78"
    },
    {
        id: 32,
        name: "Choco Hazelnut",
        description: "Kacang Hazelnut yang dibalut dengan coklat",
        price: 390,
        image: "https://m.media-amazon.com/images/I/61uQpsMB0JL.jpg"
    },
    {
        id: 33,
        name: "Matcha Almond",
        description: "Kacang Almond yang dibalut dengan coklat Matcha",
        price: 390,
        image: "https://images-cdn.ubuy.co.id/634fbdfdf020d606497d33d8-meiji-almond-chocolate-matcha-green-tea.jpg"
    },
  // Tambahkan produk lainnya di sini...
];
