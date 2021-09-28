const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint= Matter.MouseConstraint;

var stone1,stone2,stone3,stone4,stoneIMG;
var ground,player,slingshot;
var bgImg,playerImg;
var slingshot;
var gameState=0;
var gem,xPos,yPos;
var score=0;
var flag = 0;
var gemImg1,gemImg2,gemImg3;
var sidewall1,sidewall2,sidewall3,sidewall4;
var timeleft=10000;
var victoryImg,looseImg,winloose,winloose1;
var ins,insImg;
var GameState="INS";
var ropeSound, insSound, countdown, star;
var party, youwin;
var loose, loose1;
var resetImg, reset1;


function preload(){
stoneIMG=loadImage("stone.png");
bgImg=loadImage("bgImg.jpg");
playerImg=loadImage("player.png");
gemImg1=loadImage("Gem1.png");
gemImg2=loadImage("Gem2.png");
gemImg3=loadImage("Gem3.png");
victoryImg=loadImage("victory.jpg");
looseImg=loadImage("gameover.jpg");
insImg=loadImage("Instructions.png");
ropeSound=loadSound("ropeSound2.mp3");
insSound=loadSound("insSound.mp3");
countdown=loadSound("time.mp3");
star=loadSound("star.mp3");
party=loadSound("party.mp3");
youwin=loadSound("YouWin.mp3");
loose=loadSound("loose.mp3");
loose1=loadSound("game over.mp3");
resetImg=loadImage("replay.png");
}

function setup(){
    var  canvas= createCanvas(600,650);
    engine = Engine.create();
    world = engine.world;

stone1=createSprite(80,150,20,20);
stone1.addImage(stoneIMG);
stone1.scale=0.12;

stone2=createSprite(200,350,20,20);
stone2.addImage(stoneIMG);
stone2.scale=0.12;

stone3=createSprite(320,200,20,20);
stone3.addImage(stoneIMG);
stone3.scale=0.12;

stone4=createSprite(450,450,20,20);
stone4.addImage(stoneIMG);
stone4.scale=0.12;

ground=new Ground(300,600);
player=new Player(300,470);

sidewall1=new SideWall(300,0,600,10);
sidewall2=new SideWall(300,650,600,10);
sidewall3=new SideWall(0,650/2,10,650);
sidewall4=new SideWall(600,650/2,10,650);

slingshot= new SlingShot({x:300,y:470},player.body);

gem=createSprite(randomX(),randomY(),20,20);
gem.addImage(gemImg1);
gem.scale=0.15;

winloose=createSprite(300,300,10,10);
winloose.addImage(looseImg);
winloose.scale=1.5;
winloose.visible=false;

winloose1=createSprite(300,300,10,10);
winloose1.addImage(victoryImg);
winloose1.scale=1.5;
winloose1.visible=false;

ins=createSprite(300,300,10,10);
ins.addImage(insImg);
ins.visible= false;

reset1= createSprite(450,500,10,10);
reset1.addImage(resetImg);
reset1.visible= false;
}

function draw(){
   background(bgImg)

    Engine.update(engine);

    sidewall1.display()
    sidewall2.display()
    sidewall3.display()
    sidewall4.display()
   // slingshot=new SlingShot({x:stone1.x,y:stone1.y},player.body);
   
   if(GameState==="INS"){
     ins.visible= true;

     if(keyDown("space")){
       ins.visible= false;
       insSound.play();
       GameState="play";

     }
   }

   if(GameState=== "play"){

    if(frameCount%100===0){
        r=Math.round(random(1,4));
       if(r===1){
 stone1.x=80;
 stone1.y=random(100,400);
  
       }

  
      else if(r===2){
        stone2.x=200;
        stone2.y=random(100,400);
   
      }
      else if(r===3){
      
        stone3.x=320;
        stone3.y=random(100,400);
      }
      else if(r===4){
        stone4.x=450;
        stone4.y=random(100,400);
   
      }
     }

     if(score%2===0){
       gem.addImage(gemImg2);
     }

     if(mousePressedOver(stone1)){


     slingshot.body.pointA={x:stone1.x,y:stone1.y};
    // slingshot.body.length=10;
    ropeSound.play();
    gameState="attach";
        }
     else{
       ropeSound.stop()
     }
        if(mousePressedOver(stone2)){

          gameState="attach";
           slingshot.body.pointA={x:stone2.x,y:stone2.y};
           ropeSound.play();
            }
            else if(mousePressedOver(stone3)){
              gameState="attach";
            slingshot.body.pointA={x:stone3.x,y:stone3.y};
            ropeSound.play();
                }
                else if(mousePressedOver(stone4)){
                  gameState="attach";
                   slingshot.body.pointA={x:stone4.x,y:stone4.y};
                   ropeSound.play();
                    }
     //fill(0);            
    //rect(gem.x,gem.y,20,20)

if(istouching(player,gem)&& flag === 0){
  gem.x = randomX();
  gem.y=randomY();
  flag = 1;
}

if(flag === 1){
  score =score +1;
  star.play();
  flag =0;
}
if(score<10 && score>=0){
timeleft=timeleft-1;
//countdown.play();
}

 if(timeleft===0 || score>=10){
  timeleft=timeleft+1;

}

if(timeleft===1 && score<10){
  winloose.visible=true;
  countdown.stop();
loose.play();
loose1.play();
}
if(timeleft>=0&& score>=10){
 // winloose.addImage(victoryImg);
  winloose1.visible=true;
  party.play();
  youwin.play();
  
}
if(timeleft<500){
  countdown.play()
}
if(timeleft===1){
  countdown.stop();
  GameState="End";
 

 
}
if(score===10){
  GameState="End"
}

   }


drawSprites();

textSize(30);
fill("red");
text("Score:"+score,50,50);

if(GameState==="End"){
  textSize(30);
  fill("Purple");
  
  text("Press CTRL+R to Restart",200,550);
}


textSize(30);
fill("red");
text("TimeLeft:"+timeleft,400,50);



 ground.display();
 player.display();
 slingshot.display();

}

function mouseReleased(){
  slingshot.body.pointA=null;
  gameState="detach";
}
function istouching(o1,o2){
  if(o1.body.position.x-o2.x<25+o2.width/2 &&
    o2.x-o1.body.position.x<25+o2.width/2 &&
    o2.y-o1.body.position.y<25+o2.height/2 &&
    o1.body.position.y-o2.y<25+o2.height/2){
      return true;

  }
  else {

    return false
  }


}
function randomX(){

  xPos= random(50,550);

return xPos;

}
function randomY(){
   yPos= random(50,500);

return yPos;
}
function reset(){
  Matter.Body.setPosition(gem.body,{x:randomX(),y:randomY()});
}





