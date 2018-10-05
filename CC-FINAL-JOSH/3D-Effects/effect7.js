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
  scale(-1, -1);

  var varY = (400 * (cos(angle)) + 1000);

  let camX = map(varY, 0, width, -200, 200);
  camera(camX, 0, (height/2) / tan(PI / 6), camX, 0, 0, 0, 1, 0);

  // Camera Vibration
  // let camX = random(-5, 5);
  // let camY = random(-5, 5);
  // let camZ = random(-5, 5);
  // camera(camX, camY, camZ + (height/2) / tan(PI / 6), camY, camZ, camX, 0, 1, 0);

  // var loop = (cos(angle)) * 20;

  // let fov = map(loop -60, 0, width, 0, PI);
  // let cameraZ = (height / 2) / tan((PI/3) / 2.0);
  // perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

  // orthro();


  texture(video);


  for (let x = -200; x < 200; x += 50) {
    push();
    translate(x, 0, x + 350);
    rotateX(angle);
    rotateY(angle * 0.01);
    rotateZ(angle * 0.01)
    noStroke();
    box(50);
    pop();
  }

  translate(0, )

  angle += 0.02;
}
