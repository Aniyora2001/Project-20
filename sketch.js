
var cat,catRunning,catSitting,mouseTeasing,mouseRunning,mouse,garden,gradenImage;

function preload() {
    //load the images here
    catRunning=loadAnimation("cat4.png","cat2.png","cat3.png");
    catSitting=loadImage("cat1.png");
    mouseTeasing=loadAnimation("mouse2.png","mouse3.png");
    mouseRunning=loadAnimation("mouse1.png","mouse4.png");
    gardenImage= loadImage("garden.png")
    

}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat= createSprite(20,20,20,20);
    //cat.addAnimation("running",catRunning);
    cat.addImage("sitting",catSitting);
    cat.scale=0.2;

    mouse= createSprite(30,30,30,30);
    mouse.addAnimation("teasing",mouseTeasing);
    mouse.addAnimation("running",mouseRunning);
    mouse.scale=0.2;

    garden= createSprite(1000,800);
    garden.addImage(gardenImage);


}

function draw() {

    background(255);

    keyPressed();

   /* if(keyDown("up"))
    {
        cat.velocityY=-2;
    }

    if (keyDown("down"))
    {
        cat.velocityY=2;
    }

    if(keyDown("left"))
    {
        cat.velocity=-2;
    }

    if(keyDown("right"))
    {
        cat.velocityX=2;
    }*/
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width/2 -mouse.width/2)
    && cat.y-mouse.y < (cat.height/2- cat.height/2))
    {
        mouse.velocityX=0;
        cat.velocityX=0;
        cat.velocityY=0;
    }

    drawSprites();
}


function keyPressed()
{
if(keyPressed===LEFT_ARROW)
    {
        mouse.changeAnimation("running")
        cat.addAnimation(catRunning)
        cat.changeAnimation("running")
       // cat.velocityX=-2;
        mouse.velocityX=-2
    }
//For moving and changing animation write code here


}
