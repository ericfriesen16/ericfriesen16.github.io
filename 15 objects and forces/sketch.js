//Objects and forces                                                                           

let particles = [];
let grav;
let myWind;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grav = createVector(0, 0.1);
  let windForce = createVector(0,-0.1);
  myWind = new windZone(width*0.3, width*0.6, createVector(0,-0.15));
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(220);
  myWind.runWind();

  for (let p of particles) {
    p.applyForce(grav);
    if(p.isInsideWind(myWind)){
      p.applyForce(myWind.force);
    }
    p.move();
    p.display();
  }
}


class WindLine{
  constructor(x){
    this.pos = createVector(x, random(height));
    this.vel = createVector(0, random(-2,-0.5));
    this.len = random(4,15);
  }

  move(){
    this.pos.add(this.vel);
    if(this.pos.y < 0){
      this.pos.y = height;
    }
  }

  display(){
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.len);
  }

}

class windZone {
  constructor(startX, endX, f) {
    this.startX = startX;
    this.endX = endX;
    this.force = f;
    this.windLines = [];
    this.NUM_LINES = 100;
    this.initWind();
  }

  initWind() {
    for (let i = 0; i < this.NUM_LINES; i++) {
      this.windLines.push(new WindLine(random(this.startX, this.endX)));
    }
  }

  runWind() {
    for(let w of this.windLines){
      w.move();
      w.display();
    }
  }

}




class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(3, 5), random(-2, 0));
    this.accel = createVector(0, 0);
  }

  isInsideWind(w){
    if(this.pos.x  >= w.startX && this.pos.x <= w.endX){
      return true;
    }
    else{
      return false;
    }
  }

  applyForce(f) {
    this.accel.add(f);
  }

  display() {
    circle(this.pos.x, this.pos.y, 30);
  }

  move() {
    this.vel.add(this.accel);
    this.pos.add(this.vel);
    this.accel.mult(0);
  }


}