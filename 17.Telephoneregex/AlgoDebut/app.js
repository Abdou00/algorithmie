function telephoneCheck(str){
    if(!/(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/.test(str)) return `${str} n'est pas un bon numero de tel français :(`;
    return `${str} est un bon numero de tel français :(`;;
}

console.log(telephoneCheck("06 44 64 90 21"));
console.log(telephoneCheck("06 44fefe 64 90 21"));


// ----------------- ÉNONCÉ -----------------

// Vous devez vous assurer que vos utilisateurs rentrent bien un numéro Français.
// Ce numéro doit : 
// Démarrer par un 0 et être suivi d'un chiffre entre 1-9.
// Il faut qu'il y est 4 duos de chiffre de 1 à 9 après les deux premiers.
// Nous accepterons des espaces( ), tirets(-) et points(.) entre les duos de
// chiffres.
// Retournez true si la chaine en parametre passe le test(si c'est un numéro valable)
// et false en cas contraire.


// ----------------- CONSEILS -----------------

// Regex time!
// Google est votre ami.
// "Regex tool online" aussi.
// La document MDN et autre.

// Bon courage.