var locaties = [];
var n = 7;

var bestDist;
var besteOplossing;
var img; 



function setup() {
    createCanvas(400, 300);

    for (var i = 0; i < n; i++) {
        var vector = createVector(random(width), random(height));
        locaties[i] = vector;
        
    }

    var d = calcD(locaties);
    bestDist = d;
    besteOplossing = locaties.slice();

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

    var i = floor(random(locaties.length));
    var j = floor(random(locaties.length));

    swap(locaties, i, j); // lus

    var d = calcD(locaties);

    if(d < bestDist){ // Betere oplossing gevonden
      bestDist = d;
      console.log(bestDist);
      besteOplossing = locaties.slice();
    }

    stroke(232,6,25);
    strokeWeight(3);
    noFill();
    beginShape();
    for (var i = 0; i < besteOplossing.length; i++) {
        vertex(besteOplossing[i].x, besteOplossing[i].y);
      }

    endShape();
    

}

function swap(a , i , j){
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcD(points){
    var sum = 0;

    for (var i = 0; i < points.length-1 ; i++) {
        var d = dist(points[i].x , points[i].y, points[i+1].x , points[i+1].y);
        sum += d;
    }

    return sum;
}


