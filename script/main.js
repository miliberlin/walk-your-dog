const game = new Game();

score.innerText = game.score;
cash.innerText = game.cash;
level.innerText = game.level;

let startButton;
let welcomeText;
let resetButton;
let endText;

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
  startButton = createButton('START');
  startButton.parent('canvas');
  welcomeText = createElement('p', 'The game is simple: collect your dog\'s 💩 and you\'ll receive 10 dollars for every third one.\nBe aware: when you miss one you\'ll be fined 50 dollar! 💵\nAnd the more your dog walks the more active it gets...');
  welcomeText.addClass('welcomeText')
  welcomeText.parent('canvas');

  // end elements
  resetButton = createButton('PLAY AGAIN');
  resetButton.parent('canvas');
  endText = createElement('p', '');
  endText.addClass('endText');
  endText.parent('canvas')
}

function draw() {
  if (game.mode === 0) {
    clear();
    resetButton.hide();
    endText.hide();

    fill(51);
    rect(0, 0, WIDTH, HEIGHT);

    startButton.position(180, 330);
    welcomeText.position(0,0)
    startButton.mouseClicked(startGame);
  } else if ( game.mode === 1) {
    clear();
    game.draw();
    // game.drawGrid();
    updateHighscore();

    if (game.cash < 0) {
      game.mode = 2;
    }
  } else if (game.mode === 2) {
    startButton.hide();
    welcomeText.hide();

    clear();
    fill(51);
    rect(0, 0, WIDTH, HEIGHT);

    endText.html(`You collected  ${game.score} piles of poop, good job!\n\nThe current highscore is ${game.highscore}.`);
    endText.position(0,0);
    resetButton.position(140, 250);
    resetButton.mouseClicked(resetGame);

    resetButton.show();
    endText.show();
    
  }
}

function startGame() {
  game.mode++;
  welcomeText.remove();
  startButton.remove();
}

function resetGame() {
  game.mode = 1;
  resetButton.remove();
}

function updateHighscore() {
  if (game.score > game.highscore) {
    game.highscore = game.score
  }
}