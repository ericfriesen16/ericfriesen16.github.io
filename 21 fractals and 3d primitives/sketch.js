//Fractals and 3d primitives
// one at a time, then together
//jun 20th

let timeCounter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(20);
  //noFill();
}

function draw() {
  background(220);
  //makeCircles(width/2, height/2, width/2);
  //rotateX(radians(frameCount));
  orbitControl();
  lights();
  specularMaterial(250);
  for (let angle = 0; angle < 360; angle += 30) {
    if (angle / 30 === timeCounter) {
      push();
      rotateZ(radians(angle));
      translate(-50, 0, 0);
      box(100, 25, 25);
      pop();
    }
  }

  timeCounter++;
  if (timeCounter > 11) {
    timeCounter = 0;
  }


}


function makeCircles(x, y, d) {
  circle(x, y, d);
  if (d > 2) {
    makeCircles(x - d / 2, y, d * 0.5);
    makeCircles(x + d / 2, y, d * 0.5);
    makeCircles(x, y + d / 2, d * 0.5);
  }
  else {

  }

}