class Dog {
    constructor() {
        this.width = 17;
        this.height = 28;
        this.x = (WIDTH - this.width) / 2;
        this.y = 10;
        this.speedX = 2;
        this.stepCount = 0;
    }
    draw() {
        this.x = constrain(this.x, 10, (WIDTH - this.width - 10))

        image(game.dogImage, this.x, this.y, this.width, this.height);

        this.x += random(-this.speedX, this.speedX);

        if (this.stepCount < 10) {
            game.dogImage = loadImage('images/dog/dog.png');
            this.stepCount++
        } else if (this.stepCount < 20) {
            game.dogImage = loadImage('images/dog/dog-l.png');
            this.stepCount++
        } else if (this.stepCount < 30) {
            game.dogImage = loadImage('images/dog/dog.png');
            this.stepCount++
        } else if (this.stepCount < 40) {
            game.dogImage = loadImage('images/dog/dog-r.png');
            this.stepCount++
        } else {
            this.stepCount = 0;
        }
    }
}
