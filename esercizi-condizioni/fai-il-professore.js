/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/


var vote = 25;
console.log(`Voto in Cifre: ${vote}`);


// trasformazione voto in giudizio con costrutto if
if (vote < 18 && vote >= 0) {
  console.log(`Giudizio: Insufficiente`);
  
} else if ( vote >= 18 && vote < 21) {
  console.log(`Giudizio: Sufficiente`);
  
} else if ( vote >= 21 && vote < 24) {
  console.log(`Giudizio: Buono`);

} else if ( vote >= 24 && vote < 27) {
    console.log(`Giudizio: Distinto`);

} else if ( vote >= 27 && vote <= 29) {
    console.log(`Giudizio: Ottimo`);

} else if ( vote == 30){
  console.log(`Giudizio: Eccellente`);

} else {
  console.log(`Voto Inserito Non Valido!`);
}


/*

// trasformazione voto in giudizio con costrutto switch-case

switch (vote) {
  case 18:
  console.log(`Giudizio: Sufficiente`);
  break;
  
  case 19:
  console.log(`Giudizio: Sufficiente`);
  break;
  
  case 20:
  console.log(`Giudizio: Sufficiente`);
  break;
  
  case 21:
  console.log(`Giudizio: Buono`);
  break;
  
  case 22:
  console.log(`Giudizio: Buono`);
  break;
  
  case 23:
  console.log(`Giudizio: Buono`);
  break;
  
  case 24:
  console.log(`Giudizio: Distinto`);
  break;
  
  case 25:
  console.log(`Giudizio: Distinto`);
  break;
  
  case 26:
  console.log(`Giudizio: Distinto`);
  break;
  
  case 27:
  console.log(`Giudizio: Ottimo`);
  break;
  
  case 28:
  console.log(`Giudizio: Ottimo`);
  break;
  
  case 29:
  console.log(`Giudizio: Ottimo`);
  break;
  
  case 30:
  console.log(`Giudizio: Eccellente`);
  break;
  
  default:
  if (vote < 18 && vote >= 0) {
  console.log(`Giudizio: Insufficiente`);

  } else {
  console.log(`Voto Inserito Non Valido!`);
  }

}
  
*/







