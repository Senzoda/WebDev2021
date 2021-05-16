
function email() {

    let adresseEmail = 'buenavista@gmail.com';
    return(adresseEmail);
}

/*document.getElementById('box').innerHTML = "Mon adresse Email est " + email();*/

document.getElementById('box').innerHTML =`Mon adresse Email est ${email()};`