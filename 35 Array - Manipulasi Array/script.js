// Manipulasi Array

// 1. Menambah isi Array
let arr = ["a", 1, true];
console.log(arr);

let arr1 = [];
arr1[0] = "bayu";
arr1[1] = "bagus";
arr1[2] = "bagas";

// 2. Menghapus isi array
let arr3 = ["bayu", "bagus", "bagas"];
arr3[1] = undefined;

// 3. Menampilkan isi array
let arr4 = ["bayu", "bagus", "bagas"];
for (let i = 0; i < arr4.length; i++) {
  console.log("Mahasiswa ke-" + (i + 1) + ":" + arr4[i]);
}

// Method pada Array
// 1. Join -> menggabungkan isi array
let arr5 = ["Bayu", "Bagus", "Bagas"];
console.log(arr5.join());
// 2. Push & pop -> memasukkan elemen ke dalam array
arr5.push("doddy", "dedi"); // dimasukkan kedalam akhir arraynya
arr5.pop(); // kalo pop untuk menghapus, dan harus satu-satu

// 3. Unshift & shift -> untuk elemen pertama pada array
arr5.unshift("doddy"); //akan masuk diawal, elemen paling awal
arr5.shift(); //menghilangkan elemen pertama
