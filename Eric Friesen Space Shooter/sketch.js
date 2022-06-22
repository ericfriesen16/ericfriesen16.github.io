//Space Shooter
//Eric Friesen
//June 3rd
//Makes a fun game where you shoot meteors


//variables
let spaceBackground, myCharacter;
let meteorStartZone = [];
let blasterShots = [];
let particles = [];
const theSpacing = 100;
let start = false;
let theFrames;
let cDiameterM = 100; let cRadiusM = 50;
let hX; let hY; let hW = 100; let hH = 150;
let baseY = 150;
let baseHitsLeft = 10;
let meteorsHit = 0;
let gameEnd = false;
let highScore = 0;

//preloads images
function preload() {
  spaceBackground = loadImage("assets/space.jpg");
  myCharacter = loadImage("assets/ship.png");
}

//does the setup stuff and start screen
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  drawBackground();
  fill(64, 242, 5);
  textSize(50);
  textFont(BOLD);
  textFont("Comic Sans");
  text("SPACE SHOOTER!", width / 2.6, height / 5);
  textSize(30);
  text("Drag Mouse to fly ship through a meteor field, and left click to blast meteors before they hit you or your ship!", width / 8, height / 1.9);
  text("Start Game? Y/N", width / 2.3, height / 1.4);
}

//draws the code and images
function draw() {
  hX = mouseX - 50;
  hY = mouseY - 75;
  gameTime();
}

//space
function drawBackground() {
  image(spaceBackground, width / 2, height / 2, width, height + 10);
}

//your ship
function drawPlayer() {
  image(myCharacter, mouseX, mouseY, myCharacter.width / 3, myCharacter.height / 3);
}

//hitbox of ship
function hitbox() {
  rectMode(CORNER);
  rect(mouseX - 50, mouseY - 75, 100, 150);
}

//home ship
function drawStation() {
  rectMode(CENTER);
  fill(125, 124, 120);
  rect(width / 2, height, width, 300);
  for (let x = 0; x < width; x += theSpacing) {
    fill(208, 219, 211);
    rect(x, height - 75, 50);
  }
}

//adds new meteors and speeds them up
function meteorRush() {
  if (frameCount < 5000 + theFrames) {
    if (frameCount % 80 === 0) {
      meteorStartZone.push(new Meteor);
    }
  }
  else if (frameCount > 5000 + theFrames && frameCount < 10000 + theFrames) {
    if (frameCount % 60 === 0) {
      meteorStartZone.push(new Meteor);
    }
  }
  else if (frameCount > 10000 + theFrames) {
    if (frameCount % 20 === 0) {
      meteorStartZone.push(new Meteor);
    }
  }
}

//shoots the lasers
function mousePressed() {
  blasterShots.push(new Blaster);
}

//starts the game
function keyPressed() {
  if (keyCode === 89) {
    theFrames = frameCount;
    start = true;
  }
  else if (keyCode === 78 && start !== true) {
    text("You Suck", width / 2.2, height / 2.3);
  }
  else {

  }
}

//runs all the code in draw if start is true
function gameTime() {
  if (start === true) {
    if (baseHitsLeft === 0 || gameEnd === true) {
      gameOver();
    }
    else {
      hitbox();
      drawBackground();
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.process();
        if(p.y > height){
          particles.splice(i,1);
        }
      }
      for (let i = 0; i < meteorStartZone.length; i++) {
        let m = meteorStartZone[i];
        m.process();
        if (baseShipHit(m.y) === true) {
          explosion(m);
          meteorStartZone.splice(i, 1);
        }
        if (m.checkCollisionShip() === true) {
          gameEnd = true;
        }
      }
      for (let i = 0; i < blasterShots.length; i++) {
        let b = blasterShots[i];
        b.process();
        if (b.checkCollisionMeteor() === true) {
          blasterShots.splice(i, 1);
        }
        if(b.y < 0){
          blasterShots.splice(i,1);
        }
      }
      drawStation();
      drawPlayer();
      text("Base hits left: " + baseHitsLeft, 15, 25);
      text("Score: " + meteorsHit, 15, 50);
      text("High Score: " + highScore, width - 250, 25);
      meteorRush();
    }
  }
}

//determines if meteor hits base ship
function baseShipHit(my) {
  if (my + cRadiusM > height - baseY) {
    baseHitsLeft--;
    return true;
  }
}

//explosion of the meteors
function explosion(m) {
  for (let j = 0; j < 50; j++) {
    particles.push(new Particle(m.x, m.y));
  }
}

//displays end screen and play again function
function gameOver() {
  if (baseHitsLeft === 0 || gameEnd === true) {
    start = false;
    drawBackground();
    if (meteorsHit > highScore) {
      highScore = meteorsHit;
    }
    fill(64, 242, 5);
    text("GAME OVER!", width / 2.2, height / 4);
    text("YOUR SCORE IS: " + meteorsHit, width / 2.3, height / 2.3);
    text("HIGHSCORE IS: " + highScore, width / 2.3, height / 1.8);
    text("PLAY AGAIN? Y/N", width / 2.3, height / 1.5);
    if (keyIsDown(89)) {
      gameEnd = false;
      start = true;
      baseHitsLeft = 10;
      meteorsHit = 0;
      theFrames = frameCount;
      meteorStartZone = [];
      blasterShots = [];
      particles = [];
    }
  }
}

//creates meteors
class Meteor {
  constructor(x, y) {
    this.x = random(width);
    this.y = 0;
    this.d = 100;
    this.speed = random(5, 8);
    this.hit = false;
  }

  process() {
    this.action();
  }

  display() {
    fill(107, 65, 11);
    circle(this.x, this.y, this.d);
  }

  move() {
    this.y += this.speed;
  }

  checkCollisionShip() {
    if (collideRectCircle(hX, hY, hW, hH, this.x, this.y, this.d)) {
      return true;
    }
  }

  action() {
    this.move();
    this.display();
  }
}

//creates blasters
class Blaster {
  constructor() {
    this.x = mouseX - 5;
    this.y = mouseY - 45;
    this.w = 15;
    this.h = 50;
    this.speed = 7;
  }

  process() {
    this.action();
  }

  display() {
    rectMode(CORNER);
    fill(119, 255, 0);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.y -= this.speed;
  }

  checkCollisionMeteor() {
    for (let i = 0; i < meteorStartZone.length; i++) {
      let m = meteorStartZone[i];
      if (collideRectCircle(this.x, this.y, this.w, this.h, m.x, m.y, m.d)) {
        for(let j = 0; j < 50; j++){
          particles.push(new Particle(m.x, m.y));
        }
        meteorStartZone.splice(i, 1);
        meteorsHit++;
        return true;
      }
    }
  }

  action() {
    this.move();
    this.display();
  }

}

//creates explosions
class Particle {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(random(-3, 3), random(-10, -6));
    this.grav = createVector(0, 0.15);
  }

  display() {
    fill(107, 65, 11);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 10, 10);
  }

  move() {
    this.pos.add(this.vel);
    this.vel.add(this.grav);
  }

  action() {
    this.move();
    this.display();
  }

  process() {
    this.action();
  }

}