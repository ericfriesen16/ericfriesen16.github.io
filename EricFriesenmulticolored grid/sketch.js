// Multicolored grid
//Eric Friesen
//may 12th, 2022
//draws a cool colored grid that you can interact with


let theSpacing = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
  multiGrid();
}

//makes the grid exist and multicolored
function multiGrid(){
  for(let x = 0; x < width; x+=theSpacing){
    for(let y = 0; y < height; y+= theSpacing){
      fill(random(0,255), random(0,255), random(0,255));
      rect(x,y,theSpacing);
    }
  }
}

//changes size of the squares depending on the mouse click
function mousePressed(){
  if(mouseIsPressed === true){
    if(mouseButton === LEFT){
      theSpacing -= 5;
      multiGrid();
    }
    if(mouseButton === CENTER){
      theSpacing += 5;
      multiGrid();
    }
  }
  theSpacing = constrain(theSpacing, 20, 60);
}

//changes colors of the grid
function changeColors(){
  if(keyIsDown(32)){
    multiGrid();
  }
}

function draw() {
  changeColors();
}


