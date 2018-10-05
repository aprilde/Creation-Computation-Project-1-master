var angle = 0;
var x = 0;
var rgn;
var t;
var video;



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
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

function timer(){
	var x = 10;
	var temp;
	if (second() - t > x || t - second() > (59 - x) ){
   console.log("it works");
        temp = Math.round(random(0,3)); // assign rgn a random number
        t = second();
        if ( rgn == temp){
        	if(rgn == 0) {
        		rgn ++;
        	} else {
        		rgn --;
        	}
        } else {
        	rgn = temp;
        }
    }
}


  function effect1() {
  push();
  background(255);

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
  pop();
}






function effect2() {
push();
background(255);


scale(-1, -1);

var varY = (400 * (cos(angle)) + 1000);

let camX = map(varY, 0, width, -200, 200);
camera(camX, 0, (height/2) / tan(PI / 6), camX, 0, 0, 0, 1, 0);

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
pop();
}





function effect3() {
push();
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
pop();
}






function effect4() {
  push();
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
  pop();
}
