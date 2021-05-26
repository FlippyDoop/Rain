class Drops{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.001
        }
        this.drops = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.drops)
    
        
    }
    update(){
        if(this.drops.position.y > height){
            Matter.Body.setPosition(this.drops,{
                x: random(0,400),
                y: 0
            })
        }
    }

    display(){
        var pos = this.drops.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}