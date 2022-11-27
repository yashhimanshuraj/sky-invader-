//Global variables for images
var bg, sun, s_pan, fan_anim,fan_img,display, g_house_img;
var City,CityI
var Boom,boomI;
var Player,playerI;
var Enemy,EnemyI;
var Enemy_2,Enemy_2I;
var Nuker,NukerI;
var player_sound;
var Enemy_boom,Enemy_boomI;
var score=0;
var Enemy_Missile;
var Enemy_2_Missile;
var Game_Over;
var Enemy_3Image;  
var Enemy_4Image;
var E3,E3I;
var E4,E4I;
var E,EI
//Global variables for Sprites
var g_house, pan1,pan2,fan,fan2;
var egroup;
//Creating a ray group
var rayGroup;

//Creating temprature and voltage variables
var temp = 10
var panel1_voltage =0;
var panel2_voltage=0;
var power_gen = 0;


function preload()
{
  E3 = loadImage("F-16.png");
  E4 = loadImage("F16.png")
  Game_Over = loadImage("GameOver.png")
  Enemy_boomI = loadImage("Enemy Blast.png")
  CityI = loadImage("bg.jpg");
  CityI.velocityY = 0.1
  
  boomI = loadImage("Blast.png");
  PlayerI = loadImage("F - 35.png");
  EnemyI = loadAnimation("Enemy__1.png");
  Enemy_2I = loadImage("Enemy_2.png");
  NukerI = loadImage("Nuker.png");
  Enemy_MissileI = loadImage("Enemy_1_missile.png");
  Enemy_2_MissileI = loadImage("Enemy__2__missile.png");
  sunR = loadImage("sunrays.png");
  sunL = loadImage("sunrays1.png");
  bg = loadImage("bgimage.png");
  s_pan = loadImage("s_panel.png");
 
  //fan_anim.play = false;
  fan_img = loadImage("fan01.png");
  display = loadImage("disp.png");
  g_house_img = loadImage("greenhouse.png");
  jetSound = loadSound("player_sound.mp3")
  //Add animation for moving Fan
  fan_anim= loadAnimation("fan01.png","fan02.png","fan03.png","fan04.png","fan05.png");

  
}

function setup() 
{
  createCanvas(700,700);

  jetSound.play()
   jetSound.setVolume(0.01)
  
  Boom = createSprite(400,200); 
  Boom.addImage(boomI); 
  Boom.scale = 0.2; 
  Boom.visible=false;

  
  Enemy_boom = createSprite(400,200);
  Enemy_boom.addImage(Enemy_boomI)
  Enemy_boom.scale = 0.2;
  Enemy_boom.visible = false;

  Player = createSprite(400,700,10); 
  Player.addImage(PlayerI); 
  Player.scale = 0.5; 
  Player.visible=true;
  Player.debug=true;
  
  Enemy = createSprite(200,20,10); 
  Enemy.addAnimation("plane",EnemyI);
  Enemy.addAnimation("boom",boomI) ;
  Enemy.scale = 0.10; 
  Enemy.velocityY = 2; 
  Enemy.debug=true
  Enemy_2 = createSprite(100,30,10); 
  Enemy_2.addImage("plane",Enemy_2I);
  Enemy_2.addImage("boom",boomI) 
  Enemy_2.scale = 0.2; 
  Enemy_2.velocityY = 5; 
  Enemy_2.debug=true
 
  Nuker = createSprite(600,100,10); 
  Nuker.addImage(NukerI); 
  Nuker.scale = 0.05; 
  Nuker.velocityY = -150;
  Nuker.debug=false;
  Nuker.visible=true; 

  Enemy_Missile = createSprite(200,20,10);
  Enemy_Missile.addImage(Enemy_MissileI);
  Enemy_Missile.scale = 0.05;
  Enemy_Missile.velocityY = 10;
  Enemy_Missile.debug = false
  Enemy_2_Missile = createSprite(100,30,10);
  Enemy_2_Missile.addImage(Enemy_2_MissileI);
  Enemy_2_Missile.velocityY = 5;
  Enemy_2_Missile.scale = 0.05;
  go=createSprite(350,350,10,10);
  go.addImage(Game_Over);
  go.visible=false;
  egroup=new Group();
  
}

function draw() 
{
   image(CityI,0,0,width,height)

   

   // this condition is used to take player plane leftside.
   if(keyDown("LEFT_ARROW"))
    {
     Player.x=Player.x-5
    }

  if (Player.x>=750)
  {
      Player.x=750; 
  }

  if (Player.x<=50)
   {
      Player.x=50
   }
 
  if (Player.y>=750)
    {
     Player.y=750;
    }

  if (Player.y<50)
   {
     Player.y=50;
   }

   // this condition is used to take the player plane rightside. 
  if (keyDown("RIGHT_ARROW"))
    {
     Player.x=Player.x+1
    }

    // This condition is used to take player plane forward.
  if (keyDown("UP_ARROW"))

  {
      Player.y = Player.y-1;
    }

    // This condition is used to launch missile from player hardpoint to enemy.
   if (keyDown("space"))
     {
       Nuker.x = Player.x;
       Nuker.y = Player.y -200;
       Nuker.velocityY = -5;
     }

     // This condition is used to take the player backward.
   

     // When enemy number 1 is touching to the player,enemy number 1 and player should changeanimation into blast. 
    if (Enemy.isTouching(Player))
     {
       Enemy.changeAnimation("boom",boomI);
       go.visible=true
       //Player.changeAnimation("boom",boomI);
     }
  
     
    // When player missile is touching to the enemy number 1,enemy number 1 should boom.
    if(Nuker.isTouching(Enemy))
   {
     Enemy.changeAnimation("boom",boomI);
     //Enemy.lifetime=10;
     score = score+1;
   }

   // When player missile is touching to the enemy number 2,enemy number 2 should boom.
  if (Nuker.isTouching(Enemy_2))
    {
      Enemy_2.changeAnimation("boom",boomI);
      //Enemy_2.lifetime = 10;
      score = score+1;
    }
    
    // When player missile is touching player missile will desappair 
   if(Enemy.isTouching(Nuker))
   {
     Nuker.changeAnimation("boom",boomI)
     Nuker.visible=false;
   }

   // when player is touching Enemy,Enemy will boom and player will not visible. 
  if(Enemy.isTouching(Player))
  {
    Player.changeAnimation("boom",boomI)
    go.visible=true;
    Player.visible=false;
  }

//  if(egroup.isTouching(Player))
//  {
//   Player.changeAnimation("boom",boomI)
//   go.visible=true;
//   Player.visible=false;
//  }


  

  
  
  push();
  noStroke();
  fill(255,255,0)
  text("Score : "+score,620,37)
  
  
  pop();
  spawn_enemy();
  drawSprites();
}

function spawn_enemy()
{
  if(frameCount%20===0)
  {   
    E=createSprite(300,20,10,10);
    E.addImage(E3I);
    E.x=Math.round(round(100,650));
    E.velocityY=3;
    //E.lifetime=10;
    E.scale=0.7;
    egroup.add(E)
  }

}      

