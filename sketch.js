var img = createImage(66, 66);
img.loadPixels();
for (var i = 0; i < img.width; i++) {
  for (var j = 0; j < img.height; j++) {
    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));
  }
}
img.updatePixels();
image(img, 17, 17);
image(img, 34, 34);







// template below

var capture;
var w = 640;
var h = 480;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    createCanvas(w, h);
    capture.hide();
}

// [r g b a] r g b a r g b a ...
function draw() {
    image(capture, 0, 0, w, h);
    capture.loadPixels();
    if (capture.pixels.length > 0) { // don't forget this!
        var total = 0;
        var i = 0;
        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                var redValue = capture.pixels[i];
                total += redValue;
                i += 4;
            }
        }
        var n = w * h;
        var avg = int(total / n);
        select('#average-value').elt.innerText = avg;
        select('#average-color').elt.style.backgroundColor = 'rgb(' + avg + ',' + avg + ',' + avg + ')';
    }
}
