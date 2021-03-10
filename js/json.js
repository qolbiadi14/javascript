document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    let url = "js/tblmenu.json"
    fetch(url)
  .then(function (res) {
      return res.json();
  })
  .then(function (data) {
      let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>Harga</th><th>Warna</th>";
      data.forEach(element => {
          output += `<tr>
            <td>${element.menu}</td>
            <td>${element.harga}</td>
            <td>${element.warna[0]}</td>
        </tr>`;
      });
      output += "</table>";
      document.querySelector("#isi").innerHTML = output;
  })
}

// let tblmeu = [
//     {
//     "idmenu": 1,
//     "idkategori": 1,
//     "menu": "Apel Malang",
//     "harga": 5000,
//     "warna": ["merah", "kuning", "hijau"],
//     "stok": true,
//     "keterangan" : null
//     },
//     {
//     "idmenu": 1,
//     "idkategori": 1,
//     "menu": "Pisang",
//     "harga": 10000,
//     "warna": ["kuning", "hijau"],
//     "stok": true,
//     "keterangan" : null
// }
// ]

// console.log(tblmenu(0).menu);

