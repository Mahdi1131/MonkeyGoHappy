
var monkey, monkey_running
var banana ,bananaImage, obstacleImage, bananaGroup;
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey= createSprite(80, 319, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  monkey.depth = 20;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.depth = 19;
  console.log(ground.x);

  obstacleGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
  background(255);
  
  
  
  if(ground.x < 0){
    ground.x = ground.width/2
     }
  
  if(keyDown("space")){
     monkey.velocityY = -25;
     }
  monkey.velocityY = monkey.velocityY + 8;
  monkey.collide(ground);
  
  spawnObstacles();
  
  drawSprites();
  
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacles = createSprite(400,320,40,10);
  
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
   obstacles.addImage(obstacleImage);
    
     //assign lifetime to the variable
    obstacles.lifetime = 80;
    
    spawnBananas();
    
    //add each cloud to the group
    obstacleGroup.add(obstacles);
   }
}

function spawnBananas(){
  if(frameCount %60 === 0){
     var bananasSpawn = createSprite(600,120,40,10);
    bananasSpawn.y = Math.round(random(80,120));
    bananasSpawn.addImage(bananaImage);
    bananasSpawn.scale = 0.1;
    bananasSpawn.velocityX = -3;
    
    bananasSpawn.lifetime = 200;
    
    bananaGroup.add(bananasSpawn);
    

     }
}


