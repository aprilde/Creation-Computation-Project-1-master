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



  // rotateX(angle);
  // rotateY(angle);
  // rotateZ(angle);

  var varX = (400 * (sin(angle)));
  var varY = (50 * (cos(angle)));



  translate(-250, -250);
  beginShape();
  vertex(0 - varX, 0, 0, 0, 0);
  vertex(500 + varX, 0 + varY, 0, 1, 0);
  vertex(500 - varX * 0.5, 500 + varY, 0, 1, 1);
  vertex(0 - varX * 0.1, 500 + varY * 0.5, 0, 0, 1);
  endShape(CLOSE);
  varY += 0.02;
  angle += 0.04
  // angle += 0.004;
}
