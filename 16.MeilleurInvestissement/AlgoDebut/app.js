function meilleurInvestissement(arr){
    const days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    
    let out = [0, Number.MAX_VALUE];
    arr.forEach((e) => {
        if(e > out[0]) out[0] = e;
        if(e < out[1]) out[1] = e;
    });
    return `Le meilleur jour pour investir est ${days[arr.indexOf(out[0])]} \nLe meilleur jour pour vendre est ${days[arr.indexOf(out[1])]}`;
}

console.log(meilleurInvestissement([50,10,20,2,80,60,20]));


// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les 
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et 
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi(4eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montantdu bénéfice.

// Bon courage !


// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();
