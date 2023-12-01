let canvasWidth = 1840;
let canvasHeigth = 983;

function setup() {
    createCanvas(canvasWidth, canvasHeigth, WEBGL);
}

function draw() {
    if(mouseX < (canvasWidth/2)  && mouseY < floor(canvasHeigth/2)) {
        background(134,163,244);
    } else if (mouseX > (canvasWidth/2) && mouseY < floor(canvasHeigth/2)) {
        background(235,228,110);
    } else if(mouseX > (canvasWidth/2) && mouseY > floor(canvasHeigth/2)) {
        background(226,53,68);
    } else {
        background(142,195,109);
    }
    let boxSize = 100;
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    box(boxSize, boxSize, boxSize);
    if(mouseX < (canvasWidth/2)  && mouseY < floor(canvasHeigth/2)) {
        line(100, 100, 300, 300);
    } else if (mouseX > (canvasWidth/2) && mouseY < floor(canvasHeigth/2)) {
        bezier(85 * 3, 20 * 3, 10 * 3, 10 * 3, 90 * 3, 90 * 3, 15 * 3, 80 * 3);
    } else if(mouseX > (canvasWidth/2) && mouseY > floor(canvasHeigth/2)) {
        point(0, 50);
        point(0, 60);
        point(0, 75);
        point(0, 100);
        point(0, 150);
        point(0, 200);
        point(0, 300);
        point(0, 700);
    } else {
        square(75, 75, 300);
    }
}