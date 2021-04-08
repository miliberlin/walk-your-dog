class Game {
  constructor() {
    this.score = 0;
    this.cash = 200;
    this.level = 1;
    this.mode = 0;
    this.gameOver = false;
    this.player = new Player();
    this.dog = new Dog();
    this.background = new Background();
  }
  setup() {
    // let canvas = createCanvas(WIDTH, HEIGHT);
    // canvas.parent("canvas");  
    this.background.setup();

    // canvas.mousePressed(this.keyPressed);
    // background(220);
    // text('tap here to play', 10, 20);
  // keyPressed() {
  //   if (keyCode === ENTER) {
  //     game.sound.play();
  //   }
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
    // soundFormats('mp3');
    // this.sound = loadSound('sounds/Steppin-Up.mp3');
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
      this.gameOver = true;
      this.cash = 0;
    }
  }
  gameEnd() {
    // if (this.gameOver) {
    //   fill(51);
    //   rect(0, 0, WIDTH, HEIGHT);
    //   text('game over', 50, 50);
    // }
  }
}