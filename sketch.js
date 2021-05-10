var tom , tomimg1,tomimg2,tomimg3;
var jerry , jerryimg1,jerryimg2,jerryimg3;
var back ;
function preload() {
    //load the images here
    back= loadImage("images/garden.png");
    tomimg1= loadImage("images/cat1.png");
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3=loadImage("images/cat4.png");

    jerryimg1=loadImage("images/mouse1.png");
    jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryimg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(875,600);
    tom.addImage(tomimg1);
    tom.scale= 0.2;

    jerry = createSprite(200,600);
    jerry.addImage(jerryimg1);
    jerry.scale=0.2;



}

function draw() {

    background(back);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addImage("tomlast",tomimg3);
        tom.changeAnimation("tomlast");
        tom.x=300;

        jerry.addAnimation("jerrylast",jerryimg3);
        jerry.changeAnimation("jerrylast");

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-3;
      tom.addAnimation("tom_moving",tomimg2);
      tom.changeAnimation("tom_moving");

      jerry.addAnimation("jerry_teasing",jerryimg2);
      jerry.changeAnimation("jerry_teasing");
  }


}
