class Slingshot{
     constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
    
             
         this.sling=Constraint.create(options);
         World.add(world,this.sling);
         this.pointB=pointB;
    
     } 

     attach(body){
         this.sling.bodyA=body;
     }
    
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(7);
            stroke("white");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    
    fly(){
        this.sling.bodyA=null;
    }
    
}