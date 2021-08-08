class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
display()
{
  console.log(this.body.speed);

  if(this.body.speed < 3){
    super.display();
  }else{
    // remove the pig from the world
    World.remove(world,this.body);

  }
}};
