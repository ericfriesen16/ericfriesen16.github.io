// Primitive Paint
//Eric Friesen
//May. 10th, 2022
// This project allows you to paint a scene and clear it

let extraCanvas;
let RRED = 0;
let RGREEN = 0;
let RBLUE = 0;
let diameter = 30;
let growing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  ericF();
  alwaysThere();
  colorPicker();
  colorShift();
  shapeMaker();
  destroyerOfArt();

  image(extraCanvas, 0,0);
}

//funky background
function gradientBackground(){
  let spacing = 10;
  noStroke();
  for(let y = height; y>0; y -= spacing){
    rect(0,y,width,spacing);
    let currentColor = map(y,0,height,0,255);
    fill(100,100,currentColor);
  }
}

//creates an object that tells you the colors you're on
function colorPicker(){
  extraCanvas.fill(RRED, RGREEN, RBLUE);
  extraCanvas.rect(200, 350, 100);
}


//creates an object that always does something
function alwaysThere(){
  fill(255, 255, 0);
  if(growing === true){
    diameter += 15;
  }
  else{
    diameter -= 15;
  }
  if(diameter >= 300){
    growing = false;
  }
  if(diameter <= 30){
    growing = true;
  }
  circle(300, 700, diameter);
}



//changes the color when CAPS LOCK is held
function colorShift(){
  if(keyIsDown(20)){
    RRED = random(0,255);
    RGREEN = random(0,255);
    RBLUE = random(0,255);
  }
}


//creates a shape depending on the code
function shapeMaker(){
  if(keyIsDown(65)){
    extraCanvas.fill(RRED, RGREEN, RBLUE);
    extraCanvas.rect(mouseX, mouseY, 40);
  }
  if(keyIsDown(83)){
    extraCanvas.fill(RRED, RGREEN, RBLUE);
    extraCanvas.ellipse(mouseX, mouseY, 40,40);
  }
  if(keyIsDown(68)){
    extraCanvas.fill(RRED, RGREEN, RBLUE);
    extraCanvas.triangle(mouseX,mouseY, mouseX + 20, mouseY + 20, mouseX + 20, mouseY);
  }
}


//removes the art
function destroyerOfArt(){
  if(keyIsDown(32)){
    extraCanvas.clear();
  }
  if(keyIsDown(32)){
    clear();
  }
}


//my name, I think
function ericF(){
  textSize(100);
  textFont("Georgia");
  text("Eric", width-300,height-100);
}