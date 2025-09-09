const hargaGudeg = 8000;
const hargaAyam = 12000;
const hargaEsTeh = 3000;

const penjualanMingguan = [];


document.getElementById('formPemasukan').addEventListener('submit', function(e) {
    e.preventDefault();

    const porsiGudeg = parseInt(document.getElementById('gudeg').value);
    const porsiAyam = parseInt(document.getElementById('ayam').value);
    const gelasEsTeh = parseInt(document.getElementById('esteh').value);

    const totalGudeg = hargaGudeg * porsiGudeg;
    const totalAyam = hargaAyam * porsiAyam;
    const totalEsTeh = hargaEsTeh * gelasEsTeh;
    const totalPemasukan = totalGudeg + totalAyam + totalEsTeh;

    let diskon = 0;
    let totalSetelahDiskon = totalPemasukan;

    if (totalPemasukan > 50000) {
        diskon = totalPemasukan * 0.10;
        totalSetelahDiskon = totalPemasukan - diskon;
    }

    const rows = [
        `<tr>
            <td>1</td>
            <td>Nasi Gudeg</td>
            <td>Rp ${totalGudeg.toLocaleString()}</td>
        </tr>`,
        `<tr>
            <td>2</td>
            <td>Ayam Goreng</td>
            <td>Rp ${totalAyam.toLocaleString()}</td>
        </tr>`,
        `<tr>
            <td>3</td>
            <td>Es Teh</td>
            <td>Rp ${totalEsTeh.toLocaleString()}</td>
        </tr>`
    ];
    document.querySelector("tbody").innerHTML = rows.join("");

    document.getElementById('SBDiskon').textContent = `Rp ${totalPemasukan.toLocaleString()}`;
    document.getElementById('DPDiskon').textContent = `Rp ${diskon.toLocaleString()}`;
    document.getElementById('STDiskon').textContent = `Rp ${totalSetelahDiskon.toLocaleString()}`;

const menu = [
  { nama: "Nasi Gudeg", jumlah: porsiGudeg },
  { nama: "Ayam Goreng", jumlah: porsiAyam },
  { nama: "Es Teh", jumlah: gelasEsTeh }
];

let palingLaris = menu[0];
for (let i = 1; i < menu.length; i++) {
  if (menu[i].jumlah > palingLaris.jumlah) {
    palingLaris = menu[i];
  }
}

document.getElementById('infoLaris').innerHTML = `
  <h3>Menu Paling Laris Hari Ini:</h3>
  <p><strong>${palingLaris.nama}</strong> (${palingLaris.jumlah} terjual)</p>
`;

if (penjualanMingguan.length === 7) penjualanMingguan.shift();
    penjualanMingguan.push({
        gudeg: porsiGudeg,
        ayam: porsiAyam,
        esteh: gelasEsTeh,
        total: totalPemasukan
    });

    let rowsMingguan = "";
    let sumGudeg = 0, sumAyam = 0, sumEsTeh = 0, sumTotal = 0;
    for (let i = 0; i < penjualanMingguan.length; i++) {
        const hari = penjualanMingguan[i];
        rowsMingguan += `
            <tr>
                <td>${i + 1}</td>
                <td>${hari.gudeg}</td>
                <td>${hari.ayam}</td>
                <td>${hari.esteh}</td>
                <td>Rp ${hari.total.toLocaleString()}</td>
            </tr>
        `;
        sumGudeg += hari.gudeg;
        sumAyam += hari.ayam;
        sumEsTeh += hari.esteh;
        sumTotal += hari.total;
    }
    const hariDicatat = penjualanMingguan.length;
    document.querySelector("#tabelMingguan tbody").innerHTML = rowsMingguan;

    document.getElementById('rataGudeg').textContent = (hariDicatat ? (sumGudeg / hariDicatat).toFixed(2) : "0");
    document.getElementById('rataAyam').textContent = (hariDicatat ? (sumAyam / hariDicatat).toFixed(2) : "0");
    document.getElementById('rataEsTeh').textContent = (hariDicatat ? (sumEsTeh / hariDicatat).toFixed(2) : "0");
    document.getElementById('rataTotal').textContent = (hariDicatat ? "Rp " + (sumTotal / hariDicatat).toLocaleString(undefined, {maximumFractionDigits:2}) : "Rp 0");


});

function hitungDiskon() {
      const tipe = document.getElementById("pelanggan").value;
      const totalBelanja = parseFloat(document.getElementById("belanja").value) || 0;

      let diskonPersen = 0;
      if (tipe === "biasa") diskonPersen = 5;
      else if (tipe === "member") diskonPersen = 10;
      else if (tipe === "vip") diskonPersen = 15;

      const diskon = (diskonPersen / 100) * totalBelanja;
      const totalAkhir = totalBelanja - diskon;

      document.getElementById("output").innerHTML = `
        <p><strong>Tipe Pelanggan:</strong> ${tipe.toUpperCase()}</p>
        <p><strong>Total Belanja:</strong> Rp ${totalBelanja.toLocaleString()}</p>
        <p><strong>Diskon (${diskonPersen}%):</strong> Rp ${diskon.toLocaleString()}</p>
        <p><strong>Total Bayar:</strong> Rp ${totalAkhir.toLocaleString()}</p>
      `;
    }


let barang = {
  kaos: { stok: 50, harga: 75000 },
  celana: { stok: 30, harga: 150000 },
  jaket: { stok: 15, harga: 200000 }
};


function cekStok() {
  console.log("=== Daftar Stok Barang ===");
  for (let nama in barang) {
    console.log(
      `${nama.toUpperCase()} | Stok: ${barang[nama].stok} pcs | Harga: Rp ${barang[nama].harga.toLocaleString()}`
    );
  }
  console.log("===========================");
}


function jualBarang(namaBarang, jumlah) {
  if (barang[namaBarang]) {
    if (barang[namaBarang].stok >= jumlah) {
      barang[namaBarang].stok -= jumlah;
      console.log(`Berhasil menjual ${jumlah} ${namaBarang}.`);
    } else {
      console.log(`Stok ${namaBarang} tidak cukup!`);
    }
  } else {
    console.log("Barang tidak ditemukan!");
  }
}


cekStok();              
jualBarang("kaos", 5);  
jualBarang("celana", 2); 
cekStok();              
jualBarang("jaket", 20);
cekStok();
