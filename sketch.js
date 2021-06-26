var captainAmerica, captainAmericaImg;
var monster1, monster2, monster3, monster4, monster5;
var ground;
var bgImage;
 
function preload(){
  captainAmericaImg = loadAnimation("ca1.png","ca2.png","ca3.png","ca4.png")
  monster1Img = loadAnimation("monsterOne1.png","monsterOne2.png")
  bgImage = loadImage("BG.png")
  //monster2Img = loadAnimation("monsterTwo3.png","monsterTwo4.png")
}

function setup(){

 createCanvas(displayWidth-10, displayHeight-220)
 bg = createSprite((displayWidth-10)/2, (displayHeight-220)/2)
 bg.addImage(bgImage);
 bg.scale = 1.5;
 bg.velocityX = -5;

 bg2 = createSprite((displayWidth-10)*2, (displayHeight-220)/2)
 bg2.addImage(bgImage);
 bg2.scale = 1.5;
 bg2.velocityX = -5;


 captainAmerica = createSprite(200,displayHeight-500,30,50) 
 captainAmerica.addAnimation("running",captainAmericaImg);
 captainAmerica.scale = 0.2;
 
 ground = createSprite((displayWidth-10)/2, displayHeight-250, displayWidth-10, 20)
 ground.visible = false;

 monster = createSprite(50,displayHeight-310,50,60)
 monster.addAnimation("monsterRunning",monster1Img);

}

function draw(){

 background("blue");
 if (keyDown("space")){
   captainAmerica.velocityY = -8;
  
 }
 captainAmerica.velocityY = captainAmerica.velocityY + 0.5
 captainAmerica.collide(ground)

 if (bg.x <0 ){
   bg.x = (displayWidth-10)/2;
 }
 if (bg2.x <0 ){
  bg2.x = (displayWidth-10)*2;
}

 drawSprites()
}