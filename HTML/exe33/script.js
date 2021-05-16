
let pizzas = ['calzone', 'reine', 'royale', 'savoyarde', 'mexicaine'];


for(let i=0; i<3; i+=1) {
	console.log(pizzas[i]);
}

console.log(`ci-dessus, la liste de nos pizzas`);

//affichera uniquement les 3 premières pizzas car i<3

/*pour remédier au problème et pour avoir systématiquement toutes les entrées du tableau, j'écris i<pizzas.length; qui désigne la longueur du tableau "pizzas" 

for(let i=0; i<pizzas.length; i+=1) {
	console.log(pizzas[i]);
}

*/


