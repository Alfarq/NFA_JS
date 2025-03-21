// menyimpan data kendaraan
class Kendaraan {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
    }

    infoKendaraan() {
        return `${this.nama} (${this.tipe})`;
    }
}

// menyimpan data pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa = null) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    infoPelanggan() {
        return `${this.nama} - ${this.nomorTelepon} - ${this.kendaraanDisewa ? this.kendaraanDisewa.infoKendaraan() : 'Tidak ada kendaraan disewa'}`;
    }
}

// Sistem Manajemen Transportasi
class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    tampilkanPelanggan() {
        if (this.pelangganList.length === 0) {
            console.log("Belum ada pelanggan yang menyewa kendaraan.");
        } else {
            console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
            this.pelangganList.forEach((pelanggan, index) => {
                console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
            });
        }
    }
}

// input data
const kendaraan1 = new Kendaraan("Toyota Avanza", "Mobil");
const kendaraan2 = new Kendaraan("Yamaha NMAX", "Motor");

const pelanggan1 = new Pelanggan("Budi", "081234567890");
const pelanggan2 = new Pelanggan("Ani", "082345678901");

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(kendaraan1);
pelanggan2.sewaKendaraan(kendaraan2);

// Sistem manajemen transportasi
const sistemTransportasi = new SistemManajemenTransportasi();
sistemTransportasi.tambahPelanggan(pelanggan1);
sistemTransportasi.tambahPelanggan(pelanggan2);

// Menampilkan daftar pelanggan
sistemTransportasi.tampilkanPelanggan();
