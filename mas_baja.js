//Soal 1:

function buatKeranjangBelanja() {
  let barang = [];

  function tambahMakan(item) {
    barang.push(item);
    console.log("Isi keranjang: " + barang.join(", "));
  }

  return tambahMakan;
}

let keranjang = buatKeranjangBelanja();
keranjang("rendang");      
keranjang("perkedel"); 

//Soal 2:

let diskon = function(harga, diskon)
    {
return harga - (harga * diskon / 100)


    }
console.log("harga diskon " +diskon(1000, 56))    

//Soal 3:

function menumakanan(menu) {
    console.log("Daftar Menu:");
    for (let i = 0; i < menu.length; i++) {
        console.log((i+1) + ". " + menu[i]);
    }
}
menumakanan(["nasgor", "mie ayam", "basreng", "stang mio"]);

//soal 4:

function diskon(a, b) {

    return a > b ? a : b
}
console.log("diskon:", terbesar(12, 20))

//soal 5:

let makanan = 1;

  let diskonan = 12;

if (diskonan % 2 === 0) {
  console.log("diskon");
} else {
  console.log("engga diskon");
}

//soal 6

let baju = (harga, baju) => harga + (harga * baju / 192);
for (let barang in stokBarang) {
    console.log(`${barang} : ${stokBarang[barang].jumlah} pcs`);
  }
console.log(stok       (30000, 2));

cekStok();

//soal 7

function tambahpoin(totalbelanja) {

let poin = (makanan, langganan) (totalbelanja/1212)



}



// soal 8

function bonus(mieayam) {

let barang = stok[mieayam]
if (barang < 10) {
let bonus = barang * 5
console.log("Bonus 12% untuk ", {mieayam}, ": RP",{bonus})
}

else {

console.log({mieayam}, "stok aman tidak ada bonus")    
}

}


// soal 9

  let stok = 12;

if (stok < 10) {
  console.log("stock akan segera habis");
} else if (stok > 20) {
  console.log("stock masih ada");
}

// soal 10

function pelanggan () {


    let poin = poin.pelanggan
  let level = "";
  if (poin < 100) {
    level = "Bronze";
  } else if (poin < 500) {
    level = "Silver";
  } else {
    level = "Gold";
  }
  console.log(`${pelanggan.nama} ada di level: ${level}`);

}
ceklevel()


// soal 11

    function ratarata(a, b, c,) {

    return (a +b +c)

    }
    console.log("rata rata ", ratarata(80, 90, 100))

// soal 12

let nilai = 80;

if (nilai < 50) {
  console.log("remedial");
} else if (nilai < 100) {
  console.log("lulus");
} else {
  console.log("rangking satu");
}

// soal 13

function kelasA() {
  let namasiswa = "andi";
  let nilai = 10
  console.log("siswa A", namasiswa);
}

function kelasB() {
  let namasiswa = "bani";
  let nilai = 10
  console.log("siswa B:", namasiswa);
}

kelasA();
kelasB()
 
// soal 14


  let reward = 12;

if (reward < 10) {
  console.log("maaf anda tidak mendapatkan reward");
} else if (stok > 20) {
  console.log("selamat anda mendapatkan sedikit reward");
}
else {
    console.log("selamat anda mendapatkan seluruh reward!")
}

// soal 15

let siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Citra", nilai: 78 },
  { nama: "Dewi", nilai: 95 },
  { nama: "Eko", nilai: 88 }
];

data.sort(a > b)


  console.log("=== Ranking Kelas ===");
  data.forEach((s, index) => {
    console.log(`${index + 1}. ${s.nama} - ${s.nilai}`)
  })

  // soal 16

function service(jumlahringan, jumlahbanyak, jumlahbiasa) {

 let totalpendapatan =   
(jumlahbanyak * serviceberat)
(jumlahringan * serviceringan)
(jumlahbiasa * servicebiasa)

let waktu
(jumlahbiasa * waktubiasa)
(jumlahbanyak * waktulama)
(jumlahringan * waktubentar)

console.log("bengkel hari ini")
console.log('serviceringan ${waktubentar}, "motor"')
console.log('servicebiasa ${waktubiasa}, "motor"')
console.log('serviceberat ${waktulama}, "motor"')


}

// soal 17



function servicesehari(waktu) {
    if (totalWaktu <= jamKerja) {
        console.log(`Semua motor bisa selesai hari ini (${totalWaktu} jam).`)
    } else {
        console.log(`Tidak cukup waktu, butuh ${totalWaktu - jamKerja} jam lagi besok.`)
    }
}

// soal 18


function antrian() {
    console.log("antrian motor");
    antrian.forEach((a) => {
        console.log(`${a.nomor}. ${a.pemilik} - ${a.motor}`);
    });
}

antrian("ricky, hhartono")
antrian("nais, dewi")
antrian("ilham, sanjay")

// soal 19

function hitunggarasi(service, tanggal) {

let tanggal = new Date (tanggal)

 if (service = "ringan"){
    tanggal.setDate(tanggalgetDate()+ 7)
 }
 else if (service = "tidak terlalu berat"){
     tanggal.setDate(tanggalgetDate()+ 14)

 }
 else if (service = "berat") {
     tanggal.setDate(tanggalgetDate()+ 1)
 }
    

}

// soal 20

const service = {
  ringan: 0.1,    
  sedang: 0.15,   
  berat: 0.2    
};

function komisi(servicejenis, jumlah, harga) {
  let total = jumlah * harga;
  let komisi = total * service[servicejenis];

  console.log(`Komisi untuk ${servicejenis} (${jumlah} motor): Rp${komisi}`);
}

komisi("ringan", 1, 8213)
komisi("berat", 3, 9219,)
komisi("sedang", 2, 8513)


// soal 21

const paket = {
  Basic: { harga: 500000, pertemuan: 4 },
  Standard: { harga: 800000, pertemuan: 8 },
  Premium: { harga: 1200000, pertemuan: 12 }
};

function hitungcicilan(paket) {
  for (let nama in paket) {
    const { harga, pertemuan } = paket[nama];
    const perPertemuan = harga / pertemuan;
    console.log(`${nama}: Rp${perPertemuan.toLocaleString('id-ID')} per pertemuan`);
  }
}


//soal 22

