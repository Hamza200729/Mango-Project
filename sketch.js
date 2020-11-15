
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render; 

var boy,mango1,mango2,mango3,mango4,mango5,mango6,stoneObj;
var launchingForce = 100;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(1100,300,30,0);
	mango2 = new Mango(1170,130,30,0);
	mango3 = new Mango(1010,140,30,0);
	mango4 = new Mango(1000,70,30,0);
	mango5 = new Mango(1100,70,30,0);
	mango6 = new Mango(1000,230,30,0);

	stoneObj = new Stone(600,300,70,70,0);

	boy = new Boy(stoneObj.body,{x:200,y:200});
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  textSize(25);
  text("Press Space To Get A Second Chance To Play ",50,50);
  image(boy,200,340,200,300);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
	
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);

  drawSprites();
 
}

function detectCollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position;
	stoneObj.Body.position = lstone.body.position;

	var distance = dist(stoneObjBodyPosition.x , stoneObjBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}

