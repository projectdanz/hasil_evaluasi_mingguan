console.error("Soal 16-20: Mas Budi - Pemilik Bengkel Motor");


//16.



//17.
let  ringan = 2;
let  sedang = 4;
let  berat = 8;

function WaktuGawe(jumlahRingan,jumlahSedang,jumlahBerat) {
    totalRingan = ringan * jumlahRingan;
    totalSedang = sedang * jumlahSedang;
    totalBerat = berat * jumlahBerat;
        totalWaktu = totalRingan + totalSedang + totalBerat;
    if (totalWaktu < 8){
        console.log("masih ada waktu yang tersisa")
    }else{
        console.log("sudah tidak ada waktu, lanjutkan besok!")
    }
    return totalWaktu;
}
WaktuGawe(2,1,0)
WaktuGawe(2,0,0)
//tulis jumlah jenis service


//18.


