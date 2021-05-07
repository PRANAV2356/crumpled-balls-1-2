
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var z
function preload()
{
	z=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

b1=new Ball(200,200,50)
d1=new Dustbin(900,600,10,120)
g1=new Ground(600,670,1200,10)
d2=new Dustbin(1125,600,10,120)


	Engine.run(engine);
  
}
function keyPressed(){
  if(keyCode===32){
Matter.Body.applyForce(b1.a,b1.a.position,{x:100,y:-150})
  }
}


function draw() {
  rectMode(CENTER);
  background("white");
  b1.Display()
  d1.Display()
  g1.Display()
  d2.Display()
  image(z,850,400,300,280)
  drawSprites();
 
}



