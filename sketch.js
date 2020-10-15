const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engineObj, world;
var ground;
var player;

function setup() 
{
  createCanvas(displayWidth-20, displayHeight-120);
  engineObj = Engine.create();
  world = engineObj.world;

  ground = new Ground(displayWidth/2-20,displayHeight-160, 80);
  player  = createSprite(displayWidth/2-700, displayHeight-250, 100,100);

}

function draw() 
{
  //background(0,0,0);  

  Engine.update(engineObj);

  ground.display();

  camera.position.x = player.x;
  camera.position.y = player.y;

  playerMovement();

  drawSprites();
}

function playerMovement()
{
  if(keyWentDown(RIGHT_ARROW))
  {
    player.velocityX = 3;
  }

  if(keyWentUp(RIGHT_ARROW))
  {
    player.velocityX = 0;
  }
}