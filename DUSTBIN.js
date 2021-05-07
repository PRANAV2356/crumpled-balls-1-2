class Dustbin{
    constructor(x,y,width,height){
        var b={isStatic:true}
        this.a=Bodies.rectangle(x,y,width,height,b)
        this.w=width
        this.h=height
        World.add(world,this.a)
    }
    Display(){
        rectMode(CENTER)
        rect(this.a.position.x,this.a.position.y,this.w,this.h)
    }
}