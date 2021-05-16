/*let pizza = 'royale';

let quantite = 5;*/

let commande = function(piz, qt) {
	
    let PU; /* je dois créer une variable locale car elle sera utilisée uniquement à l'intérieur de ma fonction*/
	if(piz == 'reine') {PU = 8;}
	else if (piz =='royale') {PU = 10;}
	else if (piz =='calzone') {PU = 12;}

	let calcul = PU * qt;
	
	return document.getElementsByTagName('div')[0].innerHTML = `total à payer: <strong>${calcul}<strong> &euro;`;
};

// commande(pizza, quantite);  j'appelle ici avec des valeurs de variable mais je peux aussi appeler directement avec des valeurs concernées comme ci-dessous

commande('royale', 6); // ici un appel avec insertion des valeurs directes et non des arguments théoriques. Cela veut dire que les variables let pizza et let quantite déclarées au début peuvent être supprimées

