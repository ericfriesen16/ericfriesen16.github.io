let currentSide = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  updateState();
  renderSquares();
}

function updateState(){
  //check mouse position and update currentSide 
  if(mouseX<width/2){
    currentSide = 0;
  }
  if(mouseX>width/2){
    currentSide = 1;
  }
}

function renderSquares(){
  //left
  if(currentSide === 0) {
    fill(0);
    rect(0,0, width/2, height/2);
  }
  else{ fill(255);}
  
  rect(0,0, windowWidth/2, windowHeight);
  //right
  rect(windowWidth/2, 0, windowWidth/2, windowHeight);
}