var n=Math.floor(Math.random()*6)+1;
var ranimage="dice"+n+".png"
var imagesource="images/"+ranimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);

var n2=Math.floor(Math.random()*6)+1;
var ranimage2="dice"+n2+".png"
var imagesource2="images/"+ranimage2;
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);

if(n<n2){
  document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
else if(n>n2){
  document.querySelector("h1").innerHTML="Player1 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML=" Draw the Match";
}
