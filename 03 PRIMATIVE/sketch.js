// pickupable primitives
//Eric F
//may 6th, 2022
//simple application of mouse-moveable (pickupable) shapes
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false;
let pickedUp = false;
let xOff, yOff;

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;
  y = height/ 2;
  rWidth = 200;
  rHeight = 100;
}

function draw() {
  background(220);
  updateEdge();
  drawRect();
}

function drawRect(){
  if(mouseX < rRight && mouseX > rLeft && mouseY > rTop && mouseY < rBottom){
    fill(220, 10, 255);
    mouseOver = true;
  }
  else{
    fill(255);
    mouseOver = false;
  }
  if(pickedUp){
    x = mouseX - xOff;
    y = mouseY - yOff;
  }

  rect(x,y,rWidth,rHeight);
}

function updateEdge(){
  rLeft = x - rWidth/2;
  rRight = x + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;
}

function mousePressed(){
  if(mouseOver){
    pickedUp = true;
    xOff = mouseX - x;
    yOff = mouseY - y;
  }
}


function mouseReleased(){
  pickedUp = false;
}