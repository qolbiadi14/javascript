function tampil(b) {
  a = document.querySelector("p").innerText = "belajar event js " + b;
  //   a.innerText = "belajar event js";
  console.log("belajar event js");
}

judul.onclick = function () {
  document.querySelector(".isi").innerHTML = "belajar event js menggunakan id";
};

subbed.onclick = function () {
  document.querySelector(".hep").innerText =
    "belajar event js menggunakan class";
};

foot.onclick = function () {
  document.querySelector("#cont").innerHTML =
    "<a href='#'>ini adalah contoh footer</a>";
};
