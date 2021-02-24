var car,wall;
var speed,weight;



function setup() {
speed=random(55,90);
weight=random(400,1500);
  
createCanvas(1600,400);
 
car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,100);
}


car.velocityX=speed;
function draw() {
  background("black");  
  if(wall.x-car<(car.width)/2){
    car.velocityX=0;
    var deformation=0.5; weight * speed * speed/22509;
   if(deformation>10) {
    car.shapeColor=(0,255,0);
  }
  if(deformation<180&&deformation>100){
    car.shapeColor=(230,230,0);
  }
  if (deformation<100){
    car.shapeColor=(250,0,0);
  }
}
drawSprites();
}