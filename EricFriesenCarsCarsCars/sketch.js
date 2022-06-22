//Cars Cars Cars
//Eric Friesen
//May. 25th
//creates a traffic sim that you can make more cars appear and will change color and speed

const NUM_CARS = 20;
let carClean = [];
let direction = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_CARS; i++){
    direction = int(random(0,2));
    if(direction === 0){
      carClean.push(new Cars(windowWidth, random(0,windowHeight/2), 0));
    }
    else{
      carClean.push(new Cars(0, random(500,1000), 2));
    }
  }
}

//makes car
function draw() {
  drawRoad();
  for (let d of carClean){
    d.process();
  }
}

//makes road
function drawRoad(){
  rectMode(CENTER);
  fill(0);
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  for(let x = 0; x < width; x += 50){
    stroke(255);
    line(x, windowHeight/2, x+30, windowHeight/2);
  }
}

//makes new cars
function mousePressed(){
  direction = int(random(0,2));
  if(mouseButton === LEFT){
    carClean.push(new Cars(windowWidth, random(0,windowHeight/2), 0));
  }
  else if(keyIsDown(16) && mouseButton === CENTER){
    carClean.push(new Cars(0, random(500,1000), 2));
  }
}

//makes a class of cars
class Cars{
  constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.speed = random(7,13);
    this.direction = d;
    this.carType = random(1,2);
    this.c = color(random(255), random(255), random(255));
  }
  process(){
    this.action();
  }
  display(){
    //motorcycle
    if(this.carType <= 1.5){
      fill(60);
      circle(this.x-35, this.y, 20);
      circle(this.x+35,this.y,20);
      fill(this.c);
      rect(this.x,this.y,60,30);
      fill(255);
      square(this.x, this.y,20);
    }
    else{
      //car
      fill(60);
      circle(this.x-20, this.y-30, 20);
      circle(this.x-20,this.y+30,20);
      circle(this.x+20, this.y+30,20);
      circle(this.x+20, this.y-30,20); 
      fill(this.c);
      square(this.x,this.y, 50);
      fill(255);
      square(this.x,this.y,20);
    }
  }
  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }
  speedUp(){
    this.speed += 2;
    this.speed = constrain(this.speed, 1, 15);
  }
  speedDown(){
    this.speed -= 2;
    this.speed = constrain(this.speed,1,15);
  }
  move(){
    if(this.direction === 0){
      if(this.x < 0){
        this.x = width;
      }
      this.x -= this.speed;
    }
    else{
      if(this.x > width){
        this.x = 0;
      }
      this.x += this.speed;
    }
  }
  action(){
    if(random(100) <= 1){
      this.changeColor();
    }
    if(random(100)<= 1){
      this.speedUp();
    }
    if(random(100) <= 1){
      this.speedDown();
    }
    this.move();
    this.display();
  }
}
