function difTab(arr1, arr2) {
    let out = [];
    for (const i of arr2) {
        if(!arr1.includes(i)) out.push(i)
    }
    return out;
}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();