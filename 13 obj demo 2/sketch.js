let dotCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  initDots();
}

function initDots(){
  //use this to generate a whole bunch of DOT objects using While LOOPS
  let spacing = 12;
  let currentX = spacing/2;
  let currentY = spacing/2;
  while(currentX < width){
    while(currentY < height){
      dotCollection.push(new Dot(currentX, currentY, 10));
      currentY += spacing;
    }
    currentY = spacing/2;
    currentX += spacing;
  }
}

function draw() {
  background(220);

  //loop through each item in the array
  // for(let i = 0; i < dotCollection.length; i++){
  //   let d = dotCollection[i];
  // }

  for(let d of dotCollection){
    //d temporarily stores each item in collection
    //can't really handle removals well
    d.process();
  }

}

function mousePressed(){
  dotCollection.push(new Dot(mouseX, mouseY, 10));
}



// Class Definition
class Dot{
  
  //class constructor (inc. properties)
  constructor(x, y, diameter){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.c = color(255,255,255,120);
  }


  //class methods
  display(){
    fill(this.c);
    circle(this.x, this.y, this.diameter);
  }

  setSize(d){   //setting function
    this.diameter = d;
  }

  sizeBasedOnDistance(){
    let distance = dist(this.x, this.y, mouseX, mouseY);
    let windowDiagonal = dist(0,0,width,height); //should be in setup;
    let newDiameter = map(distance, 0, windowDiagonal, 20, 2 );
    this.setSize(newDiameter);
  }

  process(){
    //internally call the necessary class methods once per frame
    this.sizeBasedOnDistance();
    this.display();
  }
}