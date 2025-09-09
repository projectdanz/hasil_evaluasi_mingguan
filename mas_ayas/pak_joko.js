//SOAL 1
 function cekStok(namaBarang, stokAwal, jumlahTerjual) {
    const stokTersisa = stokAwal - jumlahTerjual;
    return ("jumlah stok " + namaBarang + " Tinggal: " + stokTersisa + " pcs");
}
console.log(cekStok("Kaos", 50, 40));
console.log(cekStok("Celana", 30, 23));
console.log(cekStok("Jaket", 15, 7));   

//SOAL 2
function hitungPoin(totalBelanja) {
    const poin = Math.floor(totalBelanja / 10000);
    return ("poin yang kamu dapat: " + poin);
}
console.log(hitungPoin(75000));
console.log(hitungPoin(150000));
console.log(hitungPoin(2000));
console.log(hitungPoin(20000000000000000));

//SOAL 3
function hargaDenganBonus(harga, stok) {
    return stok < 10 ? harga * 0.95 : harga;
}
console.log("harga yang harus pelanggan bayar sebesar Rp." + hargaDenganBonus(125000, 9))

//SOAL 4 
function peringatanStok(namaBarang, stok) {
    if (stok < 20) {
        return ("Stok " + namaBarang + " mau habis, segera pesan lagi!");
    } else {
        return ("Stok " + namaBarang + " masih cukup.");
    }
}
console.log(peringatanStok("Kaos", 20));
console.log(peringatanStok("Celana", 19));
console.log(peringatanStok("Jaket", 200));

//SOAL 5
function levelPelanggan(poin) {
    if (poin >= 500) {
        return "Gold";
    } else if (poin >= 100) {
        return "Silver";
    } else {
        return "Bronze";
    }
}
console.log("Level pelanggan: " + levelPelanggan(546));
console.log("Level pelanggan: " + levelPelanggan(376));
console.log("Level pelanggan: " + levelPelanggan(70));