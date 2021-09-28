class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,600,20,options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);
    }
    display(){
        var p=this.body.position;

        push();
        rectMode(CENTER);
        fill("yellow");
        rect(p.x,p.y,600,20);
        pop();
    }
}