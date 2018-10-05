var angle = 0;
var x = 0;



function setup() {
  createCanvas(1366, 738, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
}



  function draw() {
  background(255);
  texture(video);
  rectMode(CENTER);
  noStroke();


  // Smooth zoom in and out from values 220 to 320.
  var zCamera = (30 * (sin(angle))) + 545;
  translate(0, 0, zCamera);


  // Rotate Sphere
  rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle);
  sphere(100, 100, 100);
  angle += 0.002;
  zCamera += 0.02
}
