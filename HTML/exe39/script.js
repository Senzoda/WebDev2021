/*********** VARIABLES************ */

let pizzas = ['calzone', 'reine', 'royale', 'savoyarde'];
const BOX = document.getElementById('demo');
let liste ="Liste des pizzas commandées: "


/*********** BOUCLE FOR************ */

for(let i=0; i < pizzas.length; i+=1) {
	if(i == pizzas.length-1) {
		liste += pizzas[i] + '.';
		break;
	}
	liste += pizzas[i] + ', ';
	
}

/*********** WEB PAGE************ */

BOX.innerText = liste;



