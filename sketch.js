
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5
var roof1,engine,world
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(1600,700)
	engine = Engine.create();
	world = engine.world;
    roof1=new roof(800,200,300,20)
	ball1= new ball(250,300,40)
	ball2= new ball(300,300,40)
	ball3= new ball(350,300,40)
	ball4= new ball(400,300,40)
	ball5= new ball(450,300,40)
	rope1=new rope(ball1.body,roof1.body,-100,0)
	rope2=new rope(ball2.body,roof1.body,-50,0)
	rope3=new rope(ball3.body,roof1.body,0,0)
	rope4=new rope(ball4.body,roof1.body,50,0)
	rope5=new rope(ball5.body,roof1.body,100,0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  roof1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-500,y:0})




}


