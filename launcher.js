class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }

        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var bodyA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        strokeWeight(2);

        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
    }
}