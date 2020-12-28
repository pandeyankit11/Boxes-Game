const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1075,415,250,15);
    platform = new Ground(336,268, 330, 15);

    box1 = new Box(250,235,40,50);
    
    box2 = new Box(280,235,40,50);
    box3 = new Box(310,235,40,50);
    box4 = new Box(340,235,40,50);
    box5 = new Box(370,235,40,50);
    box6 = new Box(400,235,40,50);
    box7 = new Box(430,235,40,50);
    box8 = new Box(280,195,40,50);
    box9 = new Box(310,195,40,50);
    box10 = new Box(340,195,40,50);
    box11 = new Box(370,195,40,50);
    box12 = new Box(400,195,40,50);
    box13 = new Box(310,155,40,50);
    box14 = new Box(340,155,40,50);
    box15 = new Box(370,155,40,50);
    box16 = new Box(340,115,40,50);
    box17 = new Box(1020,405,40,50);
    box18 = new Box(1050,405,40,50);
    box19 = new Box(1080,405,40,50);
    box20 = new Box(1110,405,40,50);
    box21 = new Box(1130,405,40,50);
    box22 = new Box(1050,365,40,50);
    box23 = new Box(1080,365,40,50);
    box24 = new Box(1100,365,40,50);
    box25 = new Box(1080,325,40,50);



    bird = new Bird(750,280);

    
    slingshot = new SlingShot(bird.body,{x:750, y:270});
}

function draw(){
    background(200);
    Engine.update(engine);
    strokeWeight(5);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    ground.display();
    bird.display();
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}