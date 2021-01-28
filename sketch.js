const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var box31,box32,slingshot,polygon,backGroundImage,bg;

var gamestate="onSling";

function preload() {
    changeBg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1=new Ground(600,380,350,10);
    ground2=new Ground(1030,200,250,10);
    
    polygon=new Polygon(70,310,80,80);

    
    slingshot=new Slingshot(polygon.body,{x:80,y:320});

    box1=new Box(500,355,40,40);
    box2=new Box(540,355,40,40);
    box3=new Box(580,355,40,40);
    box4=new Box(620,355,40,40);
    box5=new Box(660,355,40,40);
    box6=new Box(700,355,40,40);
    box7=new Box(540,315,40,40);
    box8=new Box(580,315,40,40);
    box9=new Box(620,315,40,40);
    box10=new Box(660,315,40,40);
    //box11=new Box(940,315,40,40);
    box12=new Box(560,275,40,40);
    box13=new Box(600,275,40,40);
    box14=new Box(640,275,40,40);
    box15=new Box(580,235,40,40);
    box16=new Box(620,235,40,40);
    box17=new Box(600,195,40,40);


    box18=new Box(960,180,40,40);
    box19=new Box(1000,180,40,40);
    box20=new Box(1040,180,40,40);
    box21=new Box(1080,180,40,40);
    box22=new Box(1120,180,40,40);
    box23=new Box(980,140,40,40);
    box24=new Box(1020,140,40,40);
    box25=new Box(1060,140,40,40);
    box26=new Box(1100,140,40,40);
    box27=new Box(1000,100,40,40);
    box28=new Box(1040,100,40,40);
    box29=new Box(1080,100,40,40);
    box30=new Box(1020,60,40,40);
    box31=new Box(1060,60,40,40);
    box32=new Box(1040,20,40,40);
    


}

function draw(){
    if(backGroundImage){background(backGroundImage,600,200,1200,400)};
    Engine.update(engine);

    
    ground1.display();
    ground2.display();
    
    slingshot.display();
    
    polygon.display();
    
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
    //box11.display();
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
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    text("Press Space Bar to play again",200,25);
    textSize(30);
    
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}

async function changeBg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);
    if(hour>=0600 && hour<=1700){
        bg="image/day.jpg";
    }else{
        bg="image/night.png";
    }
    backGroundImage=loadImage(bg);
    
}
