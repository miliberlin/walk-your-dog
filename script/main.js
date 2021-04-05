const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  // slow down player
  frameRate(20);
}

function draw() {
  // clear();
  game.draw();
}