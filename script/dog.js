class Dog {
    constructor() {
        this.width = 17;
        this.height = 28;
        this.x = (WIDTH - this.width) / 2;
        this.y = 10;
        this.speedX = 10;
    }
    draw() {
        this.x = constrain(this.x, 10, (WIDTH - this.width - 10))

        image(game.dogImage, this.x, this.y, this.width, this.height);

        this.x += random(-this.speedX, this.speedX);
    }
}
