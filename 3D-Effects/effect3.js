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
  scale(1.0, -1.0);

  // Smooth zoom in and out from values 220 to 320.
  var varX = (20 * (sin(angle))) + 5;
  var varY = (20 * (sin(angle))) + 5;
  translate(0, 0, 450);


  // Rotate Sphere
  rotateX(angle);
  rotateY(0);
  rotateZ(0);
  ellipsoid(varX, varY, 100);
  angle += 0.004;
  varX += 0.02
}
