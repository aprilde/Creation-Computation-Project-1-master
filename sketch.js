var wolf;
let angle = 0;


function preload(){
	wolf = loadModel('model/Wolf.obj');
}

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(175);
    ambientLight(100);
    directionalLight(255,255,255,0,0,1)
    rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
    //rotateX(angle);
    //rotateY(angle * 1.3);
    //rotateZ(angle * 0.7);
    //box(100);
    model(wolf);
    angle += 0.03;


}
