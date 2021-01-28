class Polygon{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            friction:0.03,
        }

        this.image=loadImage("polygon.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
       
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,80,80);
        //pos.x=mouseX;
        //pos.y=mouseY;
        //rectMode(CENTER);
        //console.log(this.body.speed);
        //rect(pos.x,pos.y,this.width,this.height);
       
    }
}