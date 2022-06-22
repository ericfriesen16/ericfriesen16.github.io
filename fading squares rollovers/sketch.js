// Rollovers
// Eric Friesen
// May. 3rd, 2022
// When you move the mouse to different quadrants of the screen, it will change colors! 

let leftFillUp = 255;
let leftFillDown = 255;
let rightFillUp = 255;
let rightFillDown = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  drawQuadrants();
  fillingSquares();
}

function drawQuadrants() {
  fill(255);
  //top left
  rect(0, 0, width / 2, height / 2);
  //bottom left
  rect(width / 2, 0, width / 2, height / 2);
  //top right
  rect(0, height / 2, width / 2, height / 2);
  //bottom right
  rect(width / 2, height / 2, width / 2, height / 2);
}


function fillingSquares() {
  leftFillUp += 8;
  leftFillDown += 8;
  rightFillUp += 8;
  rightFillDown += 8;

  //top left
  if (mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
    leftFillUp = 0;
  }
  //bottom left
  else if (mouseX < windowWidth / 2 && mouseY > windowHeight / 2) {
    leftFillDown = 0;
  }
  //top right
  else if (mouseX > windowWidth / 2 && mouseY < windowHeight / 2) {
    rightFillUp = 0;
  }
  //bottom right
  else if (mouseX > windowWidth / 2 && mouseY > windowHeight / 2) {
    rightFillDown = 0;
  }
  //left top
  fill(leftFillUp);
  rect(0, 0, width / 2, height / 2);

  //left bottom
  fill(leftFillDown);
  rect(0, height / 2, width / 2, height / 2);

  // right top
  fill(rightFillUp);
  rect(width / 2, 0, width / 2, height / 2);

  //right bottom
  fill(rightFillDown);
  rect(width / 2, height / 2, width / 2, height / 2);
}