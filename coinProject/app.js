
// User story & specifications

/*
    when the user clicks on the button FLIP IT
        - coin flips (animation)
        -  capture form content of user (0 or 1 == 'heads' or 'tails')
        -  Generate random number in between 0-1 
        -  if random number is 1 {
            addClass: animate-flipheads
        }else {
            addClass: animate-fliptails
        }
        -  If form # is == to randomNum => User wins 
            else => User loses



*/
// If one of the buttons with class btn is clicked

let userSelection = '';
let tails = document.getElementById('tails');
let heads = document.getElementById('heads');

function isChecked() {
    if(tails.click()) {
        console.log('hello')
    };
}

isChecked()