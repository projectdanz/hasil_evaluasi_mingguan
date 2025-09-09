console.log("------ NO.1-5 Bu Sari ------")
    // 1-5 : Bu Sari
    const hargaGudeg = 8000
    const hargaAyam = 12000
    const hargaEsTeh = 3000

    let gudegLaku = 15
    let ayamLaku = 10       
    let esTehLaku = 20

    // 1. Hitung total / pendapatan
    function hitungPendapatan(gudegLaku, ayamLaku, esTehLaku) {
        let total = (hargaGudeg * gudegLaku) + (hargaAyam * ayamLaku) + (hargaEsTeh * esTehLaku)
        return total
    }
    hitungPendapatan(15, 10, 20)
    console.log(`Total pendapatan hari ini adalah ${hitungPendapatan(15, 10, 20)} rupiah`)

    // 2. Hitung diskon
    let total = 90000
    function hitungDiskon(total) {
        let diskon = 0
        if (total > 50.000) {
            diskon = total * 0.1
        }
        return total - diskon
    }
    
    console.log(`Harga akhir dari ${total} setelah mendapat diskon sebesar 10% adalah ${hitungDiskon(total)}`)

    // 3. Menu paling laris
    function menuLaris() {
        if (gudegLaku > ayamLaku && gudegLaku > esTehLaku) {
            return "Nasi Gudeg"
        } else if (ayamLaku > gudegLaku && ayamLaku > esTehLaku) {
            return "Ayam Goreng"
        } else {
            return "Es Teh"
        }
    }
    console.log(`Menu paling laris adalah ${menuLaris()}`)

    // 4. Diskon pelanggan tetap
    function diskonPelanggan(total, langganan){
        let diskon = 0
        switch(langganan){
            case "Biasa":
                diskon = 0.05;
                break;
            case "Member":
                diskon = 0.10;
                break;
            case "VIP":
                diskon = 0.15;
                break;
            default:
                diskon = 0
        }
        return total = total - (total * diskon)
    }
    let langganan = "VIP"
    console.log(`Total harga setelah mendapat diskon pelanggan sebesar ${diskonPelanggan(60000, "VIP")} dengan tingkat langganan ${langganan}`)

    // 5. Rata-rata penjualan seminggu terakhir
    function rataRataPenjualan() {
        let hari1 = 145000
        let hari2 = 190000
        let hari3 = 165000
        let hari4 = 180000
        let hari5 = 175000
        let hari6 = 200000
        let hari7 = 150000

        let total = hari1 + hari2 + hari3 + hari4 + hari5 + hari6 + hari7
        let rataRata = total / 7
        return rataRata
    }
    console.log(`Rata-rata hasil penjualan per hari dari seminggu terakhir adalah : ${rataRataPenjualan()}`)

    // 6-10
    console.log("------ NO.6-10 Pak Joko ------")
    // 6. Cek stok
    let stokKaos = 50
    let stokCelana = 30
    let stokJaket = 15

    function kurangiStok(kaosTerjual, celanaTerjual, jaketTerjual) {
        stokKaos -= kaosTerjual
        stokCelana -= celanaTerjual
        stokJaket -= jaketTerjual
    }

    function cekStok() {
        console.log(`Stok kaos: ${stokKaos}`)
        console.log(`Stok celana: ${stokCelana}`)
        console.log(`Stok jaket: ${stokJaket}`)
    }
    kurangiStok(5, 2, 1)
    cekStok()

    // 7. Sistem poin pelanggan
    function hitungPoin(poinSekarang, totalBelanja) {
        let poinBaru = 0
        while (totalBelanja >= 10000) {
            poinBaru++
            totalBelanja -= 10000
        }
        return poinSekarang + poinBaru
        }
    let poin = 0
    poin = hitungPoin(poin, 75000) 
    console.log(`Total poin: ${poin}`)

    // 8. Bonus jika stok < 10
    function cekBonus(namaBarang, stok, harga) {
        if (stok < 10) {
            let bonus = harga * 0.05
            console.log(`Stok ${namaBarang} ${stok}, bonus Rp${bonus}`)
        } else {
            console.log(`Stok ${namaBarang} aman: ${stok}`)
        }
    }
    cekBonus("Kaos", stokKaos, 75000)
    cekBonus("Celana", stokCelana, 150000)
    cekBonus("Jaket", stokJaket, 200000)

    // 9. Peringatan Stok dibawah 20
    function cekPeringatan(namaBarang, stok) {
        if (stok < 20) {
            console.log(`Peringatan! Stok ${namaBarang} tersisa ${stok}, segera restok!`)
        } else {
            console.log(`Stok ${namaBarang} masih aman: ${stok}`)
        }
    }
    cekPeringatan("Kaos", stokKaos)
    cekPeringatan("Celana", stokCelana)
    cekPeringatan("Jaket", stokJaket)

    // 10. Ranking jumlah poin
    function cekLevel(poin) {
        let level = ""
        if (poin < 100) {
            level = "Bronze"
        } else if (poin < 500) {
            level = "Silver"
        } else {
            level = "Gold"
        }
        console.log(`Pelanggan dengan ${poin} poin ada di level: ${level}`)
    }
    cekLevel(250)
    cekLevel(600)
    // 11-15 
    console.log("------ NO.11-15 Bu Rina ------")
    // 11. Hitung rata-rata nilai kelas
    let nilaiSiswa = [80, 90, 75, 60, 88, 95, 70, 65, 100, 85, 77, 83, 92, 58, 69, 72, 81, 79, 66, 74, 89, 91, 64, 73, 87]

    function hitungRataRata(nilai) {
        let total = 0
        for (let i = 0; i < nilai.length; i++) {
            total += nilai[i]
        }
        return total / nilai.length
    }

    let rataRata = hitungRataRata(nilaiSiswa)
    console.log("Rata-rata kelas:", rataRata)

    // 12. Menentukan nilai grade siswa
    let nilai = Number(prompt("Nilai ujianmu berapa?")) 
        if(nilai >= 85 && nilai <= 100){
            console.log("Nilai Ujian : A")
        } else if(nilai >= 70 && nilai < 85){
            console.log("Nilai Ujian : B")
        } else if(nilai >= 60 && nilai < 70){
            console.log("Nilai Ujianmu C")
        } else {
            console.log("Nilai Ujianmu D")
        }
    
    // 13. Simpan data siswa dan pencarian
    let siswa = [
        {nama: "Putri", nilai: 78},
        {nama: "Budi", nilai: 75},
        {nama: "Rudi", nilai: 69},
        {nama: "Luthfi", nilai: 95},
        {nama: "Gina", nilai: 88},
        {nama: "Lina", nilai: 73},
        {nama: "Andi", nilai: 90},
        {nama: "Dahlan", nilai: 85},
        {nama: "Nina", nilai: 80},
        {nama: "Hadi", nilai: 60},
        {nama: "Citra", nilai: 82},
        {nama: "Eka", nilai: 62},
        {nama: "Sari", nilai: 91},
        {nama: "Tono", nilai: 74},
        {nama: "Joko", nilai: 84},
        {nama: "Umi", nilai: 87},
        {nama: "Maman", nilai: 65},
        {nama: "Indah", nilai: 77},
        {nama: "Adella", nilai: 92},
        {nama: "Dina", nilai: 68},
        {nama: "Omar", nilai: 86},
        {nama: "Fajar", nilai: 70},
        {nama: "Wati", nilai: 79},
        {nama: "Yani", nilai: 66},
        {nama: "Kiki", nilai: 83}
    ]

    siswa.sort(function(a, b) {
        return b.nilai - a.nilai
    })

    for (let i = 0; i < siswa.length; i++) {
        console.log(i+1 + ". " + siswa[i].nama + " - " + siswa[i].nilai)
    }

    // 14. Cek reward kelas
    function cekReward(nilai) {
        let rata = hitungRataRata(nilai)
        if (rata >= 80) {
            console.log(`Kelas berhak dapat reward dengan rata-rata: ${rata}`)
        }
         else {
            console.log(`Belum berhak mendapat reward, rata-rata masih: ${rata}`)
        }
        }

    cekReward(nilaiSiswa)

    // 15. Sistem ranking siswa
    siswa.sort(function(a, b) {
        return b.nilai - a.nilai
    })

    for (let i = 0; i < siswa.length; i++) {
        console.log(i+1 + ". " + siswa[i].nama + " - " + siswa[i].nilai)
    }

    // 16-20
    console.log("------ NO.16-20 Mas Budi ------")
    // 16. Hitung pendapatan bengkel
    const hargaService = {
        ringan: 50000,
        sedang: 100000,
        berat: 200000
    }

    const waktuService = {
        ringan: 2,
        sedang: 4,
        berat: 8
    }

    function hitungService(jumlahRingan, jumlahSedang, jumlahBerat) {
        let totalUang = 0
        let totalWaktu = 0

        totalUang += jumlahRingan * hargaService.ringan
        totalUang += jumlahSedang * hargaService.sedang
        totalUang += jumlahBerat * hargaService.berat

        totalWaktu += jumlahRingan * waktuService.ringan
        totalWaktu += jumlahSedang * waktuService.sedang
        totalWaktu += jumlahBerat * waktuService.berat

        console.log("Total pendapatan:", totalUang)
        console.log("Total waktu yang dibutuhkan:", totalWaktu, "jam")
    }

    hitungService(3, 2, 1)

    // 17. Hitung apakah cukup waktu atau tidak
    function cekBisaSelesai(totalWaktu) {
        if (totalWaktu <= 8) {
            console.log("Semuanya bisa selesai hari ini")
        } else {
            console.log("waktu tidak cukup, harus lanjut besok")
        }
    }

    cekBisaSelesai(10)

    // 18. Antrian motor
    let antrian = []

    function tambahAntrian(namaMotor) {
        antrian.push(namaMotor)
        console.log("Nomor antrian:", antrian.length, "-", namaMotor)
    }

    function panggilAntrian() {
        if (antrian.length > 0) {
            let motor = antrian.shift()
            console.log("Motor yang dipanggil:", motor)
        } else {
            console.log("Tidak ada antrian")
        }
    }

    tambahAntrian("Beat")
    tambahAntrian("Vario")
    tambahAntrian("Nmax")

    panggilAntrian()
    panggilAntrian()

    // 19. Tanggal garansi
    function garansi(service, tanggalMasuk) {
        let lama = 0
        switch(service) {
            case "ringan": 
                lama = 7; 
                break
            case "sedang": 
                lama = 14; 
                break
            case "berat": 
                lama = 30; 
                break
        }
        let berakhir = tanggalMasuk + lama
        console.log("Garansi berakhir di hari ke-", berakhir)
    }

    garansi("ringan", 10)
    
    // 20. Komisi Mekanik
    function hitungKomisi(ringan, sedang, berat) {
        let komisi = 0
        komisi += (ringan * hargaService.ringan) * 0.10
        komisi += (sedang * hargaService.sedang) * 0.15
        komisi += (berat * hargaService.berat) * 0.20

        console.log("Total komisi mekanik:", komisi)
    }

    hitungKomisi(3, 2, 1) // contoh: 3 ringan, 2 sedang, 1 berat
