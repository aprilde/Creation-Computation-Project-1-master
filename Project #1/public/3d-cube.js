function setup() {
  createCanvas(1000, 1000, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(255, 255, 255, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  //pass image as texture
  texture(video);
  box(400, 400, 400);
}
