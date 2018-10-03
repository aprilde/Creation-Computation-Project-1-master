// Variables

var socket = io();

var video;
var button;
var photo = [];
var videoWidth = 720;
var videoHeight = 398;


function setup() {
  // setup canvas
  createCanvas(videoWidth, videoHeight);
  background(0);

  // setup video capture
  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);

  // setup button
  button = createButton('snap');
  button.mousePressed(takeSnap);

  // setup socket
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newPhoto);
}

function newPhoto(data) {
  photo.push(video.get());
}

function takeSnap() {
  console.log('Sending: ' + photo);

  var data = {
    x: photo[0]
  }

  socket.emit("mouse", data);

  photo.push(video.get());
}

function draw() {

    var photoBoothWidth = 480;
    var photoBoothHeight = 265;
    var x = 0;
    var y = 0;

    for (var i = 0; i < photo.length; i++) {
      image(photo[i], x, y, photoBoothWidth, photoBoothHeight);
      x = x + (photoBoothWidth / 2);
      if (x >= videoWidth) {
        x = 0;
        y = y + (photoBoothHeight / 2);
      }
  }
}
  // image(capture, 0, 0);
