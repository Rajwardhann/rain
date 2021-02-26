const Engine = Matter.Engine
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

var dropdown = [];
function preload(){
    //boyimg = loadImage("bboy.png");
    thunder1img = loadImage("thunder1.png");
    thunder2img = loadImage("thunder2.png");

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
    drawSprites();
    if(frameCount%80 === 0)
    {
        rand = Math.round(random(1,2));
        var thunder = createSprite(random(10,370), random(10,30),10,10);
        switch(rand)
        {
            case 1: thunder.addImage(thunder1img);
            break;
            case 2: thunder.addImage(thunder2img);
            break;
            
        }

        thunder.scale = random(0.3,0.6);
    }

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

