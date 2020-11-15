class Boy{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10,
        }

        this.image = loadImage("boy.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.body);
        
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }
}