class Gem{
    constructor(x,y){

        var options={
            isStatic: true,
            density:1

        }
        this.body= Bodies.rectangle(x,y,20,20,options);
        this.width= 20;
        this.height= 20;

        World.add(world,this.body);


    }
    hide(){
        World.remove(world,this.body);
    }
    display(){
        var p= this.body.position;

        push();
        fill("black");
        rect(p.x,p.y,this.width,this.height);
        pop();
    }
}