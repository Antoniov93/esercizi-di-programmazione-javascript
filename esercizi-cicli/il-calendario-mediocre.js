/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/


var month = "gennaio";
var day0 = 5;
var ndays;
var wdays;

switch (month) {      // Assegno il numero dei giorni al mese inserito
  
  case "febbraio":
  ndays = 28;
  break;
  
  case "settembre":
  case "novembre":
  case "aprile":
  case "giugno":
  ndays = 30;
  break;
  
  case "marzo":
  case "maggio":
  case "luglio":
  case "agosto":
  case "ottobre":
  case "dicembre":
  case "gennaio":
  ndays = 31;
  break;

  default:
  ndays = "Mese non Valido"        
  console.log("Mese non valido!");  // se il mese inserito non è corretto messaggio di errore
  
}

if (ndays === "Mese non Valido"){  
  console.log("Il Calendario non può essere Stampato");  // se il mese inserito non è corretto il codice si ARRESTA!

} else {

  switch (day0) {  // Assegno il nome del giorno al giorno 
    case 0:
    wdays = "Lunedì"
    break;
    case 1:
    wdays = "Martedì"
    break;
    case 2:
    wdays = "Mercoledì"
    break;
    case 3:
    wdays = "Giovedì"
    break;
    case 4:
    wdays = "Venerdì"
    break;
    case 5:
    wdays = "Sabato"
    break;
    case 6:
    wdays = "Domenica"
    break;
      
  }
  
   if (day0 >= 7||day0 < 0){
  console.log("Giorno iniziale non Valido");
   console.log("Il Calendario non può essere Stampato"); // se il giorno inserito non è corretto il codice si ARRESTA!
   } else {


console.log(`Mese: ${month}, Giorni: ${ndays}`); 
console.log(`Giorno Iniziale Settimana: ${day0}° - ${wdays} `);

var i=1;
while (i<=ndays) {  // Inizio Ciclo

  if (day0 >= 7){    // se il giorno iniziale è oltre la domenica day0 = 6, il giorno iniziale ricomincia da 0 (Lunedì)
    day0 = 0;
  } 
  
  switch (day0) {  // Ri-Assegno il giusto nome al giorno della settimana
        case 0:
        wdays = "Lunedì"
        break;
        case 1:
        wdays = "Martedì"
        break;
        case 2:
        wdays = "Mercoledì"
        break;
        case 3:
        wdays = "Giovedì"
        break;
        case 4:
        wdays = "Venerdì"
        break;
        case 5:
        wdays = "Sabato"
        break;
        case 6:
        wdays = "Domenica"
        break; 
        
      }
      
console.log(`${i} - ${wdays}`); // Stampo il calendario!
i++;
day0++;
}
}
}


