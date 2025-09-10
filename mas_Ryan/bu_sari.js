    const hargaGudeg = 8000;
    const hargaAyam  = 12000;
    const hargaEsTeh = 3000;
    
    let terjualGudeg = 15;
    let terjualAyam = 10;
    let terjualEsTeh = 20;

    let totalHarini = (hargaGudeg * terjualGudeg) + (hargaAyam * terjualAyam) + (hargaEsTeh * terjualEsTeh);

    console.log("penjualan hari ini Rp" + totalHarini);

    let diskon = totalHarini

    if (totalHarini > 50000){
        diskon = totalHarini -(totalHarini * 0.1);
    }
    console.log("total setelah diskon " + diskon )

    let penjualan = {
        "Nasi Gudeg": terjualGudeg,
        "Ayam Goreng": terjualAyam,
        "Es Teh": terjualEsTeh
    };

    
    let menuTerlaris = Object.keys(penjualan).reduce((a, b) => 
        penjualan[a] > penjualan[b] ? a : b
    );

    console.log("Menu paling laris hari ini: " + menuTerlaris);

    function hitungDiskon (total, level){
        let diskon = 0;
        if (level === "biasa") diskon = 0.5;
        else if (level === "member") diskon = 0.1;
        else if (level === "VIP") diskon = 0.15;

        return total - (total * diskon);
    }
    let pelangganVIP = hitungDiskon(totalHarini, "VIP");
    console.log("Total untuk pelanggan VIP: RP" + pelangganVIP)
        
    
    let penjualanMinggu = [150000, 200000, 175000, 180000, 165000, 190000, 145000];

    let totalMinggu = penjualanMinggu.reduce((a, b) => a + b, 0);

    let rataRata = totalMinggu / penjualanMinggu.length;
    console.log("rata-rata penjualan seminggu: Rp" + rataRata);



