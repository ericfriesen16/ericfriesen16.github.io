//2D arrays demo/starter code
//eric friesen

let grid = [
  [0, 255, 0,  0, 255],
  [0, 255, 0,  0, 255],
  [255,0, 255, 0, 255],
  [255,0,  0,  0,  0]
];

const NUM_ROWS = 4;
const NUM_COLS = 5; 
let rectWidth, rectHeight;
let row, col;

function setup() {
  rectWidth = 50;
  rectHeight  = 50;
  createCanvas(rectWidth*NUM_COLS, rectHeight*NUM_ROWS);
   
}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();
}


function renderGrid(){
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}

function mousePressed(){
  flip(col,row);
  if(col <NUM_COLS-1){
    flip(col+1, row);
  }
  if (col > 0) {
    flip(col -1, row);
  }
  if(row>0){
    flip(col, row-1);
  }
  if(row < NUM_ROWS-1){
    flip(col, row+1);
  }
}

function flip(col, row){
  if(grid[row][col] === 0){
    grid[row][col] = 255;
  }
  else{
    grid[row][col] = 0;
  }
}

function getCurrentX(){
  return int(mouseX/rectWidth);
}

function getCurrentY(){
  return int(mouseY/rectHeight);
}