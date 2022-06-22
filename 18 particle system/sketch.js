//working with particle systems
//eric friesen

let spiralImages = [];
let spirals = [];
let particles = [];

function preload(){
  for(let i = 0; i < 16; i++){
    if(i < 10){
      spiralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"));
    }
  }
}

function mousePressed(){
  spirals.push(new Spiral(mouseX, mouseY));

  for(let i = 0; i < 100; i++){
    particles.push(new Particle());
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for(let i = 0; i < spirals.length; i++){
    let s = spirals[i];
    s.display();
    if(s.active === false){
      spirals.splice(i,1);
      i--;
    }
  }

  //particles.push(new Particle);

  for(let p of particles){
    p.move();
    p.display();
  }
}

class Particle{
  constructor(){
    this.pos =createVector(width/2,height);
    this.vel =createVector(random(-3,3), random(-10,-6));
    this.grav = createVector(0,0.15);
  }

  display(){
    fill(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 10, 10);
  }

  move(){
    this.pos.add(this.vel);
    this.vel.add(this.grav);
  }

}

class Spiral{
  constructor(x,y){
    this.pos =createVector(x , y);
    this.currentFrame = 0;
    this.active = true;
  }

  display(){
    if(this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame], this.pos.x, this.pos.y);
      if(frameCount % 4 === 0){
        this.currentFrame++;
      }
    }
  }
}