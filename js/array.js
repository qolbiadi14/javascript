let coba = function () {
    return "coba function"
}

let buah = ["mangga", "jeruk", "apel", 10, coba(), (tes = () => "Hasil return dari arrow function"), function nama() {return "smk revit"}];
console.log(buah);
console.log(buah[1]);

for (let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());