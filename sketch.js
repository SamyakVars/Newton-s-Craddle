
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3, bob4,bob5, roofObject

var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2 - width/32, 25, width/2, 20);

	bobD=100;

	startX=width/2;
	startY=height/6+500;
	bob1=new bob(startX-bobD*2,startY,bobD);
	bob2=new bob(startX-bobD,startY,bobD);
	bob3=new bob(startX,startY,bobD);
	bob4=new bob(startX+bobD,startY,bobD);
	bob5=new bob(startX+bobD*2,startY,bobD);
	
	

	rope1=new rope(bob1.body,roofObject.body,-bobD*2, 0)

	rope2=new rope(bob2.body,roofObject.body,-bobD*1, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,bobD*1, 0)
	rope5=new rope(bob5.body,roofObject.body,bobD*2, 0)


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-100});

  	}
}




