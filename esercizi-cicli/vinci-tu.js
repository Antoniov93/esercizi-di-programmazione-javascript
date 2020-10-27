/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


var numshots = 3;
var pointspl1 = 0;
var pointspl2 = 0;
var min = 1;
var max = 6;

console.log("Ecco i tiri di dado del Giocatore 1: ");

var i;
for (i = 1; i <= numshots ; i++ ) {     //Inizio ciclo tiri Giocatore 1

    var numb1 = Math.floor ( (Math.random() * (max-min) + min) );
    console.log(`Tiro n° ${i}  =  ${numb1}`); // Tiro Dado con numero casuale
    pointspl1 = pointspl1 + numb1;
}

console.log("I punti del Giocatore 1 sono pari a " + pointspl1);  

console.log("-------------------------------------------------");

console.log("Ecco i tiri di dado del Giocatore 2: ");

var r;
for (r = 1; r <= numshots ; r++ ) {    //Inizio ciclo tiri Giocatore 2

    var numb2 = Math.floor ( (Math.random() * (max-min) + min) );
    console.log(`Tiro n° ${r}  =  ${numb2}`); // Tiro Dado con numero casuale
    pointspl2 = pointspl2 + numb2;
}

console.log("I punti del Giocatore 2 sono pari a " + pointspl2);


if (pointspl1 > pointspl2) {   //confronto punteggi
  console.log(" IL GIOCATORE 1 HA VINTO!!");
  
} else if (pointspl2 > pointspl1) {
  console.log(" IL GIOCATORE 2 HA VINTO!!");
} else {
  console.log(" LA PARTITA E' TERMINATA IN PARITA'!!");
}
