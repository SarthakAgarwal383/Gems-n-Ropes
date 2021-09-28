class SlingShot{
    constructor(pointA,bodyB){
        var options={
            bodyB:bodyB,
            pointA:pointA,
            stiffness:0.004,
            length:50,
            damping:2
        }
        this.body= Matter.Constraint.create(options);
        this.pointA=pointA;

        World.add(world,this.body);

    }
  
    display(){

        var pointB=this.body.bodyB.position;
        var pA=this.body.pointA;
if(this.body.pointA){
        push();
        strokeWeight(3);
        stroke("red");
        line(pA.x,pA.y,pointB.x,pointB.y);
        pop();
}

    }
    
}