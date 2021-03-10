let tblmenu = [
    { idmenu: 16, idkategori: 52, menu: "Sate Kambing", gambar: "FILE499.JPG", harga: 25000 },
    { idmenu: 18, idkategori: 54, menu: "Iced Tea", gambar: "FILE492.JPG", harga: 5000 },
    { idmenu: 19, idkategori: 54, menu: "Mineral Water", gambar: "FILE565.JPG", harga: 20000 },
    { idmenu: 23, idkategori: 52, menu: "Nasi Goreng", gambar: "FILE496.JPG", harga: 12000 },
    { idmenu: 27, idkategori: 52, menu: "Spagheti", gambar: "FILE495.JPG", harga: 25000 },  
    { idmenu: 22, idkategori: 54, menu: "Kopi Mocha", gambar: "FILE486.JPG", harga: 8000 },
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="produk-content">
        <div class="image">
          <img src="images/${kolom.gambar}" alt="" />
        </div>
        <div class="titel">
          <h2>${kolom.menu}</h2>
        </div>
        <div class="harga">
          <h2>${kolom.harga}</h2>
        </div>
        <div class="btn-beli">
          <button data-idmenu="${kolom.idmenu}">Beli</button>
        </div>
    </div>`;
});

let isi = document.querySelector(".produk")
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        //cart.push(btnbeli[index].dataset["idmenu"]);
      tblmenu.filter(function (a) {
        if (a.idmenu == btnbeli[index].dataset["idmenu"] ) {
          cart.push(a);
          console.log(cart);
        }
        })
    };
}

//console.log(cart);

