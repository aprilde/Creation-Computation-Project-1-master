var video;
var vScale = 16;
var rgn;
var t; 
var snapshots = [];
var counter = 0;
var total;
var x = 0;
var effect1;
var effect2;
var effect3;

function preload(){
	 img = loadImage('images/spaceman.png');
}

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();
  	t = second(); // gets the second for the time you open your website
	rgn = 0;

}

function draw() {
  background(0);
  	timer(); // Call timer
	if (rgn == 0) {
		effect1();
	} else if (rgn == 1) {
		effect2();
	} else if (rgn == 2) {
		effect3();
	} else if (rgn == 3) {
		effect4();
	}

}

// every 5 seconds
function timer(){
	var x = 5;
	if (second() - t > x || t - second() > (59 - x) ){
        rgn = Math.round(random(0,4)); // assign rgn a random number
        t = second();
    }
}

function effect1(){
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = map(bright, 100, 15, 10, vScale);

      noStroke();
      fill(255);
      ellipseMode(CENTER);
      ellipse(x*vScale, y*vScale, w, w);

    }
  }	
}

function effect2(){
  //background(255);
  image(video, 0, 0, width, height);
  filter('INVERT');
  video.loadPixels();

}

function effect3() {
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;

  // How many cells fit in the canvas
  total = floor(width / w) * floor(height / h);

  snapshots[counter] = video.get();
  counter++;
  if (counter == total) {
    counter = 0;
  }

  for (var i = 0; i < snapshots.length; i++) {
    tint(255, 100);
    var index = (i + frameCount) % snapshots.length;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
}

function effect4(){
  background(0);
  video.loadPixels();
  var stepSize = 4;
  for (var x = 0; x < video.width; x += stepSize) {
    for (var y = 0; y < video.height; y += stepSize) {
      var index = ((y*video.width) + x) * 4;
      var redVal = video.pixels[index + 0];
      var greenVal = video.pixels[index + 1];
      var blueVal = video.pixels[index + 2];
      fill(redVal, greenVal, blueVal);
      ellipse(x, y, stepSize, stepSize);
    }
  }
}

function effect5(){
  background(0);
  video.loadPixels();
  image(img, 0, 0);

}



