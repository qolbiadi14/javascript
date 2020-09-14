let mulai = 1;
let selesai = 10;
while (mulai <= selesai) {
    console.log(mulai);
    mulai++;
}

let start = 100;
let finish = 110;
do {
    console.log(start);
    start++;
} while (start <= finish);

let awal = 1001;
let akhir = 1010;

for (awal; awal <= akhir; awal++) {
    console.log(awal);
}

console.log("------------------------");

for (let i = 1; i < 10; i = i+2) {
    console.log(i); 
}

console.log("------------------------");

for (let a = 0; a < 5; a++) {
    console.log("*");
    for (let b = 0; b < a; b++) {
        console.log("#");
    }
}