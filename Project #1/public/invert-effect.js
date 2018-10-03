var capture;

function setup() {
  createCanvas(720, 400);
  capture = createCapture(VIDEO);
  capture.size(720, 400);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 720, 400);
  filter('INVERT');
  capture.loadPixels();

}
