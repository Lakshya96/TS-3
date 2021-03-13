const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform,hexagon,chain1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,backgroundImg;
var score=0;
var gameState="unlaunched";

function preload() {
    backgroundImg = loadImage("dayColour.png");
    getTime();
}

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,250,10);
    platform = new Ground(300, 500, 350, 10);

    box1 = new Box(600,340,70,70);
    box2 = new Box(600,380,70,70);
    box3 = new Box(600,300,70,70);
    box4 = new Box(520,380,70,70);
    box5 = new Box(560,380,70,70);
    box6 = new Box(560,340,70,70);
    box7 = new Box(640,380,70,70);
    box8 = new Box(680,380,70,70);
    box9 = new Box(640,340,70,70);

    box10 = new Box(300,440,70,70);
    box11 = new Box(300,480,70,70);
    box12 = new Box(300,400,70,70);
    box13 = new Box(220,320,70,70);
    box14 = new Box(260,400,70,70);
    box15 = new Box(260,400,70,70);
    box16 = new Box(340,400,70,70);
    box17 = new Box(380,440,70,70);
    box18 = new Box(340,440,70,70);
    box19 = new Box(420,440,70,70);
    box20 = new Box(180,480,70,70);
    box21 = new Box(220,400,70,70);
    box22 = new Box(380,400,70,70);
    box23 = new Box(260,360,70,70);
    box24 = new Box(340,360,70,70);
    box25 = new Box(320,320,70,70);

    hexagon = new Hexagon(100,150,40,40);

    chain1=new Slingshot(hexagon.body,{x:150,y:250});

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    text("Score:"+score,50,50);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();

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

    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    platform.display();
    ground.display();
    hexagon.display();

    chain1.display();
}

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    chain1.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        chain1.attach(hexagon.body);
        gameState="unlaunched";
    }
}

async function getTime() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    var json1 = await response.json();
    console.log(json1);
    var dateTime=json1.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if(hour<18&&hour>=6){
        backgroundImg = loadImage("dayColour.png");
    }
    else{
        backgroundImg = loadImage("nightColour.png");
    }
    console.log(backgroundImg);
}