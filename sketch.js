let wolf;
let angle = 0;


function preload(){
	//wolf = loadModel('Wolf.obj');
}

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(0);
    ambientLight(100);
    directionalLight(255,255,255,0,0,1)
    rotateX(angle);
    rotateY(angle * 1.3);
    rotateZ(angle * 0.7);
    box(100);
    //Model(wolf);
    angle += 0.03;


}
