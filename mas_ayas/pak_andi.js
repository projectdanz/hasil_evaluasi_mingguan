function biayaPertemuan(jumlahPertemuan) {
    const biayaPerPertemuan = 500000;
    return jumlahPertemuan * biayaPerPertemuan;
}
console.log("Biaya untuk 4 pertemuan: Rp." + biayaPertemuan(4));
console.log("Biaya untuk 8 pertemuan: Rp." + biayaPertemuan(8));
console.log("Biaya untuk 12 pertemuan: Rp." + biayaPertemuan(12));

//SOAL2
function cicilan(totalPinjaman, lamaCicilan) {
    return totalPinjaman / lamaCicilan;
}
console.log("Cicilan per bulan untuk pinjaman uang Rp.12.000.000 selama 12 bulan: Rp." + cicilan(12000000, 4));

//SOAL3
function alokasiRuang(jumlahSiswa, kapasitasRuang) {
    return Math.ceil(jumlahSiswa / kapasitasRuang);
}
console.log("Jumlah ruang yang diperlukan untuk 55 siswa dengan kapasitas 20 siswa per ruang: " + alokasiRuang(55, 20) + " ruang");

//SOAL4
function persentaseKehadiran(jumlahHadir, totalPertemuan) {
    return (jumlahHadir / totalPertemuan) * 100;
}
console.log("Persentase kehadiran buat 20 pertemuan dari total 20 pertemuan: " + persentaseKehadiran(20, 20) + "%");

//SOAL5
class Kursus {
    constructor(){
        this.siswa = [];
    }
    daftar(nama){
        this.siswa.push({nama, bayar: false, hadir:0});
    }
    bayar(nama){
        const siswa = this.siswa.find(s => s.nama === nama);
        if(siswa) siswa.bayar = true;
    }
    hadir(nama){
        const siswa = this.siswa.find(s => s.nama === nama);
        if(siswa) siswa.hadir += 1;
    }
    laporan(){
        return this.siswa.map(s => ({
            nama: s.nama,
            bayar: s.bayar ? "Sudah bayar" : "Belum bayar",
            hadir: s.hadir
        }));
    }
}   
const kursus = new Kursus();
kursus.daftar("Jokodi");
kursus.daftar("Septiandri");
kursus.daftar("Roulita");
console.log(kursus.laporan()); 


