var captainAmerica, captainAmericaImg;
var monster1, monster2, monster3, monster4, monster5;
 
function preload(){
  captainAmericaImg = loadImage("captain america.gif")

}

function setup(){

 createCanvas(displayWidth-10, displayHeight-220)
 captainAmerica = createSprite(100,displayHeight-300,30,50) 
 captainAmerica.addImage(captainAmericaImg);
 
 monster = createSprite(30,displayHeight-300,50,60)
}

function draw(){

 background("blue")
 drawSprites()
}