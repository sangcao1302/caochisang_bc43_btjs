var nhapmang = document.getElementById("btn-nhapmang");
var hienthi = document.getElementById("display");
var arr = [];
nhapmang.onclick = function () {
  var n = parseInt(document.getElementById("sonhapvao").value);
  arr.push(n);
  hienthi.innerHTML = "[" + arr + "]";
};

var tong = document.getElementById("btn-soduong");
var tongduong = document.getElementById("tongsoduong");
tong.onclick = function () {
  tong = 0;
  for (var i = 0; i < arr.length; i++) {
    tong = tong + arr[i];
  }
  tongduong.innerHTML = tong;
};
var dem = document.getElementById("btn-demsoduong");
var soduongtrongmang = document.getElementById("soduong");
dem.onclick = function () {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count = count + 1;
    }
  }
  soduongtrongmang.innerHTML = count;
};

var sonhonhat = document.getElementById("btn-nhonhat");
var sonhonhattronmang = document.getElementById("nhonhat");
sonhonhat.onclick = function () {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    sonhonhattronmang.innerHTML = min;
  }
};
var soduongnhonhat = document.getElementById("btn-duongnhonhat");
var soduongnhonhattronmang = document.getElementById("soduongnhonhat");
soduongnhonhat.onclick = function () {
  var min = -1;
  for (var i = 0; i < arr.length; i++) {
    if ((min == -1 || min > arr[i]) && arr[i] > 0) {
      min = arr[i];
    }
    soduongnhonhattronmang.innerHTML = min;
  }
};
var sochancuoicung = document.getElementById("btn-sochancuoicung");
var hienthisochangcuoicung = document.getElementById("sochancuoicung");
sochancuoicung.onclick = function () {
  for (var i = 1; i < arr.length; i++) {
    var hienthi = "";
    if (arr[i] % 2 == 0) {
      hienthi = hienthi + arr[i];
    }
    hienthisochangcuoicung.innerHTML = hienthi;
  }
};

var doicho = document.getElementById("btn-doicho");
var mangsaukhidoicho = document.getElementById("doicho");
doicho.onclick = function () {
  var vitri1 = document.getElementById("doichohaiso1").value;
  var vitri2 = document.getElementById("doichohaiso2").value;

  var temp = arr[vitri1];
  arr[vitri1] = arr[vitri2];
  arr[vitri2] = temp;

  mangsaukhidoicho.innerHTML = arr;
};

var sapxep = document.getElementById("sapxep");
var hienthisapxep = document.getElementById("sapxepnho");
sapxep.onclick = function () {
  arr.sort(function (a, b) {
    return a - b;
  });
  hienthisapxep.innerHTML = arr;
};
