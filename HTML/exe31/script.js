
function calcul(chiffre1, chiffre2=10) {

    let resultat = chiffre1 + chiffre2;
    return resultat;
}

/*document.getElementById('box').innerHTML =`le résultat est ${calcul(1)}`;*/

document.getElementById('box').innerHTML =`le résultat est ${calcul(1, 5)}`;

//l'argument a la priorité sur le paramètre:

//calcul(chiffre1, chiffre2=10)  -> chiffres 1 et chiffres deux sont des paramètres

//${calcul(1, 5)  -> 1 et 5 sont des arguments