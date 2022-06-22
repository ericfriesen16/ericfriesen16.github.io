// Image manipulation
//Eric Friesen
//Jun. 16, 2022
//working with images

let chip; let race; let nuit; let hand;


function preload(){
  chip = loadImage("Assets/chip.jpg");
  race = loadImage("Assets/race.jpg");
  nuit = loadImage("Assets/nuit.jpg");
  hand = loadImage("Assets/hand.jpg");
}


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  //code for chip image manipulation
  // image(chip,0,0);
  // loadPixels();
  // for(let i = 0; i < pixels.length; i+=4){
  //   colorAvg(i);
  // }
  // updatePixels();
  //code for race image manipulation
  // image(race,0,0);
  // greenHater();
  //code for color palette changer
  //image(nuit,0,0);
  //avgChanger();
  //code for hand changer
  image(hand,0,0);
  reversal();
}

//code for the chip image manipulation
// function colorAvg(posR){
//   if(pixels[posR] >= pixels[posR+1] && pixels[posR] >= pixels[posR+2]){
//     setPixelRed(posR);
//   }
//   else if(pixels[posR+1] > pixels[posR] && pixels[posR+1] >= pixels[posR+2]){
//     setPixelGreen(posR);
//   }
//   else{
//     setPixelBlue(posR);
//   }
// }

//code for the race image manipulation
// function greenHater(){
//   loadPixels();
//   for(let x = 0; x < race.width; x++){
//     for(let y = 0; y < race.height; y++){
//       let loc = (x + y*race.width)*4;
//       if(x >= width - width/2){
//         let red = getRed(loc);
//         let green = 0;
//         let blue = getBlue(loc);
//         setPixels(loc,red,green,blue);
//       }
//     }
//   }
//   updatePixels();
// }

//code for color palette changer
// function avgChanger(){
//   loadPixels();
//   for(let x = 0; x < nuit.width; x++){
//     for(let y = 0; y < nuit.height; y++){
//       let loc = (x + y*nuit.width)*4;
//       if(getAverage(loc) >= 205 && getAverage(loc)  <= 255){
//         let red = 170;
//         let green = 230;
//         let blue = 220;
//         setPixels(loc,red,green,blue);
//       }
//       else if(getAverage(loc)  >= 155 && getAverage(loc)  <= 204){
//         let red = 105;
//         let green = 150;
//         let blue = 210;
//         setPixels(loc,red,green,blue);
//       }
//       else if(getAverage(loc)  >= 105 && getAverage(loc)  <= 154){
//         let red = 120;
//         let green = 180;
//         let blue = 60;
//         setPixels(loc,red,green,blue);
//       }
//       else if(getAverage(loc)  >= 55 && getAverage(loc)  <= 104){
//         let red = 130;
//         let green = 30;
//         let blue = 130;
//         setPixels(loc,red,green,blue);
//       }
//       else{
//         let red = 90;
//         let green = 10;
//         let blue = 50;
//         setPixels(loc,red,green,blue);
//       }
//     }
//   }

//   updatePixels();
// }

// function getAverage(posR){
//   return(pixels[posR]+pixels[posR+1]+pixels[posR+2])/3;
// }

//code for hand reversal
function reversal(){
  loadPixels();
  for(let x = 0; x < hand.width; x++){
    for(let y = 0; y < hand.height; y++){
      let source = (x + y*hand.width)*4;
      let destination = ( width-1-x+ y*hand.width)*4;
      if(x >= width - width/2){
        let red = getRed(source);
        let green = getGreen(source);
        let blue = getBlue(source);
        setPixels(destination,red,green,blue);
      }
    }
  }
  updatePixels();
}




function getRed(posR){
  return pixels[posR];
}
function getGreen(posR){
  return pixels[posR+1];
}
function getBlue(posR){
  return pixels[posR+2];
}
function getAlpha(posR){
  return pixels[posR+3];
}

function setPixels(posR, r,g,b,a=255){
  pixels[posR] = r;
  pixels[posR+1] = g;
  pixels[posR+2] = b;
  pixels[posR+3] = a;
}


function setPixelRed(posR){
  pixels[posR] = 255;
  pixels[posR+1] = 0;
  pixels[posR+2] = 0;
  pixels[posR+3] = 255;
}

function setPixelGreen(posR){
  pixels[posR] = 0;
  pixels[posR+1] = 255;
  pixels[posR+2] = 0;
  pixels[posR+3] = 255;
}

function setPixelBlue(posR){
  pixels[posR] = 0;
  pixels[posR+1] = 0;
  pixels[posR+2] = 255;
  pixels[posR+3] = 255;
}