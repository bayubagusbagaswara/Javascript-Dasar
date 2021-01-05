// Function Declaration
// function identifier (ParameterList optional) {FunctionBody}
function tampilPesan(nama) {
  alert("halo" + nama);
}
// Function Expression
// function identifier optional(ParameterList optional){FunctionBody}
// harus disimpan kedalam expresi/variabel
let tampilPesan = function (nama) {
  alert("halo" + nama);
};

// Function Declaration
// - Lebih flexibel (dapat ditulis dimanapun), karena ada konsep Hoisting (deklarasi pasti disimpan diawal memori)
// - Mudah dipahami pemula

// Function Expression
// - Harus didefinisikan terlebih dahulu sebelum dipanggil
// - Lebih powerfull : sebagai closure, sebagai argumen untuk function lain, IIFE (Immediately Invoked Function Expression)
