class Game {
  constructor() {
    this.score = 0;
    this.cash = 200;
    this.gameOver = false;
    this.player = new Player();
    this.dog = new Dog();
    this.background = new Background();
  }
  setup() {
    this.background.setup();
  }
  preload() {
    this.playerImage = loadImage('images/player/player.png');
    this.dogImage = loadImage('images/dog/dog.png');
    this.poopImage = loadImage('images/poop.png');
    this.backgroundImages = [
      { src: loadImage('images/background/tile-1.png'), top: 'g', right: 'g', bottom: 'g', left: 'g'},
      // {src: loadImage('images/background/tile-2.png'), top: 'b' , right: 'g', bottom: 'b', left: 'g'},
      {src: loadImage('images/background/tile-3.png'), top: 'g', right: 'g', bottom: 'g', left: 'g'},
      // {src: loadImage('images/background/tile-4.png'), top: 'g', right: 'b', bottom: 'g', left: 'b'},
      // {src: loadImage('images/background/tile-5.png'), top: 'b', right: 'g', bottom: 'b', left: 'g'},
      // {src: loadImage('images/background/tile-6.png'), top: 'b', right: 'b', bottom: 'b', left: 'b'},
      // {src: loadImage('images/background/tile-7.png'), top: 'b', right: 'b', bottom: 'b', left: 'b'},
      // {src: loadImage('images/background/tile-8.png'), top: 'g', right: 'b', bottom: 'g', left: 'b'},
      // {src: loadImage('images/background/tile-9.png'), top: 'b', right: 'b', bottom: 'b', left: 'b'},
      // {src: loadImage('images/background/tile-10.png'), top: 'g', right: 'g', bottom: 'g', left: 'g'},
      {src: loadImage('images/background/tile-11.png'), top: 'g', right: 'g', bottom: 'g', left: 'g'}
    ];
    this.backgroundDecorationImages = [
      {src: loadImage('images/background/bush.png')},
      {src: loadImage('images/background/bush_berries.png')},
      {src: loadImage('images/background/littleshrooms.png')}
    ]
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.dog.draw();
  }
  drawGrid() {
    for (let i = 0; i < WIDTH; i += this.player.width) {
      for (let k = 0; k < HEIGHT; k += this.player.width) {
      line(i, 0, i, HEIGHT);
        line(0, k, WIDTH, k);
      }
    }
  }
  checkGameStatus() {
    if (this.cash <= 0) {
      game.gameOver = true;
    }
  }
  gameOver() {
  }
}