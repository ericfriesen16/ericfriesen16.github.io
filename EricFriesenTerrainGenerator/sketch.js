//Terrain Generator
//Eric Friesen
//May 13th, 2022
//Makes Terrain on the screen, mountains high and valleys low

let rectWidth= 30;
let rectPlacement;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectPlacement = random(100);
  randomTerrain();
}

function draw() {
  resetTerrain();
  sizeTerrainChange();
}

//draws a random terrain
function randomTerrain(){
  rectMode(CORNERS);
  background(255);
  fill(0);
  let highestY = 0;
  let xSpot = 0; 
  for(let x = 0; x < width; x += rectWidth){
    let sectionHeight = noise(rectPlacement)*height;
    rectPlacement += 0.009;
    rect(x,height, x + rectWidth, height - sectionHeight);
    if(sectionHeight >= highestY){
      highestY = sectionHeight;
      xSpot = x;
    }
  }
  drawFlag(xSpot, height-highestY);
}

//resets terrain
function resetTerrain(){
  if(keyIsDown(32)){
    clear();
    randomTerrain();
  }
}

//changes terrain size with left and right arrows
function sizeTerrainChange(){
  if(keyIsDown(37)){
    rectWidth -= 2;
    randomTerrain();
  }
  if(keyIsDown(39)){
    rectWidth += 2;
    randomTerrain();
  }
  rectWidth = constrain(rectWidth,10,50);
}

function drawFlag(x,y){
  stroke(0);
  line(x+10,y,x+10,y-40);
  rectMode(CORNER);
  fill(255,0,0);
  rect(x+12,y-45, 25,25);
}
