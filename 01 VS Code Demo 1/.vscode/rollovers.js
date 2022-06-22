// Rollovers
// Eric Friesen
// May. 3rd, 2022
// When you move the mouse to different quadrants of the screen, it will change colors! 



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  line(windowWidth-windowWidth, windowHeight/2, windowWidth, windowHeight/2);
  line(windowWidth/2, windowHeight-windowHeight, windowWidth/2, windowHeight);
  //top left
  if(mouseX < windowWidth/2 && mouseY < windowHeight/2){
    fill(0);
    rect(0, 0, windowWidth/2, windowHeight/2);
  }
  //bottom left
  else if(mouseX < windowWidth/2 && mouseY > windowHeight/2){
    fill(0);
    rect(0, windowHeight/2, windowWidth/2, windowHeight/2);
  }
  //top right
  else if(mouseX > windowWidth/2 && mouseY < windowHeight/2){
    fill(0);
    rect(windowWidth/2, 0, windowWidth/2, windowHeight/2);
  }
  //bottom right
  else if(mouseX > windowWidth/2 && mouseY > windowHeight/2){
    fill(0);
    rect(windowWidth, windowHeight, windowWidth, windowHeight);
  }
}