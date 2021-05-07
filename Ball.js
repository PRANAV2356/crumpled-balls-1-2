class Ball{
    constructor(x,y,radius){
        var d={density:0.3}
        this.a=Bodies.circle(x,y,radius,d)
        this.r=radius
        World.add(world,this.a)
        this.x=loadImage("paper.png")
    }
    Display(){
        imageMode(RADIUS)
        image(this.x,this.a.position.x,this.a.position.y,this.r,this.r)
    }
}