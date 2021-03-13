class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,40,40);
    this.image=loadImage("block.png");
  }
  display(){
    push();
    if(this.body.speed<5){
      super.display();
    } else{
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
    }
    pop();
  }
  score(){
    if (this.visibility<0&&this.visibility>-500) {
      score++;
    }
  }
};