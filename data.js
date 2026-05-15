// data.js - File khusus database komik Anda
const comics = [
    {
        id: 1,
        title: "One Piece Remastered",
        poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400",
        desc: "Kisah petualangan Monkey D. Luffy untuk menjadi Raja Bajak Laut di seluruh lautan.",
        direct: "https://google.com", // MASUKKAN DIRECT LINK ADSTERRA ANDA
        chapters: [
            {
                chNum: 1,
                title: "Ch. 01",
                images: [
                    "https://i.imgur.com/IHsfaWQ.png",
                    "https://i.imgur.com/a8olAmo.png",
                    "https://i.imgur.com/eI0xkkZ.png",
                    "https://i.imgur.com/BeEnPCp.png",
                    "https://i.imgur.com/pdbSz4l.png",
                    "https://i.imgur.com/rVoONxF.png",
                    "https://i.imgur.com/L9QFUC5.png",
                    "https://i.imgur.com/xzOSIcA.png",
                    "https://i.imgur.com/7RbWP7V.png",
                    "https://i.imgur.com/BgWMiQg.png",
                    "https://i.imgur.com/vyx2SCb.png",
                    "https://i.imgur.com/wT9RrJg.png",
                    "https://i.imgur.com/H0g7OBR.png",
                    "https://i.imgur.com/w8RZfMq.png",
                    "https://i.imgur.com/gkl2fzO.png",
                    "https://i.imgur.com/C12dQaq.png",
                    "https://i.imgur.com/hJPTacF.png",
                    "https://i.imgur.com/Gc2P9IZ.png"
                ]
            },
            {
                chNum: 2,
                title: "Ch. 02: Luffy Topi Jerami",
                images: [
                    "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?w=700",
                    "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=700"
                ]
            }
            // Jika ingin tambah Chapter 3, tinggal copas struktur di atas dan taruh di bawah sini
        ]
    }
    // Jika ingin tambah judul komik baru (misal: Naruto), tinggal taruh di bawah sini koma (,)
];