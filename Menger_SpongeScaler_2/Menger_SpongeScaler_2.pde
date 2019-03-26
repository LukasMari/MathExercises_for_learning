 float a = 0;
 Box b;
 float scaler = 12.5;
 
 ArrayList<Box> sponge;
 
 void setup() {
   size(400,400, P3D);
   sponge = new ArrayList<Box>();
   Box b = new Box(0,0,0,200);
   sponge.add(b);
 }
 
 void mousePressed(){
   ArrayList<Box> next = new ArrayList<Box>();
   for(Box b : sponge){
    ArrayList<Box> newBoxes = b.generate();
    next.addAll(newBoxes);
   }
   
   sponge = next;
   
   for(Box b: sponge){
     b.r = b.r - scaler;
   }
 }
 
 void draw(){
 background(51);
 stroke(255);
 noFill();
 
 translate(width/2, height/2);
 rotateX(a);
 rotateY(a/2);
  for(Box b : sponge){
  b.show();
  } 
 a += 0.01;
 }
 
