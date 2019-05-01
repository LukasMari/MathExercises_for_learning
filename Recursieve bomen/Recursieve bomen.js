var angle = 0;

var slider;

function setup() {

  createCanvas(400, 400);
  slider = createSlider(0, 2 * PI, PI / 4, 0.001);
}


function draw() {
  background(51);
  stroke(255);
  angle = slider.value();
  translate(200, height);
  branch(100);


}

function branch(length) {

  line(0, 0, 0, -length);
  translate(0, -length);
  

  if (length > 4) { // Afwisselen van de 2 takken 
    push();
    rotate(angle);
    branch(length * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(length * 0.67);
    pop();
  }
}