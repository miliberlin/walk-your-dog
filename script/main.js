const game = new Game();

score.innerText = game.score;
cash.innerText = game.cash;

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  // slow down player
  frameRate(20);
  game.setup();
}

function draw() {
  game.draw();
  game.drawGrid();
  game.gameEnd();
}