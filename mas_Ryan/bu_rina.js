// let nilaiSiswa = [80, 90, 75, 85, 70, 88, 92, 78, 84, 76, 91, 89, 73, 82, 77, 86, 79, 93, 74, 81, 87, 69, 90, 83, 85];
// let totalNilai = nilaiSiswa.reduce((jumlah, nilai) => jumlah + nilai, 0);
// let rataRata = totalNilai / nilaiSiswa.length;

// function grade(nilai) {
//     if (nilai > 90) return "A";
//     else if (nilai > 80) return "B";
//     else if (nilai > 70) return "C";
//     else if (nilai > 60) return "D";
//     else return "E";
// }
// console.log("Rata-rata nilai siswa adalah: " + rataRata);
// console.log("grade rata-rata: " + grade(rataRata));

const siswa = [
    {
        nama : "asep", 
        nilai: 80,
    },
     {
        nama : "putri", 
        nilai: 90,
    },
     {
        nama : "putra", 
        nilai: 75,
    },
     {
        nama : "dudung", 
        nilai: 85,
    },
     {
        nama : "nanang", 
        nilai: 70,
    },
     {
        nama : "ucup", 
        nilai: 88,
    },
     {
        nama : "dadang", 
        nilai: 84,
    },
     {
        nama : "nana", 
        nilai: 78,
    },
     {
        nama : "anuy", 
        nilai: 92,
    },
     {
        nama : "ujang", 
        nilai: 77,
    },
     {
        nama : "bangbang", 
        nilai: 82,
    },
     {
        nama : "nopi", 
        nilai: 78,
    },
    {
        nama : "hanhan", 
        nilai: 87,
    },
    {
        nama : "gugum", 
        nilai: 66,
    },
    {
        nama : "nila", 
        nilai: 89,
    },
    {
        nama : "nisa", 
        nilai: 91,
    },
    {
        nama : "bubun", 
        nilai: 69,
    },
    {
        nama : "suparman", 
        nilai: 85,
    },
    {
        nama : "sopian", 
        nilai: 76,
    },
    {
        nama : "jayaraga", 
        nilai: 88,
    },
    {
        nama : "galih", 
        nilai: 84,
    },
    {
        nama : "hena", 
        nilai: 98,
    },
    {
        nama : "sangkuriang", 
        nilai: 73,
    },
    {
        nama : "sauriah", 
        nilai: 65,
    },
    {
        nama : "traveler", 
        nilai: 86,
    },
    
   
]
let totalNilai = Siswa.reduce((jumlah, nilai) => jumlah + nilai, 0);
let rataRata = totalNilai / siswa.length;

function getgrade(nilai) {
    if (nilai > 90) return "A";
    else if (nilai > 80) return "B";
    else if (nilai > 70) return "C";
    else if (nilai > 60) return "D";
    else return "E";
}
console.log("Rata-rata nilai siswa adalah: " + rataRata);
console.log("grade rata-rata: " + getgrade(rataRata));

function cariSiswa(namaCari){
    let hasil = dataSiswa.find(siswa => siswa.nama.toLowerCase() === namaCari.toLowerCase());
    if (hasil) {
        
    }
}