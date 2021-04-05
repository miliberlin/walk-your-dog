class Game {
    constructor() {
        this.score = 0;
        this.cash = 200;
        this.player = new Player();
        this.dog = new Dog();
    }
    preload() {
        this.playerImage = loadImage('images/player/walk.png');
        this.dogImage = loadImage('images/dog/dog.png');
    }
    draw() {
        clear();
        this.player.draw();
        this.dog.draw();
    }
}