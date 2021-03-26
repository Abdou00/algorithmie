function memeLettres(arr) {
    for (const letter of arr[1]) {
        if(!arr[0].includes(letter)) return "Ne contient pas toutes les lettres de " + arr[1];
    }
    return "Contient toutes les lettres du mot " + arr[1];
}
console.log(memeLettres(["concupiscence", "sens"]));
console.log(memeLettres(["concupiscence", "sensy"]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();


