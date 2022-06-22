//Puzzle Game
//eric friesen
//May. 31st
//A fun puzzle game to break your computer over!


//creates the board array
let grid = [
  [0, 255, 0, 0, 255],
  [0, 255, 0, 0, 255],
  [255, 0, 255, 0, 255],
  [255, 0, 0, 0, 0]
];

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let row, col;
let colorRandom = [0,255];

function setup() {
  for(let x = 0; x<NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      grid[y][x] = random(colorRandom);
    }
  }
  rectWidth = 50;
  rectHeight = 50;
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);

}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();
  winner();
}


//makes the game board 
function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}


//determines what to change(or if you're cheating)
function mousePressed() {
  flip(col, row);
  if (!keyIsDown(SHIFT)) {
    if (col < NUM_COLS - 1) {
      flip(col + 1, row);
    }
    if (col > 0) {
      flip(col - 1, row);
    }
    if (row > 0) {
      flip(col, row - 1);
    }
    if (row < NUM_ROWS - 1) {
      flip(col, row + 1);
    }
  }
}

//prints a winner screen
function winner(){
  let startColor = grid[0][0];
  for(let x = 0; x< NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      if(startColor !== grid[y][x]){
        return;
      }
    }
  }
  fill(242, 180, 10);
  textSize(30);
  text("Winner", 70, (rectHeight *NUM_ROWS)/2);
}

//flips the colors
function flip(col, row) {
  if (grid[row][col] === 0) {
    grid[row][col] = 255;
  }
  else {
    grid[row][col] = 0;
  }
}

function getCurrentX() {
  return int(mouseX / rectWidth);
}

function getCurrentY() {
  return int(mouseY / rectHeight);
}