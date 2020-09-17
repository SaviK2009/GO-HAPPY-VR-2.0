var monkey,monkey_running;

var invisGround;
var bImage, b;

var stoneImage;
var stoneGroup,foodGroup;
var bannanaImage;
var stoneImage;

var t

function preload(){
 
 monkey_running=loadAnimation("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
 
  bImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  foodGroup=new Group();
  stoneGroup=new Group();
  
  monkey=createSprite(50,370,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  invisGround=createSprite(200,380,400,20);
  invisGround.visisble=false;
  
  b=createSprite(200,200,400,400);
  b.addImage("back",bImage);
  b.x=b.width/2;
  b.velocityX=-3;
  t=0;
}

function draw() {
   background("white");
   if(b.x < 0){
     b.x=b.width/2;
   }
   stroke("black");
   textSize(20);
   fill("black");
  if(foodGroup.isTouching(monkey)){
    t=t+1;
    foodGroup.destroyEach();
  }
     
 
   b.velocityX = -6; 
 
   if(keyDown("space") && monkey.y>=159){
     monkey.velocityY = -10;
   }

   monkey.velocityY = monkey.velocityY+0.3;
 
   food();
   obstacles();
 
 switch(t){
  case 10:monkey.scale=0.12;
     break;
  case 20:monkey.scale=0.14;
     break;
  case 30:monkey.scale=0.16;
     break;
  case 40:monkey.scale=0.18;
     break;
     default:break;
 }
  monkey.depth= b.depth+1
  monkey.collide(invisGround);
  drawSprites();
  text("survival Time: "+t,100,150);
}

function food()
{

  if(frameCount % 80 === 0){
  var banana = createSprite(400,340,20,20);
  banana.y = random(120,200);
  banana.addImage(bananaImage);
  banana.velocityX = -4;
  banana.lifetime = -1;
  foodGroup.add(banana);
  banana.scale = 0.1;
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,350,30,30);
    obstacle.addImage(stoneImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = -1;
    stoneGroup.add(obstacle);
  }
}
  