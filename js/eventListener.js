function coba() {
  a = document.querySelector(".hep");
  a.innerHTML = "belajar eventListener";
  console.log("coba eventkistener");
}

// judul.addEventListener("click", coba);
// judul.onmouseover = coba;

judul.onmouseover = function () {
  console.log("coba function anonymous");
};

subbed.addEventListener("click", coba);

foot.onmouseout = function () {
  console.log("coba onmouseout");
};
