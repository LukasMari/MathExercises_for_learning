var angle;

var slider;

function setup() {

  createCanvas(900, 900);
  slider = createSlider(0, 2 * PI, PI / 6, PI / 16);
}


function draw() {
  background(51);
  stroke(255);
  angle = slider.value();
  translate(450, height);
  branch(160);


}

function branch(length) {

  line(0, 0, 0, -length);
  translate(0, -length);
  

  if (length > 5) { // Afwisselen van de 2 takken 
    push();
    rotate(angle);
    branch(length * 0.75);
    pop();
    push();
    rotate(-angle);
    branch(length * 0.75);
    pop();
  }
}