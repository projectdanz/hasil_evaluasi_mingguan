// soal no 1
// Harga menu
const hargaGudeg = 15000;
const hargaAyam = 20000;
const hargaEsteh = 3000;

// jumlah terjual hari ini
const jumlahGudeg = 15;
const jumlahAyam = 10;
const jumlahEsteh = 20;

// total penjualan
const totalGudeg = hargaGudeg * jumlahGudeg;
const totalAyam = hargaAyam * jumlahAyam;
const totalEsteh = hargaEsteh * jumlahEsteh;

console.log("Total penjualan gudeg: Rp " + totalGudeg);
console.log("Total penjualan ayam: Rp " + totalAyam);
console.log("Total penjualan es teh: Rp " + totalEsteh);

// total keseluruhan
const totalKeseluruhan = totalGudeg + totalAyam + totalEsteh;
console.log("Total keseluruhan penjualan hari ini: Rp " + totalKeseluruhan);

// soal no 2
let totalBelanja = 75000; 
let diskon = 0;

if (totalBelanja > 50000) {
    diskon = totalBelanja * 0.10; // diskon 10%
}

let totalSetelahDiskon = totalBelanja - diskon;

console.log("Total sebelum diskon: Rp" + totalBelanja);
console.log("Diskon: Rp" + diskon);
console.log("Total setelah diskon: Rp" + totalSetelahDiskon);

// soal no 3
// Data penjualan dalam objek
let penjualan = {
    "gudeg": jumlahGudeg,
    "ayam": jumlahAyam,
    "esteh": jumlahEsteh
}


// Mencari menu terlaris
let menuTerlaris = "";
let jumlahTerbanyak = 0;

for (let menu in penjualan) {
    if (penjualan[menu] > jumlahTerbanyak) {
        jumlahTerbanyak = penjualan[menu];
        menuTerlaris = menu;
    }
}

console.log("Menu terlaris hari ini: " + menuTerlaris + 
            " (" + jumlahTerbanyak + " porsi)");

// soal no 4
// Level pelanggan: biasa, member, vip
function hitungDiskonPelanggan(total, level) {
    let persenDiskon = 0;

    if (level === "biasa") {
        persenDiskon = 0.05; // 5%
    } else if (level === "member") {
        persenDiskon = 0.10; // 10%
    } else if (level === "vip") {
        persenDiskon = 0.15; // 15%
    }

    let potongan = total * persenDiskon;
    let totalAkhir = total - potongan;

    console.log("Level: " + level);
    console.log("Total sebelum diskon: Rp" + total);
    console.log("Diskon: Rp" + potongan);
    console.log("Total setelah diskon: Rp" + totalAkhir);
}

hitungDiskonPelanggan(80000, "vip");

// soal no 5
let penjualanMinggu = [150000, 200000, 175000, 180000, 165000, 190000, 145000];

let totalMinggu = 0;
for (let i = 0; i < penjualanMinggu.length; i++) {
    totalMinggu += penjualanMinggu[i];
}

let rataRata = totalMinggu / penjualanMinggu.length;

console.log("Rata-rata penjualan 7 hari terakhir: Rp" + rataRata);