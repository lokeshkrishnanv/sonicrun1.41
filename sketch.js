var back,back_image1,back_image2,back_image3,back_image4,back_image5,
back_image6,back_image7,back_image8,back_image9,back_image10,moving_back,moving;

var ring,Rings,ring_rotate;
var sonic,sonic_run, silver, silver_run, runners;
var enemy,enemy_image1,enemy_image2,enemy_image3,enemy_image4,enemy_image5,
enemy_image6,enemy_image7,enemy_image8,enemy_image9,enemy_image10,enemies,EnemyGroup;

var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;

var chaos_emerald,emerald1,emerald2,emerald3,emerald4,emerald5,emerald6,emerald7;
var line1,line2,line3;
var gameState;
var gameState = PLAY;
var PLAY;
var END;
var rings = 0;
var score = 0;
var emeralds_collected = 0;
var gameover
var youwin

function preload(){
   ring_rotate = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png"
   ,"8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png")

   sonic_run = loadAnimation("soni.png")
   sonic_high = loadAnimation("gold soni.png");
   silver_run = loadAnimation("silver.png")
   silver_high = loadAnimation("gold silver.png");
   
   back_image1 = loadAnimation("back 1.png");
   back_image2 = loadImage("back 2.png");
   back_image3 = loadAnimation("back 3.png");
   back_image4 = loadAnimation("back 4.png");
   back_image5 = loadAnimation("back 5.png");
   back_image6 = loadAnimation("back 6.png");
   back_image7 = loadAnimation("back 7.jpg");
   back_image8 = loadAnimation("back 8.png");
   back_image9 = loadAnimation("back 9.jpg");
   back_image10 = loadAnimation("back 10.jpg");

   emerald1 = loadAnimation("indigo.png");
   emerald2 = loadAnimation("green.png");
   emerald3 = loadAnimation("blue.png");
   emerald4 = loadAnimation("pink.png");
   emerald5 = loadAnimation("red.png");
   emerald6 = loadAnimation("yellow.png");
   emerald7 = loadAnimation("white.png");

   enemy_image1 = loadImage("eggman.png");
   enemy_image2 = loadImage("gold shadow.png");
   enemy_image3 = loadImage("infinite.png");
   enemy_image4 = loadImage("mepi.png");
   enemy_image5 = loadImage("metal soni.png");
   enemy_image6 = loadImage("monster.png");
   enemy_image7 = loadImage("robot.png");
   enemy_image8 = loadImage("rouge.png");
   enemy_image9 = loadImage("shadow.png");
   enemy_image10 = loadImage("zazz.png");

   gameover_image = loadImage("gameover.jpg");
   youwin_image = loadImage("youwin.jpg");

   moving = loadAnimation("moving background.png");


   chaos = loadAnimation("chaos emeralds.png")

   rings = 0;
   score = 0;
   emeralds_collected = 0;
}

function setup() {
    createCanvas(displayWidth, displayHeight)
    database = firebase.database();
    gameState = 0;
    distance = 0;
    xVel = 0;
    yVel = 0;
    game = new Game();
    game.getState();
    game.start();

    imageMode(CENTER);
    back = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    
    back.addAnimation("back_image1",back_image1);
    back.addAnimation("back_image2",back_image2);
    back.addAnimation("back_image3",back_image3);
    back.addAnimation("back_image4",back_image4);
    back.addAnimation("back_image5",back_image5);
    back.addAnimation("back_image6",back_image6);
    back.addAnimation("back_image7",back_image7);
    back.addAnimation("back_image8",back_image8);
    back.addAnimation("back_image9",back_image9);
    back.addAnimation("back_image10",back_image10);
   
    ringGroup = new Group();
    emeraldGroup = new Group();
    EnemyGroup = new Group();

    chaos_emerald = createSprite(displayWidth/2 - 160, displayHeight/8 - 80, 10, 10);
    chaos_emerald.addAnimation("chaos",chaos);
    chaos_emerald.scale = 0.1;
    
    ring = createSprite(displayWidth/8 - 160, displayHeight/16 - 25);
    ring.addAnimation("ring_rotate", ring_rotate);
    ring.scale = 0.25;



    

    line1 = createSprite(displayWidth/2, displayHeight/16, displayWidth, 1);
    line2 = createSprite(displayWidth/2, displayHeight - 160, displayWidth, 1);
    line2.visible = true; 
    line3 = createSprite(displayWidth/2, displayHeight, displayWidth, 1);

    imageMode(CENTER)
    gameover = createSprite(displayWidth/2,  displayHeight/2,displayWidth, displayHeight);
    gameover.addImage(gameover_image);
    gameover.scale = 1.9;
    gameover.visible = false;

    youwin = createSprite(350,350,10,10);
    youwin.addImage(youwin_image);
    youwin.scale = 4;
    youwin.visible = false;
}

function draw() {
    background("white") 
    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
    
    
if(gameState === 1){

   
    if(score === 2000){
        back.changeAnimation("back_image2",back_image2);
        back.scale = 1.2;
    }
    if(score === 4000){
        back.changeAnimation("back_image3",back_image3);
        back.scale = 0.30;
    }
    if(score === 6000){
        back.changeAnimation("back_image4",back_image4);
        back.scale = 0.8;
    }
    if(score === 8000){
        back.changeAnimation("back_image5",back_image5);
        back.scale = 2;kim;l,p
    }
    if(score === 10000){
        back.changeAnimation("back_image6",back_image6);
        back.scale = 5.2;
    }
    if(score === 12000){
        back.changeAnimation("back_image7",back_image7);
        back.scale = 1.8;
    }
    if(score === 14000){
        back.changeAnimation("back_image8",back_image8);
        back.scale = 1.8;
    }
    if(score === 16000){
        back.changeAnimation("back_image9",back_image9);
        back.scale = 0.96;
    }

    if(score === 18000){
        back.changeAnimation("back_image10",back_image10);
        back.scale = 1.495;
    }
    if(score === 20000){
        back.changeAnimation("back_image1",back_image1);
        back.scale = 1;
    }

   if(keyWentDown("up")){
      sonic.velocityY = -5;
   }else if(keyWentUp("up")){
      sonic.velocityY = 0;
 }
    if(keyWentDown("down")){
      sonic.velocityY = 5;
    }else if(keyWentUp("down")){
      sonic.velocityY = 0;
    }

    if(sonic.isTouching(ringGroup)){
      ringGroup.destroyEach();  
      rings = rings + 1;
    }
   
    if(rings === 25){
        sonic.changeAnimation("sonic_high",sonic_high);
        sonic.scale = 0.03;
        rings = 0
    }

    if(emeralds_collected === 7){
        sonic.changeAnimation("sonic_high",sonic_high);
        sonic.scale = 0.03;
        emeralds_collected = 0;
    }

    if(sonic.isTouching(emeraldGroup)){
        emeraldGroup.destroyEach();
        emeralds_collected = emeralds_collected + 1;
    }

    if(score === 20000){
        youwin.visible = true;
        win();
    }

    Rings(); 
    enemies();
    emeralds();
   
    if(EnemyGroup.isTouching(sonic)){
        game.update(2);
            END();
        
    }

    if(keyWentDown("up")){
        silver.velocityY = -5;
     }else if(keyWentUp("up")){
        silver.velocityY = 0;
   }
      if(keyWentDown("down")){
        silver.velocityY = 5;
      }else if(keyWentUp("down")){
        silver.velocityY = 0;
      }
  
      if(silver.isTouching(ringGroup)){
        ringGroup.destroyEach();  
        rings = rings + 1;
      }
     
      if(rings === 25){
          silver.changeAnimation("silver_high",silver_high);
          silver.scale = 0.03;
          rings = 0
      }
  
      if(emeralds_collected === 7){
          silver.changeAnimation("silver_high",silver_high);
          silver.scale = 0.03;
          emeralds_collected = 0;
      }
  
      if(silver.isTouching(emeraldGroup)){
          emeraldGroup.destroyEach();
          emeralds_collected = emeralds_collected + 1;
      }
  
      if(score === 20000){
          youwin.visible = true;
          win();
      }
     
      if(EnemyGroup.isTouching(silver)){
          game.update(2);
         END();     
          
      }
}  
  

/*   sonic.bounceOff(line1);
   sonic.collide(line2);

   silver.bounceOff(line1);
   silver.collide(line2);*/

   drawSprites();
    textSize(20);
    stroke("gold");
    strokeWeight(5);
    fill("white");
    text(": " + rings, displayWidth/8 - 140, displayHeight/16 - 20);
 
    stroke("lightblue");
    score = score + Math.round(getFrameRate()/30); 
    text("Score: " + score,displayWidth/4 - 100, displayHeight/16 - 20);

    text(": " + emeralds_collected,displayWidth/2 - 100, displayHeight/8 - 75)
    fill("black");
    text("Reach score 2000 multiplier to change background.",displayWidth/16 - 45, displayHeight - 100)
    text("Get 25 rings or 7 chaos emralds for Gold Sonic",displayWidth/16 - 45, displayHeight - 130)
    text("Want to play again even in the middle of a game. Press CTRL + R",displayWidth/16 - 45, displayHeight - 70)
    text("If it does not work, click on reset and refresh the page",displayWidth/16 - 45, displayHeight - 40)
    

}

function Rings(){
    if(frameCount % 80 === 0){

        var ring = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),30,30);
        ring.addAnimation("ring_rotate", ring_rotate);
        ring.scale = 0.25;
        ring.velocityX = (random(-25,-1));
        
    
        ring.y = Math.round(random(70,610));
        ringGroup.add(ring);
    
   }
}

function enemies(){
   if(frameCount % 35 === 0){
       enemy = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
       enemy.velocityX = -(5 + score/1000);
       

       var rand = Math.round(random(1,10))
       switch(rand){
           case 1: enemy.addImage(enemy_image1);
           enemy.scale = 0.04;
           break;
           case 2: enemy.addImage(enemy_image2);
           enemy.scale = 0.08;
           break;
           case 3: enemy.addImage(enemy_image3);
           enemy.scale = 0.04;
           break;
           case 4: enemy.addImage(enemy_image4);
           enemy.scale = 0.04;
           break;
           case 5: enemy.addImage(enemy_image5);
           enemy.scale = 0.07;
           break;
           case 6: enemy.addImage(enemy_image6);
           enemy.scale = 0.03;
           break;
           case 7: enemy.addImage(enemy_image7);
           enemy.scale = 0.5;
           break;
           case 8: enemy.addImage(enemy_image8);
           enemy.scale = 0.5;
           break;
           case 9: enemy.addImage(enemy_image9);
           enemy.scale = 0.08;
           break;
           case 10: enemy.addImage(enemy_image10);
           enemy.scale = 0.02;
           break
           default: break;
       }
           enemy.lifetime = 500;
           EnemyGroup.add(enemy);
           enemy.debug = false;
   }
}

function emeralds(){
    if(score === 1000 || score === 8000 || score === 15000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald1",emerald1);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    } 
    if(score === 2000 || score === 9000 || score === 16000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald2",emerald2);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    }
    if(score === 3000 || score === 10000 || score === 17000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald3",emerald3);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    } 
    if(score === 4000 || score === 11000 || score === 18000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald4",emerald4);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    }
    if(score === 5000 || score === 12000 || score === 19000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald5",emerald5);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    } 
    if(score === 6000 || score === 13000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald6",emerald6);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
   }
   if(score === 7000 || score === 14000 || score === 20000){
    var chaos_emerald = createSprite(displayWidth,Math.round(random(90,displayHeight - 200)),10,10);
    chaos_emerald.addAnimation("emerald7",emerald7);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
   }
}

function win(){
    score = 0;
    sonic.velocityY = 0;
    EnemyGroup.setVelocityEach(0);
    score.visible = false;
    rings = 0;
    emeralds_collected = 0;
    rings.visible = false;
    EnemyGroup.visible = false;
}

function END(){
    score = 0;
              rings.visible = false;
              EnemyGroup.visible = false;
              gameover.visible = true;
              silver.velocityY = 0;
              enemy.velocityX = 0;
              EnemyGroup.setVelocityEach(0);
              rings = 0;
              emeralds_collected = 0;
              gameState = END;
}