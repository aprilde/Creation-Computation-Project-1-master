var capture;
var w = 1000;
var h = 480;

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
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    createCanvas(w, h);
    capture.hide();
}
//ADD EFFECT HERE
function draw() {
    image(capture, 0, 0);
        noStroke();
var c = color(0, 126, 255, 102);
fill(c);
rect(0, 0, 300, 1000);
    var c = color(0, 0, 255, 102);
fill(c);
rect(300, 0, 350, 3000);
var value = alpha(c); // Sets 'value' to 102
fill(value);
ellipse(300, 150, 100, 100);
}