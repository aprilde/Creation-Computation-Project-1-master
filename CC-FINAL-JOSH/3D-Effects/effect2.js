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


  // Smooth zoom in and out from values 220 to 320.
  var varY = (35 * (sin(angle))) + 20;
  translate(0, 0, 501);


  // Rotate Sphere
  rotateX(0);
  rotateY(angle);
  rotateZ(0);
  ellipsoid(100, varY, 100);
  angle += 0.002;
  varY += 0.02
}
