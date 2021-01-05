// Refactoring
// adalah sebauh proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya

// Kenapa?
// 1. Readability (kemudahan membaca program bagi pembuat dan orang lain)
// 2. DRY (Don't Repeat Yourself)
// 3. Testability
// 4. Performance
// 4. Maintainability

// Refactoring Sederhana
function jumlahVolumeDuaKubus(a, b) {
  //   let volumeA;
  //   let volumeB;
  //   let total;

  //   volumeA = a * a * a;
  //   volumeB = b * b * b;

  //   total = volumeA + volumeB;
  //   return total;
  //   di Refactoring menjadi
  return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));
