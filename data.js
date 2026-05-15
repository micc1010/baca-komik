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
                    "https://i.imgur.com/a8olAmo.png"
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