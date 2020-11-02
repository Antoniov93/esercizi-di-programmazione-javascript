/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

var array1 = [];
var elnumb = 100;       //numero di elementi da avere nell'array
var min = 1;
var max = 50;

for (var i = 0; i < elnumb; i++) {

array1 [i] = Math.floor ( (Math.random() * (max-min) + min) );

}

console.log(`Lista di ${elnumb} Numeri (tra ${min} e ${max}) = `+ array1);

//------------------------------------------------------------------------------ 

var accumulator = 0;                         // Definisco una variabile accumulator che è la somma di tutti i numeri dell' array
for ( var x = 0; x < array1.length; x++) {

 accumulator = accumulator + array1 [x];
 
}


while (accumulator != 0){         // definisco un ciclo da ripetere fino a che la somma di tutti i valori dell'array non sono uguali a zero

    var usernum = prompt ("Inserire un numero tra 1 e 50\n(verranno azzerati tutti i suoi multipli dalla lista)") // chiedo il numero da togliere insieme ai suoi multipli
    for ( var y = 0; y < array1.length; y++) {

        if (array1 [y] % usernum == 0){
          array1 [y] = 0;
        }

    }
    console.log(`Hai Scelto il numero ${usernum}`);
    console.log(`Lista Aggiornata = ${array1}`);

    accumulator = 0;              // ricalcolo la somma per poterla confrontare di nuovo all'inizio del prossimo ciclo
    for ( var z = 0; z < array1.length; z++) {

    
    accumulator = accumulator + array1 [z];
     
    }   

}

if (accumulator == 0) {
  console.log(`La lista è stata completamente azzerata!`);
}
