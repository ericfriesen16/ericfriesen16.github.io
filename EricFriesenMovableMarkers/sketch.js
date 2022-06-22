//Saskatoon map placement
//Eric Friesen
//May 26th, 2022
//figure out the ideal location to place a new school

let saskMap;
let markers = [];
let currentlyDragging = false;
let gridSize = 10;
let activeRender = true;


//preloads images
function preload(){
  saskMap = loadImage("assets/SaskatoonSection.png");
}

function setup() {
  createCanvas(saskMap.width, saskMap.height);
  imageMode(CENTER);
}

function draw() {
  drawMap();
  drawVoronoi();
  for (let m of markers) {
    m.move();
    m.display();
  }
}

//draws the voroni locations
function drawVoronoi() {
  for(let m of markers){
    m.resetCount();
  }
  if (activeRender) {
    noStroke();
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        setFill(x, y);
        square(x, y, gridSize);
      }
    }
  }
}

//keypressed functions
function keyPressed() {
  if (key === " ") {
    markers.push(new MovableMarker(mouseX, mouseY));
  }
  if(keyCode === 16){
    activeRender = !activeRender;
  }
}

//sets the fill
function setFill(x, y) {
  let minDist = -1;
  let minIndex = -1;
  for (let i = 0; i < markers.length; i++) {
    let currentDistance = dist(x, y, markers[i].x, markers[i].y);
    if (currentDistance < minDist || minDist === -1) {
      minDist = currentDistance;
      minIndex = i;
    }
  }
  if (minIndex !== -1) {
    fill(markers[minIndex].regionColor);
    markers[minIndex].regionAdd();
  }
  else {
    fill(200,150);
  }
}

//creates the class
class MovableMarker {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.offX = 0;
    this.offY = 0;
    this.baseColor = color(0, 255, 0);
    this.hoverColor = color(0, 180, 0);
    this.beingDragged = false;
    this.radius = 7;
    this.diameter = this.radius * 2;
    this.regionColor = color(random(255), random(255), random(255), 150);
    this.regionArea = 0;
  }

  move() {
    if (this.mouseIsOver() && currentlyDragging === false) {
      if (mouseIsPressed && mouseButton === LEFT) {
        this.beingDragged = true;
        this.offX = mouseX - this.x;
        this.offY = mouseY - this.y;
        currentlyDragging = true;
      }
    }
    if (!mouseIsPressed) {
      this.beingDragged = false;
      currentlyDragging = false;
    }

    if (this.beingDragged) {
      this.x = mouseX - this.offX;
      this.y = mouseY - this.offY;
    }
  }

  display() {
    stroke(0);
    if (this.mouseIsOver()) {
      fill(this.hoverColor);
    }
    else {
      fill(this.baseColor);
    }
    circle(this.x, this.y, this.diameter);
    fill(0);
    text(round(this.regionArea/(width/gridSize*height/gridSize) * 100),this.x,this.y+20);
  }

  mouseIsOver() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d <= this.radius) {
      return true;
    }
    else {
      return false;
    }
  }

  regionAdd() {
    this.regionArea++;
  }

  resetCount() {
    this.regionArea = 0;
  }

}

function drawMap(){
  image(saskMap,saskMap.width/2, saskMap.height/2);
}