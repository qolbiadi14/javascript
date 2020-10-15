let objek = {

    nama: "Qolbi Adi",
    telp: 12345678,
    
    buah: ['apel', "jeruk", "mangga"],
    
    coba: function () {
        return "coba function dalam objek";
    },

    boleh: true,
    "tulis aja": 1234,

    2468: "genap",
    13579: "ganjil",
    false: false,

    func: function name(a) {
        a = 1;
        return a
    }
};

console.log(objek);

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[2]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"]);
console.log(objek[13579]);
console.log(objek[2468]);
console.log(objek.false);
console.log(objek.func());