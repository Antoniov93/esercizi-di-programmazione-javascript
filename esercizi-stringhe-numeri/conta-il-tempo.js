/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var input = 15860;

var x = input/3600;

var hh = Math.floor(x);

var min = Math.floor(((x-hh)*60));

var sec = input-(hh*3600)-(min*60);

console.log("Input: " + input + " Secondi");

console.log("Output: " + hh +" Ore, " + min +" minuti e "+ sec + " secondi.");
