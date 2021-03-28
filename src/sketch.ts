// -------------------
//  Parameters and UI
// -------------------
// @ts-nocheck
const gui = new dat.GUI()
const params = {
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function setup() {
    createCanvas(210*2, 300*2, WEBGL);
  
  }
  function drawLeftWall(){
    push()
      translate(-210/2, 0, 0)
      for(let i = 0; i < 50; i++){
        push()
          randomY = random(0,300/2)
          randomZ = random(750/3,700)
          if(!(randomZ >700/2+100 && randomY < 50)){
            translate(0, randomY, randomZ)
            box(0,random(5,20), random(40,50))
          }
        pop()
      } 
    pop()
    
  }
  
  function drawLeftWallTop(){
    push()
      translate(-210/2, 0, 0)
      for(let i = 0; i < 100; i++){
        push()
          randomY = random(-300/4,-300/2)
          randomZ = random(-750, 750)
          translate(0, randomY, randomZ)
          box(0,random(5,10), random(20,30))
        pop()
      } 
    pop()
    
  }
  
  function drawRightWall(){
    push()
      translate(210/2, 0, 0)
      for(let i = 0; i < 50; i++){
        push()
          randomY = random(0,300/2)
          randomZ = random(700/3,700)
          if(!(randomZ >700/2+100 && randomY < 50)){
            translate(0, randomY, randomZ)
            box(0,10, 50)
          }
        pop()
      } 
    pop()
    
  }
  function drawRightWallTop(){
    push()
      translate(210/2, 0, 0)
      for(let i = 0; i < 50; i++){
        push()
          randomY = random(-300/4,-300/2)
          randomZ = random(-750, 700)
          translate(0, randomY, randomZ)
          box(0,10, 50)
        pop()
      } 
    pop()
    
  }
  
  function drawCeiling(){
    push()
      for(let i = 0; i < 100; i++){
        push()
          randomX = random(-210/2, 210/2)
          randomY = random(-300/3,-300/2)
          randomZ = random(-750, 750/2)
          translate(randomX, randomY, randomZ)
          box(random(5,20),random(5,20), random(5,30))
        pop()
      } 
      for(let i = 0; i < 6; i++){
        push()
          randomX = random(-210/2, 210/2)
          randomY = random(-300/3,-300/2)
          randomZ = random(0, 750)
          translate(randomX, randomY, randomZ)
          box(random(5,20),random(5,20), random(5,30))
        pop()
      }
    pop() 
  }
  
  function drawGrid(){
    offsetX = 210/8
    
    //DRAW LONGITUDINAL LINES
    push()
      translate(-210/2-13, 150, 0)
      for(let i = 0; i < 8; i++){
          translate(offsetX, 0, 0)
          box(0,0, 1500)
      } 
    pop()
    
      offsetZ = 1500/8
    //DRAW HORIZONTAL LINES
    push()
      translate(0, 300/2, 750)
      for(let i = 0; i < 8; i++){
          translate(0, 0, -offsetZ)
          box(210,0,0)
      } 
    pop()
    
  }
  
  
  
  function draw() {
    randomSeed(params.Random_Seed)
    background('white')
      noFill()
    //box(210,300,1500)
    strokeWeight(1)
    drawRightWall()
    drawRightWallTop()
    drawLeftWallTop()
    drawLeftWall()
    drawCeiling()
    drawGrid()
  
  
  camera(30,50, (height/2.0) / tan(PI*30.0 / 180.0)+400, -50
         , 0, 0, 0, 1, 0);
    
  }

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}