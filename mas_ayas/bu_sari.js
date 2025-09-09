//SOAL 1
function hitungTotal (gudeg, ayam, esTeh) {
    const hargaGudeg = 8000
    const hargaAyam = 12000
    const hargaEsteh = 3000
    const total = gudeg * hargaGudeg + ayam * hargaAyam + esTeh * hargaEsteh
    return total
}
  console.log("Total belanjaku RP." + hitungTotal(15, 10, 15))

//SOAL 2
function hitungTotalDenganDiskon (gudeg, ayam, esTeh) {
    let total = hitungTotal(gudeg, ayam, esTeh)
    if (total > 50000) {
        let diskon = total * 0.1
        total -= diskon
        console.log ("Total setelah diskon 10% = " + total)
  } else {
    console.log("Total belanja ga di kasih diskon = " + total)
  }
}
hitungTotalDenganDiskon(15, 10, 20)

//SOAL 3
function menuTerlaris (gudeg, ayam, esTeh) {
    const data = {
        "Nasi gudeg": gudeg,
        "Ayam goreng": ayam,
        "Es teh": esTeh
        
    }
    let maxMenu = Object.keys(data)[0]
    for (let menu in data) {
        if (data[menu] > data[maxMenu]) {
            maxMenu = menu
        }
    }
    console.log("Menu paling enak dan terlaris hari ini cuma " + maxMenu + " dengan penjualan sebanyak " + data[maxMenu] + " porsi" )
}
menuTerlaris(15, 10, 20)

//SOAL 4
function hitungDiskonLevel (totalBelanja, level) {
    let diskon = 0
    if (level === "biasa") diskon = 0.05
    else if (level === "Member") diskon = 0.1
    else if (level === "VIP") diskon = 0.15

    let totalSetelahDiskon = totalBelanja - totalBelanja * diskon
        console.log("diskon yang didapat: Rp." + (totalBelanja * diskon))

}
hitungDiskonLevel(12500000, "biasa")
hitungDiskonLevel(12500000, "Member")
hitungDiskonLevel(12500000, "VIP")

//SOAL 5
function rataRata(a, b, c, d, e, f, g) {
      return (a + b + c + d + e + f + g) / 7;
    }
    console.log( "Rata-rata penjualan= "+ rataRata(1500000, 2000000, 1750000, 1800000, 1650000, 1900000, 1450000));



