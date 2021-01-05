// Parameter, variabel yang di tulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil.
// Argument, nilai yang dikirimkan ke parameter saat fungsi dipanggil
function tambah(a, b) {
  // parameter
  return a + b;
}
let coba = tambah(5, 10); // argument

// Contoh
// ada kemungkinan nanti nilai pada argument akan berbeda dengan nilai yang diterima oleh parameter -> masalah SCOPE

function tambah(a, b) {
  return a + b;
}
function kali(a, b) {
  return a * b;
}
let hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);

// Jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan.

// Jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined
function tambah(a, b, c) {
  // nilai parameter c adalah undefined
  return a + b;
}
let coba = tambah(1, 10);

// Arguments, adalah array yang berisi yang dikirimkan saat fungsi dipanggil
function tambah(a, b) {
  return a + b;
}
let coba = tambah(5, 10, 20);
// selain dikirimkan ke parameter, nilai argument akan disimpan di dalam arguments dalam bentuk array

function tambah() {
  return arguments;
}
let coba = tambah(5, 10, 20, "hi", false);
console.log(coba);
// nanti akan disimpan dalam Arguments
