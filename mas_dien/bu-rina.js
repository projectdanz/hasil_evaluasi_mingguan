// soal no 1
// Data nilai siswa
let nilaiSiswa = [90, 85, 70, 60, 88, 76, 95, 80, 67, 72,
                  85, 90, 78, 82, 91, 64, 55, 73, 88, 92,
                  68, 79, 84, 77, 81];

function hitungRataRata(nilai) {
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }
    return total / nilai.length;
}

let rataRataKelas = hitungRataRata(nilaiSiswa);
console.log("Rata-rata nilai kelas: " + rataRataKelas);

// soal no 2

function tentukanGrade(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else {
        return "D";
    }
}

console.log("Nilai 90 → Grade: " + tentukanGrade(90));
console.log("Nilai 75 → Grade: " + tentukanGrade(75));
console.log("Nilai 55 → Grade: " + tentukanGrade(55));

// soal no 3
// Data siswa dengan nama & nilai
let dataSiswa = [
    { nama: "Andi", nilai: 90 },
    { nama: "Budi", nilai: 75 },
    { nama: "Citra", nilai: 88 },
    { nama: "Dewi", nilai: 60 },
    { nama: "Eko", nilai: 95 }
    // ... bisa terus di lanjutkan cmn saya males jadi segini saja
];

function cariSiswa(nama) {
    for (let i = 0; i < dataSiswa.length; i++) {
        if (dataSiswa[i].nama === nama) {
            return dataSiswa[i];
        }
    }
    return null;
}

// cari niai siapa yg paling tinggi
console.log(cariSiswa("Citra"));  
console.log(cariSiswa("Budi"));   

// soal no 4
function cekReward(nilai) {
    let rata2 = hitungRataRata(nilai);
    if (rata2 >= 80) {
        console.log(" Kelas berhak dapat reward! Rata-rata: " + rata2);
    } else {
        console.log(" Belum dapat reward. Rata-rata: " + rata2);
    }
}

cekReward(nilaiSiswa);

// soal no 5
 function rankingKelas(data) {
    // Urutan dari nilang yg tertinggi sampai terendah
    let ranking = [...data].sort((a, b) => b.nilai - a.nilai);

    console.log("=== Ranking Kelas ===");
    for (let i = 0; i < ranking.length; i++) {
        console.log((i + 1) + ". " + ranking[i].nama + " - " + ranking[i].nilai);
    }
}

rankingKelas(dataSiswa);
