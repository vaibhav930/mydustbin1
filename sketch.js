
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//paperimg

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;



ground = new Ground(400,690,800,20);
paper= new Paper(50,250,50);

	//Create the Bodies Here.
	block1 = new dustbin(340,630,20,100)
	block2 = new dustbin(440,690,180,20) 
	block3 = new dustbin(540,630,20,100)

	Engine.run(engine);
  //Paper.addImage(paperimg)
}


function draw() {
  //rectMode(CENTER);
  background("brown");

ground.display();
paper.display();
block1.display();
block2.display();
block3.display();


//keyPressed();


}
function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-85});


}
}


