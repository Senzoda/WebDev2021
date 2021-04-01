var cityRent1 = 1200;
var cityRent2 = 590;

var isMoreExpensive = cityRent1 > cityRent2;
var comparisonLabel = "London is more expensive: " + isMoreExpensive;
console.log(comparisonLabel);

var difference = cityRent1  - cityRent2;
var differenceLabel = "The rent difference is : " + difference + "Euros";
//console.log(differenceLable);

document.getElementById("city1").innerHTML = "London Rent " + cityRent1;
document.getElementById("city2").innerHTML = "Malaga Rent " + cityRent2;

document.getElementsByClassName('comparison')[0].innerHTML = comparisonLabel;
document.getElementsByClassName('difference')[0].innerHTML = differenceLabel;
