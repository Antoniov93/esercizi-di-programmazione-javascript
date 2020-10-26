/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var pl1 = 6;
var pl2 = 10;
var max = 100;
var min = 1;

console.log("Giocatore 1 = " + pl1);
console.log("Giocatore 2 = " + pl2);


// Generazione Numero Casuale tra max e min
var numb = Math.floor ( (Math.random() * (max-min) + min) );
console.log("Numero Casuale Generato = " + numb);



switch (numb) {

  case pl1:
    console.log("Il Vincitore è il Giocatore 1!! COMPLIMENTI!!");
    break;

  case pl2:
  
    console.log("Il Vincitore è il Giocatore 2!! COMPLIMENTI!!");
    break;

  default:
  
      if (numb > pl1 && numb > pl2 && pl2>pl1){
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 2 si è avvicinato di più!");
        
      } else if (numb > pl1 && numb > pl2 && pl2<pl1) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 1 si è avvicinato di più!");
        
      } else if (numb < pl1 && numb < pl2 && pl2>pl1) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 1 si è avvicinato di più!");

      } else if (numb < pl1 && numb < pl2 && pl2<pl1) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 2 si è avvicinato di più!");

      } else if (numb>pl1 && numb<pl2 && (numb-pl1)<(pl2-numb)) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 1 si è avvicinato di più!");

      } else if (numb>pl1 && numb<pl2 && (numb-pl1)>(pl2-numb)) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 2 si è avvicinato di più!"); 

      } else if (numb>pl2 && numb<pl1 && (numb-pl2)>(pl1-numb)) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 1 si è avvicinato di più!");

      } else if (numb>pl2 && numb<pl1 && (numb-pl2)<(pl1-numb)) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 2 si è avvicinato di più!"); 

      } else if (numb>pl2 && numb<pl1 && (numb-pl2)==(pl1-numb)) {
        console.log("Nessuno dei due ha azzeccato il numero casuale!");

      } else if (numb>pl1 && numb<pl2 && (numb-pl1)==(pl2-numb)) {
        console.log("Nessuno dei due ha azzeccato il numero casuale");  
      }  
}

