function convertisseurRomain(num) {

    const valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    const chiffreRomains = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let out = "";
    
    for (let i = 0; i < valeurDecimale.length; i++) {
        while (num >= valeurDecimale[i]) {
            num -= valeurDecimale[i];
            out += chiffreRomains[i];
        }
    }
    return out;
}

console.log(convertisseurRomain(36));
console.log(convertisseurRomain(2000));
console.log(convertisseurRomain(5648));

// 32745 = 30 000 + 2 000 + 700 + 40 + 5.


// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui va convertir des le nombre passé en parametre
// en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// ----------------- CONSEILS -----------------

// For;
// while;
