/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

var a = 33;
var b = 8;
var c = 125;
var d = 8;
var max ; 
var min ;

console.log(`A = ${a}, B = ${b}, C = ${c}, D = ${d} `);

//Comparazione per Maggiore
if (a>=b && a>=c && a>=d) {
  max = a;
  
} else if (b>=a && b>=c && b>=d) {
  max = b;
  
} else if (c>=a && c>=b && c>=d) {
  max = c;

} else if (d>=a && d>=b && d>=c) {
  max = d;
}


//Comparazione per Minore
if (a<=b && a<=c && a<=d) {
  min = a;
  
} else if (b<=a && b<=c && b<=d) {
  min = b;
  
} else if (c<=a && c<=b && c<=d) {
  min = c;

} else if (d<=a && d<=b && d<=c) {
  min = d; 
}

console.log(`Numero Maggiore = ${max} - Numero Minore = ${min}`);
