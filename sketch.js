var wolf;
let angle = 0;
let cam;

function preload(){
	wolf = loadModel('model/Wolf.obj');
}


function setup() {
    createCanvas(400, 400, WEBGL);
    cam = createCapture(VIDEO);
    cam.hide();
}

function draw() {
    background(175);
    ambientLight(255);
    //directionalLight(255,255,255,0,0,1)
    rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
    rotateX(angle);
    rotateY(angle * 1.3);
    //rotateZ(angle * 0.7);
    //box(100);
    model(wolf);
	texture(cam);
    // angle += 0.03;


}
