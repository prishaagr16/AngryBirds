class Pig extends BaseClass{
    constructor(x, y) {
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
<<<<<<< HEAD
    this.Visibility = 255;
=======
            this.Visibility = 255;
>>>>>>> 9fd700bfbec424d67076597a5cf8e0aecb0fc1a4
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed<3){
        super.display();
      }
      else{
        World.remove(world,this.body);
<<<<<<< HEAD
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
=======
          tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
>>>>>>> 9fd700bfbec424d67076597a5cf8e0aecb0fc1a4
      }
    }
  };
  
