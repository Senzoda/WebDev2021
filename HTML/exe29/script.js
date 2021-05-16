let fruit = 'pomme';
let quantite = 10;

const TARIF = {
    pomme: 0.5,
    banane: 1,
    mangue: 1.5,
};

switch(fruit) {
    case 'pomme':
        let tarifPomme = TARIF.pomme * quantite;
        document.getElementById('box').innerHTML = `
        Montant à payer : ${tarifPomme} &euro;`
            break;
    case 'banane':
        let tarifBanane = TARIF.banane * quantite;
        document.getElementById('box').innerHTML = `
        Montant à payer : ${tarifBanane} &euro;`
            break;
    case 'mangue':
        let tarifMangue = TARIF.mangue * quantite;
        document.getElementById('box').innerHTML = `
        Montant à payer : ${tarifMangue} &euro;`
            break;
};