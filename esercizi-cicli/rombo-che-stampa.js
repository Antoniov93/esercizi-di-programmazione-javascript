/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/




var x = 5;
var a;

if (x%2==0 || x > 19) {
  console.log("Numero non Valido!, inserire un numero dispari compreso tra 1 e 19");
} else {


var i;
for (i = 1; i < x; i=i+2){



  switch (i) {
    case 1:
    a = "         X         ";    
    break;
    case 3:
    a = "        XXX        ";    
    break;
    case 5:
    a = "       XXXXX       ";    
    break;
    case 7:
    a = "      XXXXXXX      ";    
    break;
    case 9:
    a = "     XXXXXXXXX     ";    
    break;
    case 11:
    a = "    XXXXXXXXXXX    ";    
    break;
    case 13:
    a = "   XXXXXXXXXXXXX   ";    
    break;
    case 15:
    a = "  XXXXXXXXXXXXXXX  ";    
    break;
    case 17:
    a = " XXXXXXXXXXXXXXXXX ";    
    break;
    case 19:
    a = "XXXXXXXXXXXXXXXXXXX";    
    break;

    default:
    console.log(" Numero non valido! Inserire un valore tra 1 e 19");
  }

  console.log(`${a}`);
}

var r;
for (r = x; r >= 0 ; r=r-2) {

  switch (r) {
    case 1:
    a = "         X         ";    
    break;
    case 3:
    a = "        XXX        ";    
    break;
    case 5:
    a = "       XXXXX       ";    
    break;
    case 7:
    a = "      XXXXXXX      ";    
    break;
    case 9:
    a = "     XXXXXXXXX     ";    
    break;
    case 11:
    a = "    XXXXXXXXXXX    ";    
    break;
    case 13:
    a = "   XXXXXXXXXXXXX   ";    
    break;
    case 15:
    a = "  XXXXXXXXXXXXXXX  ";    
    break;
    case 17:
    a = " XXXXXXXXXXXXXXXXX ";    
    break;
    case 19:
    a = "XXXXXXXXXXXXXXXXXXX";    
    break;

    default:
    console.log(" Numero non valido! Inserire un valore tra 1 e 19");
  }

  console.log(`${a}`);
}
}
