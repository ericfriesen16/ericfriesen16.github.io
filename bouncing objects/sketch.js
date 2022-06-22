// demo 4 bouncing obj's
//primitives boouncing on screen

let circleX, circleY;
let circleXSpeed, circleYSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = width/2;
  circleXSpeed = random(3,-3);
  circleYSpeed = random(3,-3);
}

function draw() {
  background(255);

  fill(0,200,200);

  //movement
  circleX += circleXSpeed;
  circleY += circleYSpeed;

  //bounce
  if(circleY <= 0 || circleY >= height){
    circleYSpeed = circleYSpeed * -1;
  }

  //wrap around
  if(circleX <= 0){
    circleX += width;
  }
  else if(circleX >= width){
    circleX -= width;
  }

  

  //draw
  circle(circleX, circleY, 30);

}
