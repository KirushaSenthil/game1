var monkey 
var monkey_running
var banana 
var bananaImage
var obstacle
var obstacleImage
var FoodGroup
var obstacleGroup
var score=0;
var PLAY=1
var END=0
var gameState=PLAY
var invisibleTile;
var jungle
var ground;
var jungleImage
var backgroundImage
var tile;
var tileGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  backgroundImage=loadAnimation=
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage=loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas(400,400)
  jungle=createSprite(200,200,400,10);
//  jungle.x = ground.width /2;
  jungle.addImage(jungleImage)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(300,350,600,20)
  console.log(ground.x)

  
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  tileGroup = new Group();
  
}


function draw() {
  background("white")
  stroke("white")
  textSize(20)
  fill("black")
 
  
  if(gameState===PLAY){
    if(jungle.x<0){
      jungle.x = 300
    }
    jungle.velocityX = -3
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
    if(foodGroup.isTouching(monkey)){
      score=score+2
      foodGroup.destroyEach();
    }
    switch(score){
    case 10: monkey.scale=0.12
      break;
      case 20: monkey.scale=0.14
      break;
      case 30: monkey.scale=0.16
      break;
      case 40: monkey.scale=0.18
      break;
      default: break;
  }
  if(tileGroup.isTouching(monkey)){
    monkey.velocityY=0;
   monkey.collide(tileGroup)
    console.log("touching")
    console.log(monkey.velocityY)
  }
     
  spawnObstacles();
  spawnTiles();
     monkey.velocityY = monkey.velocityY + 0.8
    if(obstacleGroup.isTouching(monkey)){
      monkey.scale=0.12
    }
    
  }
  
monkey.collide(ground)
  
  
  
  
 
drawSprites();
   text("score:"+score,300,50)
}
  
 
  
  
  function spawnObstacles(){
 
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,40,10);
   
    obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
    
  }
  
}

function spawnTiles(){
  if(frameCount%140===0){
    var tile=createSprite(200,120,60,20);
    var banana = createSprite(600,300,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    tile.y=Math.round(random(110,200));
    banana.y = tile.y-Math.round(random(20,100));
    tile.lifetime=130
    tile.velocityX=-3;
    banana.velocityX = -3;
    tileGroup.add(tile)

 
 
  
  
  
   
  //banana.lifetime = 200;
  
  
  banana.depth = monkey.depth;
  banana.depth = monkey.depth + 1;
  
  
  foodGroup.add(banana);
  
}
  }
  









