const game = new Game();

score.innerText = game.score;
cash.innerText = game.cash;
level.innerText = game.level;

let button;
let welcomeText;

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  // slow down player
  frameRate(25);
  game.setup();

  // start elements
  button = createButton('START');
  button.parent("canvas");
  welcomeText = createElement('p', 'The game is simple: collect your dog\'s 💩 and you\'ll receive 10 dollars for every third one.\nBe aware: when you miss one you\'ll be fined 50 dollar! 💵\nAnd the more your dogs walks the more active it gets...');
  welcomeText.addClass('welcomeText')

  welcomeText.parent("canvas");
}

function draw() {
  if (game.mode === 0) {
    fill(51);
    rect(0, 0, WIDTH, HEIGHT);
    button.position(180, 330);
    welcomeText.position(0,0)
    button.mouseClicked(startGame);
  } else if ( game.mode === 1) {
    game.draw();
    // game.drawGrid();
    game.gameEnd();
  } else if (game.mode === 3) {
    // createButton("RESET");
  }
}

function startGame() {
  game.mode++;
  button.remove();
  welcomeText.remove();
}