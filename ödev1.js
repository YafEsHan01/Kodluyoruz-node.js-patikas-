// * Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
// ? Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
// ! Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.


let r = prompt("Lütfen Yarıçap değerini Giriniz:")
let area = Math.PI * Math.sqrt(r)

console.log("Alan:",area)


