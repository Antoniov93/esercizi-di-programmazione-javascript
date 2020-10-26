/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

var num = 95;
var max = 9999;

console.log(`Numero = ${num}`);

if (num >= 0 && num < 10) {
  console.log("Il numero è composto da 1 cifra" );

} else if ( num >= 10 && num < 100) {
  console.log("Il numero è composto da 2 cifre" );

} else if ( num >= 100 && num < 1000) {
  console.log("Il numero è composto da 3 cifre" );

} else if ( num >= 1000 && num <= 9999) {
  console.log("Il numero è composto da 4 cifre" );

} else {
  console.log("Attenzione! Il numero inserito non è corretto!");
  console.log(`(Inserire un numero tra 0 e ${max})`)
}



