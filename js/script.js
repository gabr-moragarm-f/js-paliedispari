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
