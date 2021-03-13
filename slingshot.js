class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
        push();
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.pointB;
            strokeWeight(4);
            stroke(158, 22, 22);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    fly(){
        this.chain.bodyA=null;
        }
        attach(body){
            this.chain.bodyA=body;
        }
    }