var car,wall
var speed,weight




function setup() {
  createCanvas(1300,400);

  speed =random(55,90)
  weigt=random(400,1500)

 car = createSprite(50, 200, 50, 50);
 car.velocityX= speed
 car.shapeColor="blue"

 
 wall = createSprite(1290, 200, 60,180);
// wall.shapeColor=(80,80,80)
 
 
 }

function draw() {
  background(220);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX=speed-0;
var deformation=0.5 * weight * speed* speed/22500;
if(deformation>180)
{
    car.shapeColor="green"
}

if(deformation<180 && deformation>100)
{
     car.shapeColor="yellow"
}

if(deformation<100)
{
      car.shapeColor="red"
}
  }

  drawSprites();
}
