class Game {
    constructor() {
        this.score = 0;
        this.cash = 200;
        this.player = new Player();
    }
    preload() {
        this.playerImage = loadImage('images/player/walk.png');
    }
    draw() {
        clear();
        this.player.draw();
    }
}