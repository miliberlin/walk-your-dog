class Game {
  constructor() {
    this.score = 0;
    this.highscore = 0;
    this.cash = 150;
    this.level = 1;
    this.mode = 0;
    this.player = new Player();
    this.dog = new Dog();
    this.background = new Background();
    this.muted = false;
  }
  setup() {
    this.background.setup();
    this.dog.setup();

    // start elements
    startButton = createButton('START');
    startButton.parent('canvas');
    welcomeText = createElement('p', 'The game is simple: collect your dog\'s 💩 and you\'ll receive 10 dollar for every third one.\nBe aware: when you miss one you\'ll be fined 50 dollar! 💵\nAnd the more your dog walks the more active it gets...');
    welcomeText.addClass('welcomeText')
    welcomeText.parent('canvas');

    // end elements
    resetButton = createButton('PLAY AGAIN');
    resetButton.parent('canvas');
    endText = createElement('p', '');
    endText.addClass('endText');
    endText.parent('canvas');

    sound.addEventListener('click', game.muteSound);
  }
  preload() {
    this.playerImage = loadImage('images/player/player.png');
    this.dogImage = loadImage('images/dog/dog.png');
    this.poopImage = loadImage('images/poop.png');
    this.backgroundImages = [
      [
        { src: loadImage('images/background/level-1/tile-1.png')},
        { src: loadImage('images/background/level-1/tile-2.png')},
        { src: loadImage('images/background/level-1/tile-3.png')}
      ],
      [
        { src: loadImage('images/background/level-2/tile-6.png')},
        { src: loadImage('images/background/level-2/tile-7.png')},
        { src: loadImage('images/background/level-2/tile-8.png')},
        { src: loadImage('images/background/level-2/tile-9.png')}
      ]
    ];
    soundFormats('mp3', 'ogg');
    this.backgroundMusic = loadSound('sounds/Steppin-Up.mp3');
    this.dogBark = [
      { src: loadSound('sounds/dog_bark_001.mp3')},
      { src: loadSound('sounds/dog_bark_002.mp3')},
      { src: loadSound('sounds/dog_bark_003.mp3')}
    ],
    this.levelUpSound = loadSound('sounds/level-up.mp3');
  }
  draw() {
    this.playSound();
    if (this.mode === 0) {
      clear();
      resetButton.hide();
      endText.hide();
  
      fill(51);
      rect(0, 0, WIDTH, HEIGHT);
  
      startButton.position(180, 330);
      welcomeText.position(0,0)
      startButton.mouseClicked(this.startGame)
    } else if (this.mode === 1) {
      clear();
      this.background.draw();
      // game.drawGrid();
      this.player.draw();
      this.dog.draw();
  
      if (this.cash <= 0) {
        this.mode = 2;
      }
    } else if (this.mode === 2) {
      clear();
      startButton.hide();
      welcomeText.hide();
  
      fill(51);
      rect(0, 0, WIDTH, HEIGHT);
  
      this.renderEndMessage();
      endText.position(0,0);
      resetButton.position(140, 250);
      resetButton.mouseClicked(this.resetGame);
  
      resetButton.show();
      endText.show();
    }
  }
  drawGrid() {
    for (let i = 0; i < WIDTH; i += this.player.width) {
      for (let k = 0; k < HEIGHT; k += this.player.width) {
      line(i, 0, i, HEIGHT);
        line(0, k, WIDTH, k);
      }
    }
  }
  startGame() {
    game.mode = 1;
    welcomeText.remove();
    startButton.remove();
    // game.playSound()
  }
  resetGame() {
    game.updateHighscore();
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
  updateHighscore() {
    if (game.score > game.highscore) {
      game.highscore = game.score
    }
  }
  renderEndMessage() {
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
  muteSound() {
    game.muted = !game.muted;
    if (game.muted) {
      sound.innerText = '🔇';
      game.backgroundMusic.pause();
    } else {
      sound.innerText = '🔊';
    }
  }
  playSound() {
    if (!game.muted) {
      if(!game.backgroundMusic.isPlaying())
      {
        game.backgroundMusic.setVolume(0.05);
        game.backgroundMusic.play();
      }
    }
  }
}