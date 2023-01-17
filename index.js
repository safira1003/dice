var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var imageSource1 = "images/dice"+randomNumber1+".png";
var imageSource2 = "images/dice"+randomNumber2+".png";

document.querySelector(".dice1").setAttribute("src",imageSource1);
document.querySelector(".dice2").setAttribute("src",imageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
} else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}