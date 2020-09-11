if (true) {
    console.log("Dijakankan jika benar");
} else {
    console.log("Dijalankan jika salah");
}

let nilai = 100;
let standar = 60;
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai salah";

if (nilai <= batasatas || nilai >= batasbawah) {
    if (nilai >= standar) {
      console.log(baik);
    } else {
      console.log(gagal);
    }
} else {
    console.log(peringatan);
}

let a = -1;
let b = 0;
let c = 100;


if (a <= c && a >= b) {
    console.log("Benar");
} else {
    console.log("Salah");
    a++;
    if (a <= c && a >= b) {
        console.log("Benar");
    } else {
        console.log("Salah");
        a++;
    }
}

