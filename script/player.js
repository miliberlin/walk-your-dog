class Player {
    constructor() {
        this.width = 27;
        this.height = 31;
        this.x = (WIDTH - this.width) / 2;
        this.y = HEIGHT - this.height - 10;
    }
    draw() {
        this.x = constrain(this.x, 10, (WIDTH - this.width - 10))

        image(game.playerImage, this.x, this.y, this.width, this.height);
        if (keyIsDown(37)) {
            this.moveLeft()
        }
        if (keyIsDown(39)) {
            this.moveRight()
        }
    }
    moveLeft() {
        this.x -= this.width;
    }
    moveRight() {
        this.x += this.width;
    }
}