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

    if (game.cash < 0) {
      game.mode = 2;
    }
  } else if (game.mode === 2) {
    startButton.hide();
    welcomeText.hide();

    clear();
    fill(51);
    rect(0, 0, WIDTH, HEIGHT);

    renderEndMessage();
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
  updateHighscore();
  game.mode = 1;
  game.cash = 200;
  game.level = 1;
  game.score = 0;
  game.dog.poopArray = [];

  score.innerText = game.score;
  cash.innerText = game.cash;
  level.innerText = game.level;

  resetButton.hide();
  endText.hide();
}

function updateHighscore() {
  if (game.score > game.highscore) {
    game.highscore = game.score
  }
}

function renderEndMessage() {
  let pile = 'pile';
  if (game.score > 1) {
    pile = 'piles';
  }

  if (game.score === 0) {
    endText.html(`You didn\'t collect any poop. Let\'s try harder next time!`)
  } else if (game.score > game.highscore) {
    endText.html(`You collected ${game.score} ${pile} of poop and set a new highscore. Congratulations!`)
  } else if (game.score === game.highscore) {
    endText.html(`You did it again! You collected ${game.score} ${pile} of poop which is the same as your current highscore.`)
  } else {
    endText.html(`You collected ${game.score} ${pile} of poop, good job! Your current highscore is ${game.highscore}. Keep going!`);
  }
}