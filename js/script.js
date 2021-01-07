// Primo

// Funzione che verifica se una parola è palindroma ----------------------------
function checkPalindrome(word) {
  var reverseWord = '';

  // Ciclo che inverte la parola input -----------------------------------------
  for (var i = word.length - 1; i >= 0; i --) {
    reverseWord += word[i];
  }

  // Verifica che la parola input sia uguale a quella invertita ----------------
  if (reverseWord === word) {
    return true;
  }else {
    return false;
  }
}

var palindromaButton = document.getElementById('palindroma-button');

var wordInput;

palindromaButton.addEventListener('click', function() {
  wordInput = prompt('Digita la parola da verificare se è palindroma.');

  if (checkPalindrome(wordInput)) {
    alert('La parola ' + wordInput + ' è palindroma');
  } else {
    alert('La parola ' + wordInput + ' NON è palindroma');
  }
})





// Secondo

// Valori costanti -------------------------------------------------------------
var minNumber = 1;

var maxNumber = 5;
// -----------------------------------------------------------------------------

// Funzioni --------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function numberEvenCheck(input) {
  input = parseInt(input)

  if (input % 2 === 0) {
    return true;
  }else {
    return false;
  }
}
// -----------------------------------------------------------------------------

var pariDispariButton = document.getElementById('pari-dispari-button');

var numberEvenFlag;

var pariDispariInput;

var validationRepeatFlag = false;

var numberInput;

var numberComputer;

var somma;

pariDispariButton.addEventListener('click', function() {
  alert('Ora dovrai scegliere pari o dispari e poi un numero da ' + minNumber + ' a ' + maxNumber + '. Io sceglierò un altro numero simile e lo sommerò al tuo, a seconda di se il risultato è pari o dispari decreterò il vincitore.');

  // Raccolta input utente -----------------------------------------------------
  do {
    pariDispariInput = prompt('Pari o Dispari?').toLowerCase();

    if (pariDispariInput === 'pari') {
      numberEvenFlag = true;

      validationRepeatFlag = false;
    }else if (pariDispariInput === 'dispari') {
      numberEvenFlag = false;

      validationRepeatFlag = false;
    }else {
      alert('Digita "pari" o "dispari", riprova.')

      validationRepeatFlag = true;
    }
  } while (validationRepeatFlag);

  numberInput = parseInt(prompt('Scegli un numero da ' + minNumber + ' a ' + maxNumber + '.'))
  // ---------------------------------------------------------------------------

  // Scelta casuale del numero del numero del Computer -------------------------
  numberComputer = numberRandomizer(minNumber, maxNumber);

  // Somma----------------------------------------------------------------------
  somma = numberInput + numberComputer;

  // Esito ---------------------------------------------------------------------
  if (numberEvenFlag === numberEvenCheck(somma)) {
    alert('Hai vinto! Io ho scelto ' + numberComputer + ' e la somma ha fatto ' + somma + '.');
  }else{
    alert('Mi dispiace, hai perso! Io ho scelto ' + numberComputer + ' e la somma ha fatto ' + somma + '.');
  }
})
