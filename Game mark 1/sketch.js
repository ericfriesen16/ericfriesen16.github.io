// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const mazeWalls = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  Maze();
  character();
}

function draw() {
  
}


function character(){
  rectMode(CENTER);
  fill(0,0,255);
  rect(mouseX, mouseY,50,50);
}

function Maze(){
  background(255);
  fill(0);
  for(let i = 0; i < mazeWalls; i++){
    rect(random(width), random(height), 35, 60); 
  }
}