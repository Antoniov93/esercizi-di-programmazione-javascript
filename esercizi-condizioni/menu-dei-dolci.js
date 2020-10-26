/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


var sweet = 3;
var sw1 = "Tiramisù";
var sw2 = "Torta della nonna";
var sw3 = "Cheesecake alla nutella";
var sw4 = "Macedonia";

console.log(`MENU:`);
console.log(`1. ${sw1}`);
console.log(`2. ${sw2}`);
console.log(`3. ${sw3}`);
console.log(`4. ${sw4}`);


console.log(`Dolce Scelto = n° ${sweet}`);

switch (sweet) {
  case 1:
    console.log(`Hai scelto il dolce ${sw1}`);
    break;
  case 2:
    console.log(`Hai scelto il dolce ${sw2}`);
    break;
  case 3:
    console.log(`Hai scelto il dolce ${sw3}`);
    break;
  case 4:
    console.log(`Hai scelto il dolce ${sw4}`);
    break;

  default:
    console.log(`Dolce non disponibile!`);
   
}
