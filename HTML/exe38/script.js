
/*for(i=0; i<=10; i+=1) {
	if (i==5) {
		continue;
	}
	console.log(i)
} */


let pizzas = ['calzone', 'reine', 'royale', 'savoyarde', 'mexicaine'];


for(let i of pizzas) {
	
	if (i == 'reine') {
		console.log('la pizza Reine n\'est pas disponible');
		continue;
	}
	console.log(i);
}
