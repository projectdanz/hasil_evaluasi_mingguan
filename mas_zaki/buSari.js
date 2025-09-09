console.error("Soal 1-5: Bu Sari - Pemilik Warung Makan");


//1.
const hargaGudeg = 8000;
const hargaAyam = 12000;
const hargaEsTeh = 3000;

function hitungTotalHarga(porsiGudeg,porsiAyam,gelasEsTeh) {
    totalGudeg = hargaGudeg * porsiGudeg;
    totalAyam = hargaAyam * porsiAyam;
    totalEsTeh = hargaEsTeh * gelasEsTeh;
        totalPendapatan = totalGudeg + totalAyam + totalEsTeh;
    return totalPendapatan;
   
}
   console.log (hitungTotalHarga(15,21,31));


//2.
function diskon(totalBelanja) {
    if (totalBelanja > 50000){
        console.log("mendapatkan diskon 10%");
    }else{
        console.log("tidak dapat apa apa");
    }
}
    (diskon(30000));
    (diskon(65000));

//3.

//4.
function level(levels) {
    switch (levels) {
        case 1:
            console.log("biasa, dapat diskon 5%");
            break;
        case 2:
            console.log("member, dapat diskon 10%");
            break;
        case 3:
            console.log("VIP, dapat diskon 15%")
        default:
            "tidak jenis member itu!"
            break;
    }

}    
level(1)
level(2)


//5.
  function RatarataPenjualan(a,b,c,d,e,f,g){
        const rataRata =(a + b + c + d + e + f + g) /RatarataPenjualan.length;
        console.log("rata rata penjualan minggu ini adalah : " + rataRata)
        return rataRata
       
  } 
  RatarataPenjualan(150000,200000,175000,180000,165000,190000,145000)