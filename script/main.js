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

  button = createButton('START');
  button.position(180, 200);
  button.parent("canvas");
  
  // welcomeText = createElement('textarea', 'The game is simple: collect your dog\'s 💩 and you\'ll receive 10 dollards for every third one.\nBe aware: when you miss one you\'ll be fined 50 dollar! 💵\nAnd the more your dogs walks the more active it gets...');

  // welcomeText.position(0,0)
  // button.mousePressed(changeBG);
}

function draw() {
  if (game.mode === 0) {
    fill(51);
    rect(0, 0, WIDTH, HEIGHT);
    if (keyCode === ENTER) {
      game.mode++;
    }
    // createButton("START");
  } else if ( game.mode === 1) {
    game.draw();
    // game.drawGrid();
    game.gameEnd();
  } else if (game.mode === 3) {
    createButton("RESET");
  }
}