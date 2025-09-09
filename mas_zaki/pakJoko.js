console.error("Soal 6-10: Pak Joko - Pemilik Toko Baju Online");


//6.
let Barang ={
kaos: {nama: "kaos", stok: 50, harga: 75000},
celana: {nama: "celana", stok: 30, harga:150000},
jaket: {nama: "jaket", stok: 15, harga: 200000}    
}
function Stok() {
    console.log(Barang);
}
Stok()


//7.
let poin = 0;
function addPoin(jumlahKaos,jumlahCelana,jumlahJaket) {
    totalKaos = Barang.kaos.harga * jumlahKaos;
    totalCelana = Barang.celana.harga * jumlahCelana;
    totaljaket = Barang.jaket.harga * jumlahJaket;
        totalBelanja = totalKaos + totalCelana + totaljaket;
        
    poin += totalBelanja / 10000;
      console.log("poin anda " + (poin))  
  return poin;
}
addPoin(1,2,1);
addPoin(1,1,1);


//8.
function bonus(stok){
    if (stok < 10) {
        console.log("dapat bonus 5%");
    }else{
        console.log(null);
    }
}
bonus(15);
bonus(5);


//9.
function hitungStok(stock) {
    if (stock < 20) {
        console.error("barang hampir habis!, silahkan stok ulang!");
    }else{
        console.log("stok aman terkendali");
    }
}
hitungStok(21);
hitungStok(7);


//10.
function Grade(poin) {
    if (poin < 100){
        console.log("rank anda bronze 🥉");
    }else if (poin < 500){
        console.log("rank anda silver 🥈");
    }else{
        console.log("rank anda gold 🥇");
    }
}
Grade(45);
Grade(123);
Grade(560);

