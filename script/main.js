const game = new Game();

score.innerText = game.score;
cash.innerText = game.cash;
level.innerText = game.level;

function preload() {
  game.preload();
}

function setup() {
  // let canvas = createCanvas(WIDTH, HEIGHT);
  // canvas.parent("canvas");
  // slow down player
  game.setup();
  frameRate(40);
}

function draw() {
  game.draw();
  // game.drawGrid();
  game.gameEnd();
}