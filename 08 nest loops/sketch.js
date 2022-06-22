//nest loops  
//eric f

const SPACING = 20;
let dotSize = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}



function drawGrid(){
  for(let x = 0; x < width; x+=SPACING){
    for(let y = 0; y < height; y+=SPACING){
      strokeWeight(dotSize);
      if(eDistance(x,y,mouseX,mouseY) < 80){
        stroke(255,0,0);
      }
      else{
        stroke(0);
      }
      point(x,y);
    }
  }
}

function eDistance(x1,y1,x2,y2){
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let distance = sqrt(pow(a,2) + pow(b,2));
  return distance;
}



function mouseWheel(event){
  print(event.delta);
  if(event.delta < 0){
    dotSize += 1;
  }
  else if(event.delta >0){
    dotSize -= 1;
  }
  dotSize = constrain(dotSize, 2, 25);
}


function draw() {
  background(255);
  drawGrid();
}
