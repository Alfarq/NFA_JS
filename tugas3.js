//array produk toko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

//data pelanggan
let pelangganToko = [
    {id: 1, nama : "Al"},
    {id: 2, nama : "Rizky"}
]

//data pesanan
let pesananToko = [];

//fungsi tambah produk
function tambahProduk(nama,harga,stok) {
    const idBaru = produkToko.length > 0 ? produkToko[produkToko.length -1].id+1 : 1;
    produkToko.push({id: idBaru, nama, harga, stok});
    console.log(`Produk "${nama}" Berhasil Ditambahkan.`);
}

//fungsi hapus produk
function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        const produkDihapus = produkToko.splice(index, 1 )[0];
        console.log(`Produk "${produkDihapus.nama}" Berhasil Dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} Tidak Ditemukan`);
    }
}

//fungsi menampilkan produk
function tampilkanProduk() {
    console.log("Daftar Produk Toko; ");
    produkToko.forEach(produk => {
        console.log(`ID : ${produk.id}, Nama : ${produk.nama}, Harga : ${produk.harga.toLocaleString()}, Stok : ${produk.stok}`);
    });
}

//fungsi tambah pelanggan
function tambahPelanggan(nama) {
    const idBaru = pelangganToko.length > 0 ? pelangganToko[pelangganToko.length - 1].id + 1 : 1;
    pelangganToko.push({id : idBaru, nama});
    console.log(`Pelanggan "${nama}" berhasil ditambahkan. `);
}

// Fungsi Menampilkan Daftar Pelanggan
function tampilkanPelanggan() {
    console.log("Daftar Pelanggan:");
    pelangganToko.forEach(pelanggan => {
        console.log(`ID: ${pelanggan.id}, Nama: ${pelanggan.nama}`);
    });
}

// Fungsi Membuat Pesanan
function buatPesanan(idPelanggan, daftarProduk) {
    const pelanggan = pelangganToko.find(p => p.id === idPelanggan);
    if (!pelanggan) {
        console.log(`Pelanggan dengan ID ${idPelanggan} tidak ditemukan.`);
        return;
    }

    let totalHarga = 0;
    const detailPesanan = [];

    daftarProduk.forEach(item => {
        const produk = produkToko.find(p => p.id === item.idProduk);
        if (produk && produk.stok >= item.jumlah) {
            produk.stok -= item.jumlah;
            const subtotal = produk.harga * item.jumlah;
            totalHarga += subtotal;

            detailPesanan.push({
                nama: produk.nama,
                harga: produk.harga,
                jumlah: item.jumlah,
                subtotal
            });
        } else {
            console.log(`Produk dengan ID ${item.idProduk} tidak tersedia atau stok tidak mencukupi.`);
        }
    });

    if (detailPesanan.length > 0) {
        const idPesananBaru = pesananToko.length > 0 ? pesananToko[pesananToko.length - 1].idPesanan + 1 : 1;
        pesananToko.push({idPesanan: idPesananBaru, idPelanggan, detailPesanan, totalHarga});
        console.log(`Pesanan berhasil dibuat dengan total pembayaran Rp${totalHarga.toLocaleString()}`);
    } else {
        console.log("Pesanan tidak berhasil dibuat karena semua produk tidak tersedia.");
    }
}


// Fungsi Menampilkan Pesanan dengan Detail
function tampilkanPesanan() {
    console.log("Daftar Pesanan : ");
    const pesananFormatTabel = pesananToko.map(pesanan => {
        const pelanggan = pelangganToko.find(p => p.id === pesanan.idPelanggan);

        return {
            ID_Pesanan: pesanan.idPesanan,
            Pelanggan: pelanggan.nama,
            Detail_Pesanan: pesanan.detailPesanan.map(item =>
                `${item.nama} (x${item.jumlah}) - Rp${item.subtotal.toLocaleString()}`
            ).join(", "),
            Total_Harga: `Rp${pesanan.totalHarga.toLocaleString()}`
        };
    });

    console.table(pesananFormatTabel);
}



//fungsi table untuk semua data agar lebih rapih
function tampilkanProduk() {
    console.table(produkToko);
}
function tampilkanPelanggan() {
    console.table(pelangganToko);
}


//action

tambahProduk("cooler", 100000, 8);
hapusProduk(4);
tambahPelanggan("Ajam");
buatPesanan(2, [
    {idProduk : 2, jumlah : 2}
]);
tampilkanProduk();
tampilkanPelanggan();
tampilkanPesanan();