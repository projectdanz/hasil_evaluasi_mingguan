console.error("Soal 11-15: Bu Rina - Guru Kelas 5");


//11.
function hitungNilai(...nilai) {

    const total = nilai.reduce((sum, n) => sum + n, 0);
    const rata = total / nilai.length;
    console.log("nilai rata rata siswa adalah " + rata);

  return rata
    
}
hitungNilai(70, 60, 50, 40, 80, 90, 100, 75, 60, 67, 87, 98, 97, 78, 89, 90, 90, 65, 89, 55, 100, 99, 34, 76, 61); 


//12.


function GradeNilai(Nilai) {
    if (Nilai < 60) {
        console.log("kamu dapat grade D");
    }else if (Nilai < 70) {
        console.log("kamu dapat grade C");
    }else if (Nilai < 85) {
        console.log("kamu dapat grade B");
    }else{
        console.log("selamat!, kamu dapat grade A!")
    }
}
GradeNilai(56);
GradeNilai(65);
GradeNilai(71);
GradeNilai(98);


//13.
const Siswa = [
  { nama: "rehan", nilai: 80 },
  { nama: "zaki", nilai: 95 },
  { nama: "baja", nilai: 100 },
  { nama: "ayash", nilai: 78}
];
//tinggal tambah murid lain
console.log(Siswa[0]);


//14.
function hitungRataRata(...nilai) {

    const total = nilai.reduce((sum, n) => sum + n, 0);
    const rata = total / nilai.length;
    console.log("nilai rata rata siswa adalah " + rata);
    if (rata > 80){
        console.log("dapat reward!");
    }else{
        console.log("tidak dapat reward");
    }
  return rata
}
hitungRataRata(100,98,89,90,87);
hitungRataRata(74,79,65,71,79);


//15.
const siswa = [
  { nama: "Budi", nilai: 80 },
  { nama: "Ani", nilai: 95 },
  { nama: "Doni", nilai: 70 },
  { nama: "Siti", nilai: 88 },
  { nama: "Andi", nilai: 92 },
]
 siswa.sort((a, b) => b.nilai - a.nilai);
console.table(siswa);

