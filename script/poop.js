class Poop {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.x = game.dog.x;
        this.y = game.dog.y + game.dog.height + 5;
        this.speed = 3;
    }
    draw() {
        image(game.poopImage, this.x, this.y, this.width, this.height);

        this.y += this.speed;
    }
    // increase score when poop is picked up
    pickUpPoop() {
        if (((this.y >= game.player.y+2) || (this.y >= game.player.y-2)) && ((this.x >= game.player.x+2) || (this.x >= game.player.x-2))) {
            game.score++;
            return true;
        }
    }
}
