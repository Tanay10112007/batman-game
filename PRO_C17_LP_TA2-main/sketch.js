var batman,coin,ball;
var batmanImg,coinImg,ballImg;
var ground;
var coinGroup,ballGroup;
function preload(){
    batmanImg=loadImage("batman2.png");
    coinImg=loadImage("coin.png");
    ballImg=loadImage("fire.png");

}
function setup(){
    createCanvas(1200,600);
    batman=createSprite(200,500,20,20);
    batman.addImage(batmanImg);
    batman.scale=0.4;
    
    ground=createSprite(600,550,1200,20);
    ground.velocityX=-4;
    coinGroup=new Group();
    ballGroup=new Group();
}
function draw(){
    background(0);
    spawnCoins();
    spawnObstacles();
    drawSprites();
}
function spawnCoins(){
    if(frameCount%150===0){
        coin=createSprite(1220,50,20,20);
        coin.scale=0.3;
        coin.velocityX=-4;
        coin.y=Math.round(random(100,500));
        coin.lifetime=400;
        coin.depth=batman.depth;
        batman.depth=batman.depth+1;
        coinGroup.add(coin);
        
    }
}
function spawnObstacles(){
    if(frameCount%500===0){
        ball=createSprite(1220,250,20,20);
        ball.scale=0.4;
        ball.velocityX=-4;
        ball.y=Math.round(random(100,500));
        ball.lifetime=400;
        ballGroup.add(ball);


    }
}