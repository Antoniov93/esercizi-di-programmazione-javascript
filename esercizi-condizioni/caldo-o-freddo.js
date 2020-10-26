/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 10;
var b = -2;
var c = 31;
var d = 22;
var e = 15;
var f = -6;
var g = 7;

var hottest ;
var coldest ;


//confronto giornata più calda

if (a>b && a>c && a>c && a>e && a>f && a>g) {

  hottest = a;

} else if (b>a && b>c && b>d && b>e && b>f && b>g) {

  hottest = b;

} else if (c>a && c>b && c>d && c>e && c>f && c>g) {

  hottest = c;

} else if (d>a && d>b && d>c && d>e && d>f && d>g) {

  hottest = d;

} else if (e>a && e>b && e>c && e>d && e>f && e>g) {

  hottest = e;

} else if (f>a && f>b && f>c && f>d && f>e && f>g) {

  hottest = f;

} else if (g>a && g>b && g>c && g>d && g>e && g>f) {

  hottest = g;

}



//confronto giornata più fredda

if (a<b && a<c && a<d && a<e && a<f && a<g) {

  coldest = a;

} else if (b<a && b<c && b<d && b<e && b<f && b<g) {

  coldest = b;

} else if (c<a && c<b && c<d && c<e && c<f && c<g) {

  coldest = c;

} else if (d<a && d<b && d<c && d<e && d<f && d<g) {

  coldest = d;

} else if (e<a && e<b && e<c && e<d && e<f && e<g) {

  coldest = e;

} else if (f<a && f<b && f<c && f<d && f<e && f<g) {

  coldest = f;

} else if (g<a && g<b && g<c && g<d && g<e && g<f) {

  coldest = g;

}

console.log("Lun = " + a);
console.log("Mar = " + b);
console.log("Mer = " + c);
console.log("Gio = " + d);
console.log("Ven = " + e);
console.log("Sab = " + f);
console.log("Dom = " + g);

console.log(`Giorno più Caldo = `+ hottest + ` °C` + ` - Giorno più Freddo = ` + coldest + ` °C `);


