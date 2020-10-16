let a = 0;

naik.onclick = function () {
  a++;
  document.querySelector("h1").innerHTML = a;
};

turun.onclick = function () {
  a--;
  document.querySelector("h1").innerHTML = a;
};
