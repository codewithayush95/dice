var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomNumberImage= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomNumberImage);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumberImage<randomImage2){
  document.querySelector("h1").innerHTML="Player 2 Won !!!🥇";
}
else if(randomNumberImage>randomImage2){
  document.querySelector("h1").innerHTML="Player 1 Won !!!🥇";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
