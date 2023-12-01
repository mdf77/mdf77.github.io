let canvasWidth = 1840;
let canvasHeigth = 983;
let circleX = canvasWidth/2;
let circleY = canvasHeigth/2;
let squareX, squareY;
let score = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeigth);
    squareX = random(0, canvasWidth);
    squareY = random(0, canvasHeigth);
}

function draw() {
    background(255);
    text('score: ' + score, (canvasWidth/2), 25);
    square(squareX, squareY, 20);
    if (keyIsDown(LEFT_ARROW)) {
        circleX -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        circleX += 5;
    } else if (keyIsDown(UP_ARROW)) {
        circleY -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
        circleY += 5;
    }
    circle(circleX, circleY, 10);
    if((circleX <= (squareX + 20)) && (circleX) >= (squareX)) {
        if (circleY <= (squareY + 20) && (circleY) >= (squareY)) {
            newSquare();
            score++;
        }
    }
}

function newSquare() {
    squareX = random(0, canvasWidth);
    squareY = random(0, canvasHeigth);
}
