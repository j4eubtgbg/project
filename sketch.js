var ship,shipanim;
var sea2,sea1;
function preload(){
  shipanim = loadAnimation("a.png","b.png","c.png",'d.png')
  sea1 = loadAnimation('sea.png');
}

function setup(){
  createCanvas(400,400);
  
  sea2 = createSprite(400,200);
  ship = createSprite(200,200);
  ship.addAnimation("314",shipanim);
  sea2.addAnimation('bg',sea1);
  sea2.velocityX -= 2;
}

function draw() {
  background("blue");
  
  ship.scale = 0.25; 
  sea2.scale = 0.24;
  if(sea2.x< -100){
    sea2.x= 400;
  }
 drawSprites();
}