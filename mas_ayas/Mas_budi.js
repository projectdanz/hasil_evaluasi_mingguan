//SOAL1
function totalPendapatan(service){
    let pendapatan = service.reduce((sum, s) => sum + s.biaya, 0)
    let waktu = service.reduce((sum, s) => sum + s.jam, 0)
    return {pendapatan, waktu}
}
let hasil = totalPendapatan([
    {biaya: 50000, jam: 2},
    {biaya: 100000, jam: 4},
    {biaya: 200000, jam: 8 }
]);
console.log("Total pendapatan Rp." + hasil.pendapatan);
console.log("Total waktu: " + hasil.waktu + " jam");

//SOAL2
function cekWaktu(service){
    let totalJam = service.reduce((sum, s) => sum + s.jam, 0)
    if(totalJam > 8 ){
        return "Mekaniknya capek, Di lanjutkan besok"
    } else {
        return "Waktu kerja masih dalam batas"
    } 
}
let hasil2 = cekWaktu([
    {biaya: 50000, jam: 2},
    {biaya: 100000, jam: 4},
    {biaya: 200000, jam: 8 }
]);
console.log(hasil2);

//SOAL3
const antrian = []
function tambahAntrian(nama){
    antrian.push(nama)
}
function panggilAntrian(){
    return antrian.shift()
}
tambahAntrian("Liru")
tambahAntrian("Nami")
tambahAntrian("Zoro")
console.log(panggilAntrian())

//SOAL4
function garansi(tanggal, bulan){
    let t = new Date(tanggal)
    t.setMonth(t.getMonth() + bulan)
    return t.toDateString()
}
console.log(garansi("2025-04-28", 3))

//SOAL5
function komisiRingan(pendapatan){
    return pendapatan * 0.1    
}
function komisiSedang(pendapatan){
    return pendapatan * 0.15
}
function komisiBerat(pendapatan){
    return pendapatan * 0.2
}
console.log("Komisi mekanik pekerjaan ringan sebesar Rp." + komisiRingan(5000000));
console.log("Komisi mekanik pekerjaan sedang sebesar Rp." + komisiSedang(100000000));
console.log("Komisi mekanik pekerjaan berat sebesar Rp." + komisiBerat(2000000000000));

 