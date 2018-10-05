var angle = 0;
var x = 0;




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
}



  function draw() {
  background(255);

  // Camera X-axis <-->
  // let camX = map(mouseX, 0, width, -200, 200);
  // camera(camX, 0, (height/2) / tan(PI / 6), camX, 0, 0, 0, 1, 0);

  // Camera Vibration
  // let camX = random(-5, 5);
  // let camY = random(-5, 5);
  // let camZ = random(-5, 5);
  // camera(camX, camY, camZ + (height/2) / tan(PI / 6), camY, camZ, camX, 0, 1, 0);

  var loop = (cos(angle)) * 20;

  let fov = map(loop -60, 0, width, 0, PI);
  let cameraZ = (height / 2) / tan((PI/3) / 2.0);
  perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

  texture(video);

  push();
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2)

  noStroke();
  box(100);
  pop();

  angle += 0.02;
}
