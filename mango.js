class Mango{
    constructor(x,y,r){
        
        this.image = loadImage("mango.png");

        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        
    }

    display(){
        
        ellipseMode(CENTER);    
        
        ellipse(0,0,this.r,this.r);
        }
}