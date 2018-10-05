var video;

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas
  background(255);

  video = createCapture(VIDEO); //camera / video
  video.hide(); //hides video
}

function draw() { //canvas
  image(video, 0, 0, width/2, height); //video on canvas, position, dimensions
  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip x-axis backwards
  image(video, 0, 0, width/2, height); //video on canvas, position, dimensions
}
