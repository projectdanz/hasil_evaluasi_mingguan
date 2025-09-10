// **Soal 1:**

/* const nasiGudeg = 8000
let sell = 15
let hasil = nasiGudeg * sell
console.log ("harga Nasi Gudeg : " + nasiGudeg)
console.log ("jumlah pembelian : " + sell)
console.log("Total penjualan Nasi Gudeg hari ini : " + hasil)

const ayamGoreng = 12000
let sell2 = 10
let hasil2 = ayamGoreng * sell2
console.log ("harga Ayam Goreng : " + ayamGoreng)
console.log ("jumlah pembelian : " + sell2)
console.log("Total penjualan Ayam Goreng hari ini : " + hasil2)

const esTeh = 3000
let sell3 = 20
let hasil3 = esTeh * sell3
console.log ("harga Es Teh : " + esTeh)
console.log ("jumlah pembelian : " + sell3)
console.log("Total penjualan ES Teh hari ini : " + hasil3)


let total = hasil + hasil2 + hasil3
console.log("Total pemasukkan hari ini ialah : " + total) */





// **Soal 2:**

/* let belanja = 50000
let diskon = belanja * 0.1
let total = belanja - diskon
if(belanja >= 50000){
    belanja - diskon
    console.log ("total belanja anda : Rp." + belanja)
    console.log("Anda mendapat diskon sebesar 10%" )
    console.log("Total nya jadi : " + belanja +" - 10% : Rp." + total )
}else{
    console.log ("total belanja anda : Rp." + belanja)
    console.log("Tambah lagi ya biar dapat diskon 10%")
}
 */




// **Soal 3:**

/* let nasiGudeg = 25
let ayamGoreng = 10
let esTeh = 20

let menuTerlaris
let jumlah


if(nasiGudeg > ayamGoreng && nasiGudeg > esTeh){
    menuTerlaris = "Nasi Gudeg"
    jumlah = nasiGudeg
}else if(ayamGoreng > nasiGudeg && ayamGoreng > esTeh){
    menuTerlaris = "Ayam Goreng"
    jumlah = ayamGoreng
}else{
    menuTerlaris = "Es Teh"
    jumlah = esTeh
}

console.log("Menu paling laris ialah : " + menuTerlaris + " dengan jumlah pembelian : " + jumlah + " porsi") */





// **Soal 4:**

/* let member = "VIP"
let belanja = 1000000


if(member === "VIP"){
    console.log("Total belanja anda adalah : " + belanja)
    console.log("Anda mendapatkan diskon sebesar 15%")
    console.log(belanja - 0.15 * belanja)
}else if (member === "biasa"){
    console.log("Total belanja anda adalah : " + belanja)
    console.log("Anda mendapatkan diskon sebesar 10%")
    console.log(belanja - 0.1 * belanja)
}else{
    console.log("Total belanja anda adalah : " + belanja)
    console.log("Anda mendapatkan diskon sebesar 5%")
    console.log(belanja - 0.05 * belanja)
}
*/







//**Soal 5:**

/* let day1 = 150000
let day2 = 200000
let day3 = 175000
let day4 = 180000
let day5 = 165000
let day6 = 190000
let day7 = 145000
let pendapatMingguan = day1 + day2 + day3 + day4 + day5 + day6 + day7
let total = Math.floor(pendapatMingguan / 7)
console.log("rata-rata pendapatan mingguan adalah : Rp." + total) */







// **Soal 6:**

/*let stokKaos = 50

function beliKaos(jumlah){
    stokKaos -= jumlah
    console.log("beli " + jumlah + " pieces kaos, stok kaos sisa " + stokKaos + " pieces") 
}
console.log("Stok kaos tersisa " + stokKaos)
beliKaos(5)
beliKaos(20)
beliKaos(20)

let stokCelana = 30

function beliCelana(jumlah){
    stokCelana -= jumlah
    console.log("beli " + jumlah + " pieces celana, stok celana sisa " + stokCelana + " pieces") 
}
console.log("Stok celana tersisa " + stokCelana)
beliCelana(5)
beliCelana(17)

let stokJaket = 15

function beliJaket(jumlah){
    stokJaket -= jumlah
    console.log("beli " + jumlah + " pieces jaket, stok jaket sisa " + stokJaket + " pieces") 
}
console.log("Stok jaket tersisa " + stokJaket)
beliJaket(5)
beliJaket(6) 
 */






//**Soal 7:**

/* let jumlahPoin = 0
function belanja(poin){
    jumlahPoin += poin
    console.log("terimakasih telah belanja di toko kami, anda mendapatkan " + poin + " poin")
    console.log("tambah " + poin + " poin, jumlah poin anda sekarang " + jumlahPoin + " poin") 
}
belanja(1)
belanja(1) */








//**Soal 8:**


/* let stokKaos = 50

function beliKaos(jumlah){
    stokKaos -= jumlah
    console.log("beli " + jumlah + " pieces kaos, stok kaos sisa " + stokKaos + " pieces")
     if(stokKaos < 10){
    console.log("Selamat anda mendapat diskon CUCI GUDANG sebesar 5%")
    }else{
}
}

console.log("Stok kaos tersisa " + stokKaos)
beliKaos(5)
beliKaos(20)
beliKaos(15) */


// **Soal 9:**

/* let stokKaos = 50

function beliKaos(jumlah){
    stokKaos -= jumlah
    console.log("beli " + jumlah + " pieces kaos, stok kaos sisa " + stokKaos + " pieces")
    
     if(stokKaos < 10){
    console.log("Selamat anda mendapat diskon CUCI GUDANG sebesar 5%")
    }else{
}
cekStok()
}
function cekStok(){
    if(stokKaos < 20)
    console.log("Stock menipis,segera RESTOCK!")
}





console.log("Stok kaos tersisa " + stokKaos)
beliKaos(5)
beliKaos(10)
beliKaos(18) */  





//**Soal 10:**

/* let jumlahPoin = 0
function belanja(poin){
    jumlahPoin += poin
    console.log("terimakasih telah belanja di toko kami, anda mendapatkan " + poin + " poin")
    console.log("tambah " + poin + " poin, jumlah poin anda sekarang " + jumlahPoin + " poin") 
    cekLevel()
}


function cekLevel(){
    if(jumlahPoin < 100){
        console.log("level member : Bronze")
    }else if (jumlahPoin <= 500 && jumlahPoin >= 100){
        console.log("level member : Silver")
    }else{
        console.log("level member : Gold")
    }
}


belanja(1)
belanja(500)  */ 





//**Soal 11:**

/*let nilaiSiswa = [80, 90, 75, 88, 93, 75, 65, 78, 85, 95,50,35,67,52]
function hitungRataRata(nilaiSiswa){
let total = 0
    for(let i = 0; i < nilaiSiswa.length; i++){
        total += nilaiSiswa[i]
    }
    return total / nilaiSiswa.length
}
console.log(hitungRataRata(nilaiSiswa)) */





//**Soal 12:**

/* function tentukanGrade(nilai){
    if(nilai >= 85 && nilai <= 100){
        return"A"
    }else if(nilai >= 70 && nilai <= 84){
        return"B"
    }else if(nilai >= 60 && nilai <=69){
        return"C"
    }else {
        return"D"
    }
}

for (let i = 0 ; i < nilaiSiswa.length ; i++){
    let nilai = nilaiSiswa[i]
    let grade = tentukanGrade(nilai)
    console.log("Siswa " + [i+1] + " memiliki nilai sejumlah " + nilai + " berarti grade nya " + grade)
} */





//**Soal 13:**

/* let siswa = [
    { nama: "andi", nilai: 88 },
    { nama: "budi", nilai: 73 },
    { nama: "citra", nilai: 91 },
    { nama: "dewi", nilai: 65 },
    { nama: "eko", nilai: 78 },
    { nama: "fajar", nilai: 84 },
    { nama: "gita", nilai: 55 },
    { nama: "hadi", nilai: 92 },
    { nama: "intan", nilai: 69 },
    { nama: "jokowi", nilai: 81 },
    { nama: "kartika", nilai: 95 },
    { nama: "lukman", nilai: 74 },
    { nama: "maya", nilai: 60 },
    { nama: "nina", nilai: 87 },
    { nama: "oscar", nilai: 50 },
    { nama: "putri", nilai: 82 },
    { nama: "qori", nilai: 77 },
    { nama: "raka", nilai: 93 },
    { nama: "sinta", nilai: 68 },
    { nama: "tono", nilai: 71 },
    { nama: "umar", nilai: 85 },
    { nama: "vina", nilai: 64 },
    { nama: "wawan", nilai: 89 },
    { nama: "xavier", nilai: 59 },
    { nama: "yuli", nilai: 97 }
];

function cariSiswa(cariNama){
    let ketemu = false

    for (let i=0;i < siswa.length; i++){
        if (siswa[i].nama === cariNama){
            console.log("Nama : " + siswa[i].nama)
            console.log("Nilai :" + siswa[i].nilai)
            ketemu = true
            break;
        }
    }


    if(!ketemu){
        console.log( cariNama + " tidak ditemukan")
    }
}

cariSiswa("sinta") */





//**Soal 14:**

/* let nilaiSiswa = [80,90,75,88,93,87,65,78,85,95,76,73,78,68,90,85,57,68,88,98]

function hitungRataRataKleas(nilaiSiswa){
let total = 0
    for(let i = 0; i < nilaiSiswa.length; i++){
        total += nilaiSiswa[i]
    }
    return total / nilaiSiswa.length
}
let rataRata = hitungRataRataKleas(nilaiSiswa)
console.log("Nilai rata-rata kelas kita adlah " + rataRata)

if (rataRata >= 80){
    console.log( "Hore...kita dapat reward!!!")
}else{
    console.log("Hadeeeeh Nice Try Diddy, dah dibilangin belajar.")
} */





//**Soal 15:**

/* let siswa = [
    { nama: "andi", nilai: 88 },
    { nama: "budi", nilai: 73 },
    { nama: "citra", nilai: 91 },
    { nama: "dewi", nilai: 65 },
    { nama: "eko", nilai: 78 },
    { nama: "fajar", nilai: 84 },
    { nama: "gita", nilai: 55 },
    { nama: "hadi", nilai: 92 },
    { nama: "intan", nilai: 69 },
    { nama: "jokowi", nilai: 81 },
    { nama: "kartika", nilai: 95 },
    { nama: "lukman", nilai: 74 },
    { nama: "maya", nilai: 60 },
    { nama: "nina", nilai: 87 },
    { nama: "oscar", nilai: 50 },
    { nama: "putri", nilai: 82 },
    { nama: "qori", nilai: 77 },
    { nama: "raka", nilai: 93 },
    { nama: "sinta", nilai: 68 },
    { nama: "tono", nilai: 71 },
    { nama: "umar", nilai: 85 },
    { nama: "vina", nilai: 64 },
    { nama: "wawan", nilai: 89 },
    { nama: "xavier", nilai: 59 },
    { nama: "yuli", nilai: 97 }
];

function ranking(siswa){
    siswa.sort((a,b) => b.nilai - a.nilai)

    console.log("Rangking kelas :")
    for (let i = 0 ; i < siswa.length; i++){
    console.log((i+1) + ". " + siswa[i].nama + " - " + siswa[i].nilai)
    }
}
ranking(siswa) */






//**soal 16:**

/* let reparasiMotor = [
    { jenis: "ringan", harga: 500000, waktu: 2 },
    { jenis: "sedang", harga: 1000000, waktu: 4 },
    { jenis: "berat", harga: 2000000, waktu: 8 }
]
function totalPendapatan(reparasiMotor){
    let totalPendapatan = 0
    for (let i = 0; i < reparasiMotor.length; i++){
        totalPendapatan += reparasiMotor[i].harga
    }
    return totalPendapatan
}
function totalWaktu(reparasiMotor){
    let totalWaktu = 0
    for (let i = 0; i < reparasiMotor.length; i++){
        totalWaktu += reparasiMotor[i].waktu
    }
    return totalWaktu
}
console.log(totalPendapatan(reparasiMotor)  + " & " + totalWaktu(reparasiMotor) + " jam") */





//**Soal 17:**

/* let layanan = {
    ringan: 2,
    sedang: 4,
    berat: 8
}

let motorMasuk = ["ringan","sedang","berat","sedang","ringan","sedang","berat","ringan","sedang","ringan"]

function cekWaktu(daftarMotor){
    let totalWaktu = 0

    for (let i=0 ; i < daftarMotor.length ; i++){
        let jenis = daftarMotor[i]
        totalWaktu += layanan[jenis]
    }
    console.log("Total motor masuk : " + motorMasuk.length)
    console.log("Total waktu yang dibutuhkan : "  + totalWaktu + " jam")

if (totalWaktu <= 8){
        console.log(" Semua motor bisa selesai hari ini.");
    } else {
        console.log("Tidak cukup waktu, sebagian harus lanjut besok.");
    }
}

cekWaktu(motorMasuk) */

//**soal 18: **
/* let antrian = [];

function tambahUrutan(nama){
    antrian.push(nama);
    console.log(nama + " nomor urut " + antrian.length);
}

function panggilUrutan(){
    if(antrian.length === 0){
        console.log("Antrian kosong");
    } else {
        let dipanggil = antrian.shift();
        console.log("Memanggil motor milik " + dipanggil);
    }
}

tambahUrutan("Andi");
tambahUrutan("Budi");
tambahUrutan("Citra");

panggilUrutan(); 
panggilUrutan(); 
panggilUrutan(); 
panggilUrutan();  */


//**Soal 19:**
/* function hitungGaransi(jenisService,hariService){
    let tambahanHari = 0
    if(jenisService === "ringan"){
        tambahanHari = 7
    }
    if (jenisService === "sedang"){
        tambahanHari = 14
    }
    if(jenisService === "berat"){
        tambahanHari = 30
    }
    let hariBerakhir = hariService + tambahanHari
    return hariBerakhir
}
console.log("service berat hari ke - 5, garansi habis hari ke " + hitungGaransi("berat",5))
console.log("service ringan hari ke - 20, garansi habis hari ke " + hitungGaransi("ringan",20))
console.log("service sedang hari ke - 12, garansi habis hari ke " + hitungGaransi("sedang",12)) */


//**Soal 20:**
/* let totalKomisi = 0
function hitungKomisi(jenisService,harga){
let komisi = 0
if(jenisService === "ringan"){
    komisi = harga * 0.1
}if(jenisService ==="sedang"){
    komisi = harga * 0.15
}if (jenisService === "berat"){
    komisi = harga * 0.2
}
totalKomisi += komisi
return komisi
}

console.log("komisi service ringan: ",hitungKomisi("ringan",500000))
console.log("komisi service sedang: ",hitungKomisi("sedang",1000000))
console.log("komisi service berat: ",hitungKomisi("berat",2000000))
console.log("komisi service berat: ",hitungKomisi("berat",2000000))

console.log("Total semua komisi: ",totalKomisi) */




//**Soal 21:**

/* function hitungBiayaPerPertemuan(paket, harga, pertemuan) {
    let biayaPerPertemuan = harga / pertemuan;
    return "Paket " + paket + ": Rp" + biayaPerPertemuan + " per pertemuan";
}

console.log(hitungBiayaPerPertemuan("Basic",500000,4));
console.log(hitungBiayaPerPertemuan("Standard",800000,8));
console.log(hitungBiayaPerPertemuan("Premium",1200000,12));
 */