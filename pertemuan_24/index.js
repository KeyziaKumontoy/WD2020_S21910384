//Array

let nilai=[90, 80, 75, 100, 85];

for(let i=0; i<nilai.length; i++ ){
    console.log("nilai =", nilai[1] + 5);
} //menampilkan array dan modifikasi
console.log(nilai);

nilai[2] = 105; 
console.log(nilai[nilai.length-1]); //menampilkan indeks terakhir

let john = ["John", "Doe", 33, true];
console.log(john);

//toString
console.log(john.toString());

//join
console.log(john.join(" - "));

//pop
john.pop();
console.log(john.join(" - "));

//push
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift
john.shift();
console.log(john.join(" - "));

//unshift
john.unshift("john");
john.unshift("prof");
console.log(john.join(" - "));

//exercise: latihan dengan melanjutkan yang dari docs

//array splice
let buah = ["Mangga", "Apel", "Anggur", "Pisang"];

buah.splice(2, 0, "Jeruk", "Naga");

console.log(buah);

//concat method

let minuman = ["softdrink", "air", "jus"];
let kue = ["brownies", "tart", "donat"];
let candy = ["sugus", "milkita", "chupachups"];

let makanan = minuman.concat(kue, candy);

console.log(makanan);

//slice method

let warna = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let fav_warna = warna.slice(0, 3);
let fav_warna = warna.slice(3);
console.log(cemilanGurih);
console.log(cemilanManis);

//sort method
// Contoh array dengan tipe data string
let pakaian = ["Kemeja", "slingbag", "pants", "belt"];

pakaian.sort();

console.log(pakaian); 

let bilangan = [30, 1, 2, 3.5, 10, 100];


let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil)); 
console.log(bilangan.sort(urutDariTerbesar)); 

//reverse method
let nama = ["Keyzia", "Riven", "Eunike", "Darien"];
nama.reverse();
console.log(nama); 

let fav_minuman = ["Susu", "Kopi", "Cendol", "Boba"];
fav_minuman.sort().reverse();
console.log(fav_minuman);