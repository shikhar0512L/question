var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var block21,block22,block23,block24,block25
var polygon,SlingShot
block1 = new Blocks(300,275,30,40); 
console.log(block1);
block2 = new Blocks(330,275,30,40);
block3 = new Blocks(360,275,30,40); 
block4 = new Blocks(390,275,30,40);
block5 = new Blocks(420,275,30,40);
block6 = new Blocks(450,275,30,40);
block7 = new Blocks(480,275,30,40); 
//level two 
block8 = new Blocks(330,235,30,40);
block9 = new Blocks(360,235,30,40);
block10 = new Blocks(390,235,30,40);
block11 = new Blocks(420,235,30,40);
block12 = new Blocks(450,235,30,40);
//level three 
block13 = new Blocks(360,195,30,40);
block14 = new Blocks(390,195,30,40);
block15 = new Blocks(420,195,30,40); 
//top
 block16 = new Blocks(390,155,30,40);
  //set 2 for second stand 
  //level
block17 = new Blocks(640,175,30,40);
 block18 = new Blocks(670,175,30,40);
  block19 = new Blocks(700,175,30,40); 
  block20 = new Blocks(730,175,30,40);
   block21 = new Blocks(760,175,30,40); 
   //level two 
   block22 = new Blocks(670,135,30,40);
    block23 = new Blocks(700,135,30,40);
     block24 = new Blocks(730,135,30,40); 
     //top 
     block25 = new Blocks(700,95,30,40);
     
     //polygon holder with slings
polygon=Bodies.circle(50,200,20);
World.add(world.polygon);
imageMode(CENTER)
image(polygon.png,polygon.position.x,polygon.position.y,40,40);
SlingShot= new SlingShot(this.polygon,{x:100,y:200});