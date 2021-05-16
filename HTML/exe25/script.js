let pizza = 'reine';
let PU; // je dois déclarer ma variable PU en dehors des accolades sinon je ne peux pas faire fonctionner mon code (au niveau test).
let quantite = 9;
let remise;
let ecrirePizza;
let ecrireRemise;

if (pizza == 'calzone') {
   PU = 8;
} else if (pizza == 'reine') {
   PU = 10;
} else if (pizza == 'royale') {
   PU = 12;
}

if ( (quantite >=5) && (quantite < 10) ) {
	remise=2;
} else if (quantite >= 10) {
	remise=5;
} else {
	remise=0;
}

if(remise == 0 ) {
    ecrireRemise = '';
}else {
    ecrireRemise = `Remise: <strong>${remise} &euro;</strong> <br />`;
}


if(quantite <= 1) {
	ecrirePizza = 'pizza';
} else {
	ecrirePizza = 'pizzas';
}



let total = PU * quantite - remise;

document.getElementsByTagName('div')[0].innerHTML = `

Vous avez commandé <strong>${quantite} ${ecrirePizza}</strong> <br>
Type de pizza commandée: <strong>${pizza}</strong> <br>
Valeur unitaire: <strong>${PU} &euro;</strong> <br>
${ecrireRemise}
Total à payer : <strong>${total} &euro;</strong>
`;