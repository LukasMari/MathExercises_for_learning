float angle = 0; // Hiermee kan je via COS voor reeële vlak en SIN voor complex vlak de animatie krijgen ipv manueel

void setup() {
  size(640, 360);
  colorMode(HSB, 1);
}
void draw() {

   //float ca = map(mouseX, 0, width, -1, 1);//-0.70176;
 //  float cb = map(mouseY, 0, height, -1, 1);//-0.3842;

  float ca = cos(angle* PI);//sin(angle);
  float cb = sin(angle);

  angle += 0.02;

  background(255);



  
  float w = 5;
  float h = (w * height) / width;

  
  float xmin = -w/2;
  float ymin = -h/2;


  loadPixels();

 
  int maxiterations = 100;

  
  float xmax = xmin + w;

  float ymax = ymin + h;

  float dx = (xmax - xmin) / (width);
  
  float dy = (ymax - ymin) / (height);

  // Start y
  float y = ymin;
  for (int j = 0; j < height; j++) {
    // Start x
    float x = xmin;
    for (int i = 0; i < width; i++) {

      // effectieve test op toepassing mandelbrot/ Julia, Julia set maakt gebruik van constanten
      
      float a = x;
      float b = y;
      int n = 0;
      while (n < maxiterations) {
        float aa = a * a;
        float bb = b * b;
        // check voor wanneer waarde oneindig wordt
        if (aa + bb > 4.0) {
          break;  // Bail
        }
        float twoab = 2.0 * a * b;
        a = aa - bb + ca; // Hier wordt die constante van de muis toegevoegd om mee verder te itereren
        b = twoab + cb; // same
        n++;
      }

      
      if (n == maxiterations) {
        pixels[i+j*width] = color(0);
      } else {
        // Indien het niet naar oneindig gaat het punt in het complexe vlak geven we een kleur
        float hu = sqrt(float(n) / maxiterations);
        pixels[i+j*width] = color(hu, 255, 150);
      }
      x += dx;
    }
    y += dy;
  }
  updatePixels();
  println(frameRate);
}
