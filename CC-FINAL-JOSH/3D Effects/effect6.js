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
  translate(10, -200, -40);


  var ranNum = random(30.05, 30);

  // position torus
  rotateX(30);
  rotateY(141.370);
  rotateZ(ranNum);
  torus(1000, 350);
}
