const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var object;

function setup() {
  var canvas = createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  objects = Bodies.rectangle(200,100,50,50);
  World.add(world,object)
  console.log(object);
}

function draw() {
  background("black");  
  rectMode(CENTER);
  rect(400, 200, 50, 50);
  //drawSprites();
}