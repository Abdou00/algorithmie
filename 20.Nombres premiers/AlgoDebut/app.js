function additioneNbPremiers(num) {
    let out = 0;
    let isFirstNumber = false;
    for (let i = 2; i <= num; i++) {
        if(i % 1 == 0 && i % i == 0){
            for (let y = 2; y < i; y++) {
                if(i == y) continue;
                if(i % y != 0){
                    isFirstNumber = true;
                }else {
                    isFirstNumber = false;
                    break;
                }
            }
        }
        if(isFirstNumber) out += i;
    }
    return out + 2;
}
console.log(additioneNbPremiers(0));

// additioneNbPremiers(10) = 17;

// ----------------- ÉNONCÉ -----------------

// Additione tous les nombres premiers d'un nombre donné, en comptant ce nombre.
// Les nombres premiers sont les nombres qui peuvent seulement être divisés par 1 et
// par eux-mêmes.
// 1 n'est pas un nombre premier.
// La liste des nombres premiers commencent comme cela : 
// 2, 3, 5, 7, 11, 13, 17, 19 etc ...

// ----------------- CONSEILS -----------------

// Recursion.
// Fonction dans une fonction.
// If, For ...
// Modulo (%).