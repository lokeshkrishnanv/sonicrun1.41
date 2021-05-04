class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    sonic = createSprite(50,displayHeight/4,10,10);
    sonic.addAnimation("sonic_run",sonic_run);
    sonic.addAnimation("sonic_high",sonic_high);
    sonic.scale = 0.35;

    silver = createSprite(50,displayHeight/2 + 100,10,10);
    silver.addAnimation("silver_run",silver_run);
    silver.addAnimation("silver_high",silver_high);
    silver.scale = 0.04;

    runners = [sonic, silver];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      var index =0;
      var x = 0;
      var  y = 0;

      for(var plr in allPlayers){
        index = index + 1;
        x = allPlayers[plr].xPos;
        y = allPlayers[plr].yPos;
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,50)
      }

    }

    if(keyIsDown(38) && player.index !== null){
      yVel += 0.9;
      if(keyIsDown(37)){
        xVel -= 0.2;
      }
      if(keyIsDown(39)){
        xVel += 0.2;
      }
      player.distance += yVel;
      yVel *= 0.985;
      player.xPos += xVel;
      xVel *= 0.985;
      player.update();
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
