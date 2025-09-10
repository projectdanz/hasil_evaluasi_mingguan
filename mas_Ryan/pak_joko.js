let stockKaos = 50;
let stockCelana = 30;
let stockJaket = 15;

const hargaKaos = 75000;
const hargaCelana = 150000;
const hargaJaket = 200000;

console.log("kaos " + stockKaos + " pcs");
console.log("celana " + stockCelana + " pcs");
console.log("jaket " + stockJaket + " pcs");

let pelanggan = {
    nama: "nano",
    poin: 0
};
 function tambahPoin(namaProduk) {
    if (produk[namaProduk]) {
        pelanggan.poin += produk[namaProduk]
        console.log(`poin ${produk[namaProduk]}ditambahkan. total poin ${pelanggan.poin}`);
    }else {
        console.log("produk tidak ditemukan");
    }
}
function bonus(harga, stock) {
    if (stock < 10) {
        let bonus = harga * 0.5;
        console.log("bonus 5%: " + bonus)
    }else {
        console.log("tidak ada bonus");
    }
}
function cekStock(nama, stock) {
    if (stock < 20) {
        console.log("stock " + nama + "hampir sisa" + stock)
    }else {
        console.log("stock " + nama + "masih ada " + stock);
    }
}

cekStock("kaos", 50);
cekStock("celaan", 15);
cekStock("jaket", 5);

function cekLevel(poin){
    if (poin < 100) {
        return "bronze";
    }else if (poin < 500) {
        return "silver"
    }else {
        return "gold"
    }
}
console.log("pelanggan A:" + cekLevel(70));
console.log("pelanggan B:" + cekLevel(170));
console.log("pelanggan C:" + cekLevel(550));