class Game {
    constructor() {
        this.score = 0;
        this.cash = 50;
        this.player = new Player();
        this.dog = new Dog();
        this.gameOver = false;
    }
    preload() {
        this.playerImage = loadImage('images/player/player.png');
        this.dogImage = loadImage('images/dog/dog.png');
        this.poopImage = loadImage('images/poop.png');
    }
    draw() {
        clear();
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