// loops and arrays


let x = [];
let y = [];
const NUM_SEGMENTS = 40;
const SPEED = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  initArrays();
}

function draw() {
  background(220);
  updateArrays();
  drawArrays();
}



function initArrays(){
  let x1 = width/2;
  let y1 = height/2;
  x.push(x1);
  y.push(y1);

  for(let i =0; i< NUM_SEGMENTS-1; i++){
    x.push(x1+ random(-SPEED, SPEED));
    y.push(y1 + random(-SPEED, SPEED));
  }
}

function drawArrays(){
  for(let i = 0; i < x.length; i++){
    fill(0);
    circle(x[i], y[i], 4);

    line(x[i],y[i],x[i+1],y[i+1]);

  }
}

function updateArrays(){
  // x.push(x[x.length-1] +random(-SPEED,SPEED));
  // y.push(y[y.length-1] +random(-SPEED,SPEED));

  x.push(mouseX +random(-3,3));
  y.push(mouseY + random(-3,3));

  x.shift();
  y.shift();
}