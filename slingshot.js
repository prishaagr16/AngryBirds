class Slingshot{
constructor(body1,pointB){
    var options = {
        bodyA : body1,
        pointB : pointB,
        stiffness : 0.04,
        length : 10
    }
    this.sling = Constraint.create(options);
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    this.pointB = pointB;
    World.add(world,this.sling);
}
fly(){
    this.sling.bodyA = null;
}
attach(body){
    this.sling.bodyA = body;
}
display(){
    image(this.sling1,200,80);
    image(this.sling2,170,80);
    if(this.sling.bodyA){    
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke(49,23,8);
    if(pointA.x<220){
    strokeWeight(6);
    line(pointA.x-25,pointA.y,pointB.x-10,pointB.y+25);
    line(pointA.x-25,pointA.y,pointB.x+30,pointB.y+23);
    image(this.sling3,pointA.x-30,pointA.y-10,15,30);
}
else{
    strokeWeight(3);
    line(pointA.x+25,pointA.y,pointB.x-10,pointB.y+25);
    line(pointA.x+25,pointA.y,pointB.x+30,pointB.y+23);
    image(this.sling3,pointA.x+25,pointA.y-10,15,30);
}
    pop();
}
}
}