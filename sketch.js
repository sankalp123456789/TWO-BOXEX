var fixedrect, moveingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="red";
  moveingrect=createSprite(200,200,50,80);
  moveingrect.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  moveingrect.x = World.mouseX;
  moveingrect.y = World.mouseY;
  console.log(moveingrect.x-fixedrect.x);
  if(moveingrect.x-fixedrect.x < fixedrect.width/2 + moveingrect.width/2 && 
     fixedrect.x-moveingrect.x <fixedrect.width/2 + moveingrect.width/2
     &&moveingrect.y-fixedrect.y < fixedrect.height/2 + moveingrect.height/2 && 
     fixedrect.y-moveingrect.y <fixedrect.height/2 + moveingrect.height/2){
       moveingrect.shapeColor="purple";
       fixedrect.shapeColor="purple";
     }
     else{
      moveingrect.shapeColor="blue";
      fixedrect.shapeColor="red";
     }
  drawSprites();
}