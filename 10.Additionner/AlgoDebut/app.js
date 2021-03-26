function additionner(arr) {
    let out = 0;
    for (let i = arr[0]; i < arr[1]; i++)
        out += i;
    return out;
}

console.log(additionner([1, 50]));
// 1+2+3+4 = 10

// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs.

// ----------------- CONSEILS -----------------

// Boucle "for".
// Math.max
// Math.mix


