var img1;
var img2;
var img3;
var img4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage("Artboard 1.png");
  img2 = loadImage("Artboard 2.png");
  img3 = loadImage("Artboard 3.png");
  img4 = loadImage("Artboard 4.png");
}

function draw() {

  image(img1, 0, 0, windowWidth, windowHeight);

}
