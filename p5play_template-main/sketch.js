var box; 


function setup() {
  createCanvas(400,400);
  box=createSprite(50,50,50,50); 
}

function draw() 
{
  background("black");
  drawSprites();
  if(keyDown("left")){
    box.x=box.x-8;
  }
  if(keyDown("right")){
    box.x=box.x+8;
  }
  if(keyDown("up")){
    box.y=box.y-8;
  }
  if(keyDown("down")){
    box.y=box.y+8;
  }
}





