var angle = 0;
var x = 0;




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
}



  function draw() {
  background(255);
  texture(video);
  noStroke();

  // Move object to place camera inside.
  translate(10, -200, mouseX -700);

    // var zCamera = (50 * (sin(angle))) + 270;

  var yCamera = (50 * (sin(angle))) + 270;


  var newMouse = map(mouseX, 0, width, 0, 90);


  // position torus
  rotateX(30);
  rotateY(141.370);
  console.log(newMouse);
  rotateZ(30);
  torus(1000, 350);
}
