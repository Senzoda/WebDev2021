// let currentDate = new Date();
// let newDate = new Date('June 1st 2021');
// let totalTime = (newDate - currentDate)/1000;

/*
day = totalTime/3600/24
hours = (totalTime/3600)%24
min = (totalTime/60) %60
seconds = totalTime %60
*/

/*
console.log(newDate)
console.log(totalTime)
console.log(currentDate)

let i=0
setInterval(function() {
    i++
    console.log('counting: ', i)
}, 5000);
*/


(function () {
    const second = 1000;
          minute = second * 60;
          hour = minute * 60;
          day = hour * 24;
  
    let finish = 'jun 30, 21 00:00:00';
        countDown = new Date(finish).getTime(); // Renvoie la valeur numérique de la date donnée, exprimée en nombre de millisecondes écoulées depuis le premier janvier 1970, 00:00:00 UTC (pour les temps antérieurs, ce sont des valeurs négatives qui seront renvoyées).
        
        x = setInterval(function() {
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //when date is reached:
          
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Enjoy!";
            countdown.style.display = "none";
            content.style.display = "block"; // block to let appear emojis
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
