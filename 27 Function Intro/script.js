// Function
// Function adalah kunci utama pada javascript, yang membuat javascript sangat powerfull

// Definisi Function
// 1. sebuah sub-program / sub-routine yang dapat 'dipanggil' di bagian lain pada program
// 2. Merupakan struktur dasar pembentuk dari javascript
// 3. disebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// 4. untuk dapat menggunakannya, kita harus 'membuat' terlebih dahulu function tersebut, lalu 'memanggil'-nya
// 5. termasuk kedalam First-Class Object

// Kenapa function?
// 1. Reusability (DRY: Do Not Repeat Yourself)

// Kategori function?
// 1. Built-in Function (sudah disediakan javascript)
// 2. User-Defined Function

// contoh Built-in
// terkait String -> charAt(), slice(), split(), toString(), toLowerCase(), toUpperCase()
// terkait Math -> sin(), Math.random()

// User Defined Function (buat sendiri)
// 1. menggunakan keyword function
// 2. nama functional (optional)
// 3. Parameter / Argument -> bahan baku yang bisa digunakan di dalam function. Disimpan di dalam kurung (parameter). Boleh ada atau tidak, jika ada boleh lebih dari satu. Dipisahkan oleh koma (,)
// 4. Function body, 'dibungkus' dengan {}
// 5. Dapat mengembalikan nilai (return value) atau tidak

// Membuat user-defined function
// 1. Dengan deklarasi / function declaration
// 2. Dengan ekspresi / function expression

// Function Declaration
function jumlahDuaBilangan(a, b) {
  let total;
  total = a + b;
  return total;
}

// Function Expression, disimpan kedalam variabel
let jumlahDuaBilangan = function (a, b) {
  let total;
  total = a + b;
  return total;
};

// Struktur Function
function jumlahDuaBilangan(a, b) {
  // keyword function, nama function, parameter
  let total; // function body
  total = a + b;
  // nilai kembalian/return value
  return total;
}

// Memanggil / Menjalankan function
alert(jumlahDuaBilangan(1, 2));
alert(jumlahDuaBilangan(25, 30));
