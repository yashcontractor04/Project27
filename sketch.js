
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(80,220,30);
	bob2 = new Bob(140,220,30);
	bob3 = new Bob(200,220,30);	
	bob4 = new Bob(260,220,30);
	bob5 = new Bob(320,220,30);
	roof = new Roof(200,20,400,40)
	rope1 =new Rope(bob1.body,roof.body,-120,0);
	rope2 =new Rope(bob2.body,roof.body,-60,0);
	rope3 =new Rope(bob3.body,roof.body,0,0);
	rope4 =new Rope(bob4.body,roof.body,60,0);
	rope5 =new Rope(bob5.body,roof.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(101,67,33);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope5.display();
  rope2.display();
  rope3.display();
  rope4.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-60});
	}
}

