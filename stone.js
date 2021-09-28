class Stone{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body= Bodies.circle(x,y,20,options);
        this.x=x;
        this.y=y;
        this.r=30;
        this.image=loadImage("stone.png");

        World.add(world,this.body);

    }
    display(){

        var p=this.body.position;

        push();
        imageMode(CENTER);
        image(this.image,p.x,p.y,this.r,this.r);
        pop();


    }
}