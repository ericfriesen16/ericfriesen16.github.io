// drawing with loops and createGraphics()

let extraCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth,windowHeight);
}

function draw() {
  //background(220);
  gradientBackground();
  loopCircles();
  painting();

  image(extraCanvas,0,0);
}


function painting(){
  extraCanvas.fill(0,255,0);
  extraCanvas.square(mouseX, mouseY,25,25);
}

function gradientBackground(){
  let spacing = 10;
  noStroke();
  for(let y = height; y>0; y -= spacing){
    rect(0,y,width,spacing);
    let currentColor = map(y,0,height,0,255);
    fill(0,0,currentColor);
  }
}

function loopCircles(){
  //use a loop to draw cricles
  let spacing = 40;
  let diameter = 30; 
  fill(255);
  stroke(0);
  //interaction
  spacing = map(mouseX, 0, width,  10, 50);

  for(let x = width * 0.1; x < width * 0.9; x += spacing){
    circle(x, height/2, diameter);
  }

}
