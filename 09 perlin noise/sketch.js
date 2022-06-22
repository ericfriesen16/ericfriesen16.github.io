//Perlin Noise
//Eric Friesen
//May 13TH


let squareX;
let t = 999;
let tSpeed = 0.01;
let squareTime;
let squareSpeed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareX = width/2;
  squareTime = random(100);
}

function draw() {
  background(255);
  colorCircle();
  moveSquare();
}

function colorCircle(){
  //fill(random(0,255), random(0,255), random(0,255));

  let currentColor = noise(t)*255;
  fill(currentColor, 255-currentColor, currentColor);
  t += tSpeed;
  circle(width*0.2, height/2, 75);
}

function moveSquare(){
  fill(255);
  //squareX += random(-15,15);
  
  let xSpeed = noise(squareTime);
  squareTime += squareSpeed;
  xSpeed = map(xSpeed, 0,1, -15, 15);
  squareX += xSpeed;
  squareX = constrain(squareX, width/2, width*0.8);
  square(squareX, height/2,75);
}