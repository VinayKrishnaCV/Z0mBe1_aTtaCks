class Rectangle {
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        var options={
            isStatic:true,
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        console.log(this.body)
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER);
        var rect;
        var rectGroup;
        rect = createSprite(pos.x,pos.y,this.width,this.height);
        rect.shapeColor="red"
    }
}