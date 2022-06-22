// working with images demo
//eric f
//may 11th
//loading and using still images and animation frames


let lionL, lionR;
let facingLeft = true;

let pinImages = [];
let currentFrame = 0;
          

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for(let i = 0; i<9; i++){
    pinImages[i] = loadImage("assets/pin-0" + i + ".png");
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);
  drawPin();
  drawLion();
}


function drawPin(){
  image(pinImages[currentFrame],width/2,height/2);
  if(frameCount %2 === 0){

    currentFrame ++;
    if(currentFrame > pinImages.length-1){
      currentFrame = 0;
    }
  }
}




function drawLion(){
  if(movedX < 0) {
    facingLeft = true;
  }
  else if(movedX > 0){
    facingLeft = false;
  }
  if(facingLeft){
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
    print("w; " + lionL.width + " H; " +lionL.height);
  } 
  else{
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
}
