// 12 objects demo 1



//let myWalker;
const NUM_WALKERS = 10;
let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  //myWalker = new Walker(random(width), random(height),col);
  background(0);

  for(let i = 0; i < NUM_WALKERS; i++){
    let col = color(random(255), random(255), random(255));
    walkers.push(new Walker(random(width), random(height), col));
  }
}

function draw() {
  //myWalker.move();
  //myWalker.display();

  //process(move/display)
  for(let i = 0; i < walkers.length; i++){
    walkers[i].move();
    walkers[i].display();
  }
}



class Walker{

  //class constructure
  constructor(x,y,c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 5;
    this.type = Math.floor(random(2));
    this.timeX = random(999);
    this.timeY = random(999);
    this.inc = 0.1; 
  }

  //class methods/functions
  display(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x,this.y,this.size,this.size);
  }

  move(){
    if(this.type === 0) {
      this.moveRandom();
    }
    else {
      this.movePerlin();
    }
  }


  moveRandom(){
    let choice = Math.floor(random(4));

    if(choice===0) {
      this.x -= this.speed;
    }
    else if(choice===1) {
      this.x += this.speed;
    }
    else if(choice === 2){
      this.y-=this.speed;
    }
    else{
      this.y += this.speed;
    }
  }

  movePerlin(){
    this.x += map(noise(this.timeX),0,1,-this.speed,this.speed);
    this.y += map(noise(this.timeY),0,1,-this.speed,this.speed);
    this.timeX += this.inc;
    this.timeY += this.inc;
  }

}