// soal no 1
// stok barang
let stokBarang = {
    "Kaos": { jumlah: 50, harga: 75000 },
    "Celana": { jumlah: 30, harga: 150000 },
    "Jaket": { jumlah: 15, harga: 200000 }
};

// cek stok
function cekStok() {
    console.log("Cek Stok Barang");
    for (let barang in stokBarang) {
        console.log(barang + ": " + stokBarang[barang].jumlah + " pcs");
    }
}

cekStok();

// soal no 2
// Data pelanggan dengan poin
let pelanggan = {
    "Andi": 0,
    "Budi": 0,
    "Citra": 0
};

// Fungsi tambah poin (setiap Rp10.000 = 1 poin)
function tambahPoin(nama, belanja) {
    let poinBaru = Math.floor(belanja / 10000);
    pelanggan[nama] += poinBaru;

    console.log(nama + " belanja Rp" + belanja + 
                " → dapat " + poinBaru + " poin. Total poin: " + pelanggan[nama]);
}

tambahPoin("Andi", 75000);
tambahPoin("Budi", 200000);
tambahPoin("Citra", 50000);

// soal no 3
function cekBonus() {
    console.log("=== Cek Bonus Barang ===");
    for (let barang in stokBarang) {
        if (stokBarang[barang].jumlah < 10) {
            let bonus = stokBarang[barang].harga * 0.05;
            console.log(barang + " stok tinggal " + stokBarang[barang].jumlah + 
                        " pcs → Bonus Rp" + bonus);
        }
    }
}

// Contoh: kurangi stok dulu biar ada yg < 10
stokBarang["Jaket"].jumlah = 8;
cekBonus();

// soal no 4
function cekPeringatanStok() {
    console.log("=== Peringatan Stok ===");
    for (let barang in stokBarang) {
        if (stokBarang[barang].jumlah < 20) {
            console.log(" Stok " + barang + " tinggal " + stokBarang[barang].jumlah + " pcs. Segera restok!");
        }
    }
}

cekPeringatanStok();

// soal no 5
function cekLevel(nama) {
    let poin = pelanggan[nama];
    let level = "";

    if (poin >= 500) {
        level = "Gold";
    } else if (poin >= 100) {
        level = "Silver";
    } else {
        level = "Bronze";
    }

    console.log(nama + " punya " + poin + " poin → Level: " + level);
}

cekLevel("Andi");
cekLevel("Budi");
