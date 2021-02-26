const Engine = Matter.Engine
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

var dropdown = [];
function preload(){
    //boyimg = loadImage("bboy.png");
    thunder1img = loadImage("thunder1.png")
    thunder2img = loadImage("thunder2.png")
}

function setup(){
    var canvas = createCanvas(400,600);

    
    engine = Engine.create();
    world = engine.world;


    boy = new umbrella(200,420,80);
    Engine.run(engine);

   
        
    
}

function draw(){
    background("black");
    maxdrops = 100;
    if(frameCount%20==0){
        for(var i=0; i < maxdrops; i++)
        {
            dropdown.push(new drops(random(0,400), random(0,400),5));
        }
    }

    for(var i = 0; i < dropdown.length; i++){
        dropdown[i].display();

    
}
    
    boy.display();

}   

