let bottomImg, topImg;
let scaledBottom;
let canvas;
let imgAspect = 0;


function preload() {
  bottomImg = loadImage("./imagenes/multi-color.png");
  topImg = loadImage("./imagenes/multi-byn.png");
}

function setup() {
    const container = document.getElementById('canvas-container');
    const w = container.offsetWidth;
    imgAspect = bottomImg.height / bottomImg.width;
    const h = w * imgAspect;
  
    canvas = createCanvas(w, h);
    canvas.parent(container);
  
    noCursor();
    cursor();
  
    scaledBottom = createImage(width, height);
    bottomImg.loadPixels();
    scaledBottom.copy(bottomImg, 0, 0, bottomImg.width, bottomImg.height, 0, 0, width, height);
  
    image(topImg, 0, 0, width, height);
}
  

function draw() {
}

function mouseDragged() {
    let brushSize = 100;
    copy(
      scaledBottom,
      mouseX, mouseY, brushSize, brushSize,
      mouseX, mouseY, brushSize, brushSize
    );
}

function windowResized() {
    const container = document.getElementById('canvas-container');
    const w = container.offsetWidth;
    const h = w * imgAspect;
  
    resizeCanvas(w, h);
  
    scaledBottom = createImage(width, height);
    bottomImg.loadPixels();
    scaledBottom.copy(bottomImg, 0, 0, bottomImg.width, bottomImg.height, 0, 0, width, height);
  
    image(topImg, 0, 0, width, height);
}
  
