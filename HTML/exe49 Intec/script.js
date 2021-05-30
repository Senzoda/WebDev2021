// getElementById for element selector

// callback function onclick
   // - random 1-6
   // - print numbers in to placeholder1 and placeholder2 


   var diceOne = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  var diceTwo = {
    sides: 6,
    roll: function () {
      var randomNumber2 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber2;
    }
  }
  
  
  //Printing 
  
    //function printNumber(number) {
     // var placeholder1 = document.getElementById('placeholder1');
    //  placeholder1.innerHTML = number;

    //  var placeholder2 = document.getElementById('placeholder2');
    //  placeholder2.innerHTML = number;
    //}

  var button = document.getElementById('button');
  
  let shake1 = document.getElementById('placeholder1');
  let shake2 = document.getElementById('placeholder2');

  const RES = document.querySelector('"win');

  function EventClickCallBack(){

    let n1 = diceOne.roll()
    let n2 = diceTwo.roll()
    if(n1==n2) { // here roll() generate nmber and look at them for the condition but
        console.log('win',diceOne.roll());
        document.getElementById('win').style.display="block"
    }else {
        document.getElementById('win').style.display="none"
    };

    var placeholder1 = document.getElementById('placeholder1');
    placeholder1.innerHTML = n1 // here you call function again thats mean generate another number
    // so number in frontend and in js side is different. this is the problem/bug
 
    var placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML = n2

  }
  
  
  