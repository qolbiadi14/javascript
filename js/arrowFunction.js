let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
}
fungsi("Qolbi");

let contoh = (nama) => {
    console.log("Belajar Function " + nama);
}
contoh("Beechan");

let tambah = function (a, b) {
    return a + b;
}
console.log(tambah(2, 3));

let plus = (a, b) => a + b;
console.log(plus(2, 3));

let hasil = a => a * 2;
console.log(hasil(4));

let lagi = () => console.log("coba lagi");
lagi();

let belajar = () => {
    console.log("Baris satu");
    console.log("Baris dua");
    console.log("Baris tiga");
    console.log("Baris selanjutnya");
}

belajar();

let nilai = 9;
let uji = (nilai < 7) ? () => predikat = "gagal" : () => predikat = "LULUS";
console.log(uji());

let ask = (question, yes, no) => (confirm(question) ? yes() : no());
ask(
  "Do you agree?",
  () => console.log("You agreed"),
  () => console.log("You interrupted execution")
);