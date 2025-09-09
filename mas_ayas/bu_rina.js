//SOAL1
function rataRataNilai(nilai){
    return nilai.reduce((a,b) => a + b, 0) / nilai.length;
}
let nilai = [
[80, 90, 91, 78, 88, 96],
[83, 87, 88, 78, 76, 79],
[91, 100, 94, 70, 100, 98],
[91, 100, 94, 70, 100, 98],
[91, 100, 94, 70, 100, 98],
[91, 100, 94, 78, 88, 98],
[91, 100, 94, 78, 88, 96],
[91, 100, 94, 78, 88, 96],
[100, 100, 100, 94, 80, 75],
[100, 100, 100, 94, 80, 75],
[100, 100, 100, 94, 80, 75],
[100, 100, 100, 94, 80, 75],
[80, 90, 91, 78, 80, 75],
[82, 79, 97, 78, 96, 90],
[82, 79, 97, 78, 96, 90],
[82, 79, 97, 78, 96, 90],
[82, 79, 97, 78, 96, 90],
[80, 90, 97, 78, 96, 90],
[100, 100, 100, 100, 100, 100],
[100, 100, 100, 100, 100, 100],
[100, 100, 100, 100, 100, 100],
[100, 100, 100, 100, 100, 100],
[100, 100, 100, 100, 100, 100],
[100, 100, 100, 100, 100, 100],
[100, 100, 100, 100, 100, 100]
]
nilai.forEach((nilai, index)=>{
    console.log("rata-rata siswa ke-" + (index+1) + "= " + rataRataNilai(nilai) .toFixed(2));
})

//SOAL2
let nilai1 = 99;

let grade = "";
let keterangan = "";

if (nilai1 >= 85) {
  grade = "A";
  keterangan = "Beautiful, Amazing!!";
} else if (nilai1 >= 70) {
  grade = "B";
  keterangan = "Kece dan keren";
} else if (nilai1 >= 60) {
  grade = "C";
  keterangan = "Mayan lah";
} else if (nilai1 <= 60) {
  grade = "D";
  keterangan = "kurang";
} 

console.log(`Nilai kamu: ${grade} (${keterangan})`);

//SOAL3
const siswa = [
    { nama: "Liru", nilai: 90 },
    { nama: "Biru", nilai: 85 },
    { nama: "Ciru", nilai: 78 },
    { nama: "Daru", nilai: 92 },
    { nama: "Eru", nilai: 88 },
    { nama: "Faru", nilai: 76 },
    { nama: "Garu", nilai: 95 },
    { nama: "Haru", nilai: 89 },
    { nama: "Iru", nilai: 84 },
    { nama: "Jaru", nilai: 91 },
    { nama: "Karu", nilai: 73 },
    { nama: "Laru", nilai: 87 },
    { nama: "Maru", nilai: 94 },
    { nama: "Naru", nilai: 80 },
    { nama: "Oru", nilai: 77 },
    { nama: "Paru", nilai: 93 },
    { nama: "Qaru", nilai: 82 },
    { nama: "Raru", nilai: 88 },
]
function cariSiswa(nama) {
    return siswa.find((s) => s.nama === nama);
}
console.log(cariSiswa("Ciru")); 

//SOAL4
function cekReward(nilaiKelas) {
    return nilaiKelas >= 80 ? "Kelas berhak dapat reward" : "Kelas tidak berhak dapat reward";
}
console.log(cekReward(81, 90, 78, 88, 96));

//SOAL5
function rankingSiswa(siswa) {
    return siswa.sort((a, b) => b.nilai - a.nilai);
}
console.log(rankingSiswa(siswa));