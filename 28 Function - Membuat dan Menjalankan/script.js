// Digambarkan diagram blok terdiri dari: input, function, output
// INPUT, berfungsi sebagai masukkan bahan/material ke dalam function
// FUNCTION, berfungsi untuk memproses/melakukan sesuatu terhadap bahan/material tadi yang diinputkan
// OUTPUT, menghasilkan sesuatu

// Function yang baik hanya mengerjakan 1 hal saja (spesifik)

// keyword function, untuk memberitahu interpreter javascript bahwa kita akan mulai menulis sebuah fungsi
// bungkus function dengan kurung kurawal, untuk menandai awal dan akhir sebuah fungsi
// beri nama function yang menjelaskan apa yang akan dilakukan
// selalu tuliskan kurung untuk menyimpan parameter/argumen/bahan baku untuk nantinya digunakan dalam function
// didalam kurung diisi parameter/argumen
// data yang dikirim dari luar saat pemanggilan function, untuk digunakan di dalam function
// anggap sebagai variabel khusus untuk function
// optional, boleh ada atau tidak
// sebuah function biasanya mengembalikan sebuah nilai
// menggunakan keyword return, lalu diikuti dengan nilai kembaliannya
// kegunaannya adalah untuk memberitahi interpreter bahwa kita telah selesai mengerjakan sesuatu dan 'inilah' hasilnya
function jumlahVolumeDuaKubus(a, b) {
  // 1. Ketahui sisi masing-masing kubus
  let total, volumeA, volumeB;
  // 2. Hitung volume masing-masing kubus
  volumeA = a * a * a;
  volumeB = b * b * b;
  // 3. Jumlahkan hasilnya
  total = volumeA + volumeB;
  // 4. Kembalikan nilai jawabannya
  return total;
}
// cara menjalankan
jumlahVolumeDuaKubus(8, 3);
// cara menampilkan
console.log(jumlahVolumeDuaKubus(8, 3));
