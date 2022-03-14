// Bai 1
// tạo ra 3 biến số a,b,c
// so sánh 3 số với nhau
// xuất ra kết quả

document.getElementById("btnSapXep").onclick = function () {
  var a = document.getElementById("txtSoThuNhat").value;
  var b = document.getElementById("txtSoThuHai").value;
  var c = document.getElementById("txtSoThuBa").value;
  var ketqua;
  var thongbaoketqua;
  if (a > b && a > c && b > c) {
    ketqua = a + ">" + b + ">" + c;
    console.log();
  } else if (a > b && a > c && b < c) {
    ketqua = a + ">" + c + ">" + b;
    console.log(a + ">" + c + ">" + b);
  } else if (a < b && b > c && a > c) {
    ketqua = b + ">" + a + ">" + c;

    console.log(b + ">" + a + ">" + c);
  } else if (a < b && b > c && a < c) {
    ketqua = b + ">" + c + ">" + a;

    console.log(b + ">" + c + ">" + a);
  } else if (c > a && c > b && b > a) {
    ketqua = c + ">" + b + ">" + a;

    console.log(c + ">" + b + ">" + a);
  } else if (c > a && c > b && b < a) {
    ketqua = c + ">" + a + ">" + b;

    console.log(c + ">" + a + ">" + b);
  }
  document.getElementById("footerKetQua").innerHTML = ketqua;
  document.getElementById("footerKetQua").classList = "showInfo";
};

// baitap2
// b1 : tao ra cac bien bo , me ,anh trai, em gai
//b2 : kiem tra ai dang su dung
// b3: xuat ra ket qua

document.getElementById("btnKiemTra").onclick = function () {
  var kiemtra = document.getElementById("txtUser").value;
  var b;
  var m;
  var a;
  var e;
  var thongbao = kiemtra + " " + "dang su dung";
  if (kiemtra == b) {
    console.log(b);
    kiemtra = "Bo";
    return kiemtra;
  } else if (kiemtra == m) {
    return thongbao;
  } else if (kiemtra == a) {
    return thongbao;
  } else if (kiemtra == e) {
    return thongbao;
  }
  document.getElementById("footerUser").innerHTML = thongbao;
  document.getElementById("footerUser").classList = "showInfo";
};

// bai tap 3
// tao ra 3 bien so a,b,c
// kiem tra tinh chan le cua 3 bien vua tao
// xuat ra ket qua

document.getElementById("btnChanLe").onclick = function () {
  var a = parseInt(document.getElementById("txtNumber1").value);
  var b = parseInt(document.getElementById("txtNumber2").value);
  var c = parseInt(document.getElementById("txtNumber3").value);
  var soChan = 0;
  var soLe = 0;

  if (a % 2 == 0) {
    soChan += 1;
  }
  if (b % 2 == 0) {
    soChan += 1;
  }
  if (c % 2 == 0) {
    soChan += 1;
  }
  soLe = 3 - soChan;
  console.log(soChan);
  console.log(soLe);
  var soluong = "co" + " " + soChan +" so chan"+ " va" + " " + soLe + " so le";

  document.getElementById("footerChanLe").innerHTML = soluong;
  document.getElementById("footerChanLe").classList = "showInfo";

};

// Bai tap 4
// b1 : tao cac bien 3 canh cua tam giac
// b2: kiem tra cac canh cua tam giac do
// • Ví dụ: a=2, b=2, c=1 => Tam giác cân
// • a = 3, b=3 c=3 => Tam giác đều
// • a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)
// b3: xuat ra ket qua

document.getElementById("btnTamGiac").onclick = function () {
  var a = document.getElementById("txtCanhThuNhat").value;
  var b = document.getElementById("txtCanhThuHai").value;
  var c = document.getElementById("txtCanhThuBa").value;
  var triangle;
  console.log(a, b, c);
  if (a == b || a == c || b == c) {
    console.log("tam giac can");
    triangle = "Tam giac can";
  } else if (a == b && a == c && b == c) {
    console.log("tam giac deu");
    triangle = "Tam giac deu";
  } else if (
    c * c == a * a + b * b ||
    b * b == c * c + a * a ||
    a * a == b * b + c * c
  ) {
    console.log("tam giac vuong");
    triangle = "Tam giac vuong";
  } else {
    triangle = "Tam giac binh thuong";
  }
  document.getElementById("footerTamGiac").innerHTML = triangle;
  document.getElementById("footerTamGiac").classList = "showInfo";
};
