function finSimilaire(str, fin) {
  let match = str.slice(-fin.length);

  if (match == fin) return console.log("La fin est similaire");
  return console.log("La fin ne correspond pas");
}

console.log(finSimilaire("ours", "rs"));
console.log(finSimilaire("ours", "eeers"));

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".


// ----------------- CONSEILS -----------------


// La fonction "slice" permet de découper une chaine de caractère.
// Essayez cela : 
// console.log("hello".slice(2));

// La méthode length permet de donner la longueur d'une chaine.
// Essayez cela :
// console.log("hello".length);

// Mais il y a des dizaines de façon de résoudre cet algorithme(et les autres...),
// N'hésitez pas à le faire à votre façon et à TESTER vos idées(c'est important). 