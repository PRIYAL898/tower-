class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }

        this.Visibility=225;

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        if(this.body.speed<3){
            World.add(world,this.body);
           
        }
        else{
            World.remove(world,this.body);
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            push();
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
       
    }
}

