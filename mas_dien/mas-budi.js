// soal no 1
// Data service
let servicee = {
    ringan: { harga: 50000, waktu: 2 },
    sedang: { harga: 100000, waktu: 4 },
    berat:  { harga: 200000, waktu: 8 }
};

// Jumlah motor yang masuk hari ini
let motorHariIni = [
    "ringan", "sedang", "ringan", "berat", "sedang"
];

function hitungPendapatan(motor) {
    let totalUang = 0;
    let totalWaktu = 0;

    for (let i = 0; i < motor.length; i++) {
        let jenis = motor[i];
        totalUang += servicee[jenis].harga;
        totalWaktu += servicee[jenis].waktu;
    }

    console.log("Total pendapatan hari ini: Rp" + totalUang);
    console.log("Total waktu yang dibutuhkan: " + totalWaktu + " jam");
}

hitungPendapatan(motorHariIni);

// soal no 2
function cekSelesaiHariIni(motor) {
    let totalWaktu = 0;
    for (let i = 0; i < motor.length; i++) {
        totalWaktu += servicee[motor[i]].waktu;
    }

    if (totalWaktu <= 8) {
        console.log(" Semua motor bisa selesai hari ini. Total waktu: " + totalWaktu + " jam");
    } else {
        console.log(" Tidak cukup waktu! Total: " + totalWaktu + " jam, butuh besok.");
    }
}

cekSelesaiHariIni(motorHariIni);

// soal no 3
let antrian = [];

// Tambahkan motor ke antrian
function tambahAntrian(namaPemilik, jenisService) {
    let nomor = antrian.length + 1;
    antrian.push({ nomor, namaPemilik, jenisService });
    console.log("Motor " + namaPemilik + " masuk antrian no " + nomor);
}

// Tampilkan antrian
function tampilAntrian() {
    console.log("=== Antrian Bengkel ===");
    antrian.forEach(item => {
        console.log(item.nomor + ". " + item.namaPemilik + " - " + item.jenisService);
    });
}

tambahAntrian("Andi", "ringan");
tambahAntrian("Budi", "berat");
tambahAntrian("Citra", "sedang");
tampilAntrian();

// soal no 4
function garansiService(jenis, tanggalService) {
    let garansiHari = 0;

    if (jenis === "ringan") garansiHari = 7;
    else if (jenis === "sedang") garansiHari = 14;
    else if (jenis === "berat") garansiHari = 30;

    let tanggalAwal = new Date(tanggalService);
    let tanggalAkhir = new Date(tanggalAwal);
    tanggalAkhir.setDate(tanggalAwal.getDate() + garansiHari);

    console.log("Service " + jenis + " pada " + tanggalAwal.toDateString());
    console.log("Garansi berakhir: " + tanggalAkhir.toDateString());
}

garansiService("berat", "2025-09-08");
garansiService("ringan", "2025-09-08");

// soal no 5
// Data service
let service = {
    ringan: { harga: 50000, komisi: 0.10 },
    sedang: { harga: 100000, komisi: 0.15 },
    berat:  { harga: 200000, komisi: 0.20 }
};

// Daftar pekerjaan mekanik hari ini
let pekerjaanHariIni = [
    { mekanik: "Andi", jenis: "ringan" },
    { mekanik: "Budi", jenis: "sedang" },
    { mekanik: "Andi", jenis: "berat" },
    { mekanik: "Citra", jenis: "sedang" },
    { mekanik: "Andi", jenis: "ringan" }
];

function hitungKomisiPerMekanik(pekerjaan) {
    let hasil = {};

    for (let i = 0; i < pekerjaan.length; i++) {
        let { mekanik, jenis } = pekerjaan[i];
        let harga = service[jenis].harga;
        let persen = service[jenis].komisi;
        let komisi = harga * persen;

        if (!hasil[mekanik]) {
            hasil[mekanik] = 0;
        }
        hasil[mekanik] += komisi;
    }

    console.log("=== Komisi Mekanik Hari Ini ===");
    for (let nama in hasil) {
        console.log(nama + " → Rp" + hasil[nama]);
    }
}


hitungKomisiPerMekanik(pekerjaanHariIni);


