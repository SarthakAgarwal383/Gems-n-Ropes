class MouseSling{
    constructor(bodyB){

        var options={
            body:bodyB


        }
        this.sling= MouseConstraint.create(engine,options);
        this.bodyB=bodyB;

        World.add(world,this.sling);


    }
    display(){

        var p= this.sling.position;
        var d= this.sling.body.position;

        push();
        stroke("red");
        line(p.x,p.y,d.x,d.y);
        pop();
    }


}