// let cam;
// var pixelEffect;
// var mirrorEffect;
// var addAnother;
var video;
var vScale = 16;

function setup() {
    createCanvas(320, 240);
    pixelDensity(1);
    video= createCapture(VIDEO);
    // video.size(width/vScale,height/vScale);
    video.size(320, 240);
    // cam = createCapture(VIDEO);
    // cam.size(40,40);
    // cam.hide();
}

function draw() {
background(51);

	video.loadPixels();
	loadPixels();
	for (var y = 0; y < height; y++){
		for(var x = 0; x < width; x++){
			var index = (x+y+width)*4;
			pixels[index+0]=video.pixels[index+0];
			pixels[index+1]=video.pixels[index+1];
			pixels[index+2]=video.pixels[index+2];
			pixels[index+3]=255;
			// var r=video.pixels[index+0];
			// var g=video.pixels[index+1];
			// var b=video.pixels[index+2];

			// var bright = (r+g+b)/3;
	// pixels[index+0]=bright;
	// pixels[index+1]=bright;
	// pixels[index+2]=bright;
	// pixels[index+3]=255;
		}
	}
	updatePixels();
	}
	



