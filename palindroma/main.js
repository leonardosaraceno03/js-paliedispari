var parola = prompt("Digita una per parola per controllare se è palindroma");

var parolaDivisa = parola.split('');
console.log(parolaDivisa);

var parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

var parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

if(parola == parolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }