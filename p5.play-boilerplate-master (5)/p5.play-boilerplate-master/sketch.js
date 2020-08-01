const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisionsHeight=300;
var engine, world;
var ground;
var divisions= [];
var pinkos = [];
var particles = [];
var divisionheight=300;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k<width; k=k + 80) {
    divisions.push(new Divisions(k,height-divisionheight/2, 10, divisionheight));
    }

    for (var j =40; j <width; j=j+50)
    {
      pinkos.push(new Pinko(j,75));
    }
    for (var j =15; j <width-10; j=j+50)
    {
      pinkos.push(new Pinko(j,175));
    }

 ground = new Ground(600,390,1200,20);
 

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display(); 
  for(k=0;k<divisions.length;k++){
    divisions[k].display();
  } 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
}
for (var k = 0; k < particles.length; k++) {
    particles[k].display();
}
if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
    }
for(var i=0;i<pinkos.length;i++){
  pinkos[i].display()
}

  drawSprites();
}
