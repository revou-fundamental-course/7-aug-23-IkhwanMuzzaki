function hitungluas() {
  alas = document.getElementById("alas").value;
  tinggi = document.getElementById("tinggi").value;
  luas = 0.5 * alas * tinggi;
  document.getElementById("luas").value = luas;
}
function hitungkeliling() {
  sisi1 = document.getElementById("sisi1").value;
  sisi2 = document.getElementById("sisi2").value;
  sisi3 = document.getElementById("sisi3").value;
  keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
  document.getElementById("keliling").value = keliling;
}
function reset() {
  alas.value = "";
  tinggi.value = "";
  luas.value = "";
  sisi1.value = "";
  sisi2.value = "";
  sisi3.value = "";
  keliling.value = "";
}
