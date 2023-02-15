var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  


  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

 var select_sprites = Math.round(random(1,3));

 if(frameCount %80 ==0){

  if(select_sprites == 1){
    creatApples();
    

  }
 else if(select_sprites == 2){
   creatOrange();

 }
 else{
  creatRed();

 }
 }

  drawSprites();
  
  
}

function creatApples(){
    var apple =createSprite(random(50,350), 40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    apple.lifetime = 150;

}

function creatOrange(){
  var orangeF =createSprite(random(50,350), 40,10,10);
  orangeF.addImage(orangeImg);
  orangeF.scale = 0.08;
  orangeF.velocityY = 3;
  orangeF.lifetime = 150;

}

function creatRed(){
  var redL =createSprite(random(50,350), 40,10,10);
  redL.addImage(redImg);
  redL.scale = 0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;

}