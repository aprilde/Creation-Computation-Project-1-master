function setup() {
  createCanvas(1000, 1000, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(255, 255, 255, 0);
  rotateX(frameCount * 0.004);
  rotateY(frameCount * -0.002);
  //pass image as texture
  texture(video);
  cone(200, 400, 100);
}
