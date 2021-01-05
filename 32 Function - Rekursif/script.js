// Rekursif
// adalah sebuah fungsi yang memanggil dirinya sendiri
// harus berakhir dan menghasilkan nilai

// 1. Input
// 2. Function, didalam function dia akan memanggil dengan mengulang di dalam function itu sendiri
// 3. Output

function tes() {
  return tes();
}
tes();

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Harus ada BASE CASE nya, dimana fungsinya untuk membuat keadaan agar berhenti prosesnya
function cetakAngka(n) {
  // BASE CASE
  if (n === 0) {
    return;
  }
  //   mencetak angka
  console.log(n);
  cetakAngka(n - 1);
}
cetakAngka(10);

// Contohnya adalah Faktorial
function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * faktorial(n - 1);
}

// Semua Looping bisa dibuat rekursif, tapi tidak sebaliknya
// Implementasi Rekursif
// 1. Menggantikan looping
// 2. Fibonacci
// 3. Pencarian dan penelusuran pada struktur data list dan tree
// 4. Bahasa pemrograman yang tidak memiliki pengulangan, Haskell, Erlang, Prolog
// 5. dll
