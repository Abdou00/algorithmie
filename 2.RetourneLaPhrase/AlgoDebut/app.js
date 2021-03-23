function retourneLaPhrase(str) {
  var a = str.split('');
  console.log(a);

  var b = a.reverse()
  console.log(b);

  var c = b.join('');
  console.log(c);

  return c;
  // return str.split('').reverse().join('');
}

console.log(retourneLaPhrase("Bonjour à tous !!"));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va retourner une phrase. 
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.

// ----------------- CONSEILS -----------------

// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.