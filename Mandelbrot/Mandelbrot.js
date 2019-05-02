var sliderMIN;
var sliderMAX;

function setup() {

  createCanvas(720, 480);
  pixelDensity(1);

  sliderMIN = createSlider(-2.5, 0, -2.5, 0.01);
  sliderMAX = createSlider(0, 2.5, 2.5, 0.01);
  
}


function draw() {
  loadPixels(); // Pixels individueel bewerken voor kleurschakering

  var maxn = 100; // # iteraties
  var maxComplex = 16; // 'Out of bounds waarde'



  for (var x = 0; x < width; x++) { // f(z) = z² + c , mandelbrot functie
    for (var y = 0; y < height; y++) {

      var mina = -1.5; //Hiermee kan je inzoomen op de set Reëele-as
      var maxa = 1.5;

      var minb = -1.5; // Hiermee kan je inzoomen op de set Imaginaire-as
      var maxb = 1.5;

      var a = map(x, 0, width, sliderMIN.value(), sliderMAX.value()); // Reëele-as limiteren.
      var b = map(y, 0, height, sliderMIN.value(), sliderMAX.value()); // Imaginaire-as limiteren. 

      var ca = a; // initiële Constante Complex getal c => a + bi
      var cb = b; // initiële constante Complex getal c => a + bi 

      var n = 0; // Iterator size
      // var z = 0;


      while (n < maxn) { // a²-b² + 2abi , De functie van c²
        var aa = a * a - b * b; // => z² berekenen
        var bb = 2 * a * b; // => z² berekenen

        a = aa + ca; // => volgende iteratie met z² + c
        b = bb + cb; // => volgende iteratie met z² + c

        if (abs(a + b) > maxComplex) { // Creatie van het zwarte veld, out of bounds waarden
          break;
        }

        n++;
      }

      // hier kan je met kleuren prutsen met modulo etc.
      var bright = map(n, 0, maxn, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      var randomColor = map(n, 0, maxn, 0, 1);
      randomColor = (randomColor * 10 ) % 255;

      if (n === maxn) {
        bright = 0;
        
      }

      // Colorcodes
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = randomColor;
      pixels[pix + 2] = randomColor;
      pixels[pix + 3] = 255;
    }
  }

  updatePixels();
}