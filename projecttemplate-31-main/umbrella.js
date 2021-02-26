class umbrella
{
    constructor(x,y,r)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        var options=
        {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body);
        
        this.img = loadImage("bboy.png");
    }

    display()
    {
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        image(this.img,0,0,this.r+140,this.r+140);
        pop();
    }
}