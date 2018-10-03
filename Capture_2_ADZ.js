let ctracker; // face tracker
let videoInput; // video input
var capture;
var cnv;
var w = 1000;
var h = 480;


function preload() {
    // uploading images
}
 
function setup() {
 
    capture = createCapture({
        audio: false,
        video: {
            width: w*2,
            height: h*2
        }
    }, function() {
        console.log('capture ready.')
    });
    // setup canvas
	capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);
//    cnv.position(200, 110);


    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(capture.elt);
}

function draw() {
	    image(capture, 0, 0);
	    //drawGlasses();
	var positions = ctracker.getCurrentPosition(); 
	//console.log(positions[0][0] + " " + positions[0][1]);
   noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        //fill(map(i, 0, positions.length, 0, 360), 50, 100);
        //ellipse(positions[i][0], positions[i][1], 4, 4);
        text(i, positions[i][0], positions[i][1]);
    }

    if (positions.length > 0) {
        //var mouthLeft = createVector(positions[44][0], positions[44][1]);
        //var mouthRight = createVector(positions[50][0], positions[50][1]);
        //var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        //rect(20, 20, smile * 3, 20);

//        noStroke();
//        fill(0, 255, 255);
//        ellipse(positions[62][0], positions[62][1], 50, 50);
    }
	}



function drawGlasses() {
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    for (var i=0; i<positions.length; i++) {

        // draw shapes based on marker positions
        if (i == 27) {
            fill(0);
            ellipse(positions[i][0], positions[i][1], 80, 80);
            rect(positions[i][0], positions[i][1], 3, 20);
        }
        if (i == 25) {
            fill(0);
            rect(positions[i][0], positions[i][1], 60, 10);
        }
        if (i == 32) {
            fill(0);
            ellipse(positions[i][0], positions[i][1], 80, 80);
        }
    }
}


