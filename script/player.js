class Player {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.x = (WIDTH - this.width) / 2;
        this.y = HEIGHT - (this.height*2);
        this.stepCount = 0;
    }
    draw() {
        this.x = constrain(this.x, 0, (WIDTH - this.width))

        image(game.playerImage, this.x, this.y, this.width, this.height);
        if (keyIsDown(37)) {
            this.moveLeft()
        }
        if (keyIsDown(39)) {
            this.moveRight()
        }
        if (game.level < 6) {
            if (this.stepCount < 10) {
                game.playerImage = loadImage('images/player/player.png');
                this.stepCount++
            } else if (this.stepCount < 20) {
                game.playerImage = loadImage('images/player/player-l.png');
                this.stepCount++
            } else if (this.stepCount < 30) {
                game.playerImage = loadImage('images/player/player.png');
                this.stepCount++
            } else if (this.stepCount < 40) {
                game.playerImage = loadImage('images/player/player-r.png');
                this.stepCount++
            } else {
                this.stepCount = 0;
            }
        }
    }
    moveLeft() {
        this.x -= this.width;
    }
    moveRight() {
        this.x += this.width;
    }
}