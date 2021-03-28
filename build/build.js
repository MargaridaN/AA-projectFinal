var gui = new dat.GUI();
var params = {
    Random_Seed: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "Download_Image");
function setup() {
    createCanvas(210 * 2, 300 * 2, WEBGL);
}
function drawLeftWall() {
    push();
    translate(-210 / 2, 0, 0);
    for (var i = 0; i < 50; i++) {
        push();
        randomY = random(0, 300 / 2);
        randomZ = random(750 / 3, 700);
        if (!(randomZ > 700 / 2 + 100 && randomY < 50)) {
            translate(0, randomY, randomZ);
            box(0, random(5, 20), random(40, 50));
        }
        pop();
    }
    pop();
}
function drawLeftWallTop() {
    push();
    translate(-210 / 2, 0, 0);
    for (var i = 0; i < 100; i++) {
        push();
        randomY = random(-300 / 4, -300 / 2);
        randomZ = random(-750, 750);
        translate(0, randomY, randomZ);
        box(0, random(5, 10), random(20, 30));
        pop();
    }
    pop();
}
function drawRightWall() {
    push();
    translate(210 / 2, 0, 0);
    for (var i = 0; i < 50; i++) {
        push();
        randomY = random(0, 300 / 2);
        randomZ = random(700 / 3, 700);
        if (!(randomZ > 700 / 2 + 100 && randomY < 50)) {
            translate(0, randomY, randomZ);
            box(0, 10, 50);
        }
        pop();
    }
    pop();
}
function drawRightWallTop() {
    push();
    translate(210 / 2, 0, 0);
    for (var i = 0; i < 50; i++) {
        push();
        randomY = random(-300 / 4, -300 / 2);
        randomZ = random(-750, 700);
        translate(0, randomY, randomZ);
        box(0, 10, 50);
        pop();
    }
    pop();
}
function drawCeiling() {
    push();
    for (var i = 0; i < 100; i++) {
        push();
        randomX = random(-210 / 2, 210 / 2);
        randomY = random(-300 / 3, -300 / 2);
        randomZ = random(-750, 750 / 2);
        translate(randomX, randomY, randomZ);
        box(random(5, 20), random(5, 20), random(5, 30));
        pop();
    }
    for (var i = 0; i < 6; i++) {
        push();
        randomX = random(-210 / 2, 210 / 2);
        randomY = random(-300 / 3, -300 / 2);
        randomZ = random(0, 750);
        translate(randomX, randomY, randomZ);
        box(random(5, 20), random(5, 20), random(5, 30));
        pop();
    }
    pop();
}
function drawGrid() {
    offsetX = 210 / 8;
    push();
    translate(-210 / 2 - 13, 150, 0);
    for (var i = 0; i < 8; i++) {
        translate(offsetX, 0, 0);
        box(0, 0, 1500);
    }
    pop();
    offsetZ = 1500 / 8;
    push();
    translate(0, 300 / 2, 750);
    for (var i = 0; i < 8; i++) {
        translate(0, 0, -offsetZ);
        box(210, 0, 0);
    }
    pop();
}
function draw() {
    randomSeed(params.Random_Seed);
    background('white');
    noFill();
    strokeWeight(1);
    drawRightWall();
    drawRightWallTop();
    drawLeftWallTop();
    drawLeftWall();
    drawCeiling();
    drawGrid();
    camera(30, 50, (height / 2.0) / tan(PI * 30.0 / 180.0) + 400, -50, 0, 0, 0, 1, 0);
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight(), WEBGL);
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map