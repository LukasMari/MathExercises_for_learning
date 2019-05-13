var locaties = [];
var n = 4;
var controleNummer = 0;
var timePast = 0;
var generatieNummer = 0;

var bestDist;
var besteOplossing;
var img;



function setup() {
  createCanvas(800, 650);

  for (var i = 0; i < n; i++) {
    var vector = createVector(random(width), random(height - 120) + 125);
    locaties[i] = vector;
  }
  var d = calcD(locaties);
  bestDist = d;
  besteOplossing = locaties.slice();

  setInterval(calc, 1000);
}


function draw() {
  background(255);
  fill(0);

  for (var i = 0; i < locaties.length; i++) {
    ellipse(locaties[i].x, locaties[i].y, 8, 8);
  }


  stroke(0);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < locaties.length; i++) {
    vertex(locaties[i].x, locaties[i].y);
  }

  endShape();

  var i = floor(random(locaties.length)); // Nieuwe selectie van verbonden vertexxen
  var j = floor(random(locaties.length));


  swap(locaties, i, j); // lus
  controleNummer = controleNummer + 1;

  var d = calcD(locaties); // afstand berekenen voor de huidige configuratie

  if (d < bestDist) { // Betere oplossing gevonden
    bestDist = d;
    generatieNummer++;
    besteOplossing = locaties.slice();
  }

  stroke(232, 6, 25);
  strokeWeight(3);
  noFill();
  beginShape();
  for (var i = 0; i < besteOplossing.length; i++) {
    vertex(besteOplossing[i].x, besteOplossing[i].y);
  }

  endShape();

  stroke(27, 25, 33);
  textSize(32);

  text('Aantal controles: ' + controleNummer, 5, 50);

  text('Kortste pad afstand: ' + (Math.floor(bestDist) + 1) + ' pixels', 5, 82.5); // +1 als buffer 

  calculateTimePassed(timePast);
  
  text('# oplossingen: ' + generatieNummer, width - 300, 50);
    text('# punten: ' + n, width - 300, 82.5);

}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcD(points) {
  var sum = 0;

  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }

  return sum;
}

function calc(){
  timePast++;
}

function calculateTimePassed(tijd) {
  if (tijd <= 60) {
    text('Tijd: ' + tijd % 60 + ' sec', 5, 112.5);
  }else{ 
    if(tijd <= 3600)
    text('Tijd: ' + (Math.floor(tijd / 60)) + ' min '+ (tijd % 60)  + ' sec', 5, 112.5);

    if(tijd > 3600){
      text('Tijd: ' + Math.floor(Math.floor(tijd / 60)/60) + ' uur ' + (Math.floor(tijd / 60) % 60) + ' min '+ (tijd % 60)  + ' sec', 5, 112.5);
    }
  }
}