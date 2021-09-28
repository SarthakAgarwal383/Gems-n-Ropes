class Player{
    constructor(x,y){
        var options={
           
            restitution:0.1,

        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height= 50;
        this.image=loadImage("player.png");

        World.add(world,this.body);
    }
    display(){
        
        var p=this.body.position;

        push();
        //fill("yellow");
        imageMode(CENTER);
        image(this.image,p.x,p.y,50,50);
        pop();
    }
}