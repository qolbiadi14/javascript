function coba() {
    let belajar = "saya belajar javascript";
    console.log(belajar);
    console.log("Javascript is easy");
}

function persegi(lebar,panjang) {
    luas = panjang * lebar;
    console.log(luas);
}

function out() {
    return console.log("output function");
}

function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}

const tinggi = 5;
let tabung = lingkaran(10) * tinggi;

function lewat(a) {
    return a;
}

//console.log(tabung);

console.log(lewat(10));

function vkubus(s) {
    vol = s * s * s;
    return vol;
}

console.log(vkubus(5));

function vbalok(p,l,t) {
    vol = p * l * t;
    vbalok(4, 5, 6);
    return vol;
}

console.log(vol);

