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
    if (
      ((game.player.y+10 <= this.y+this.height) &&
      (game.player.y + game.player.height >= this.y + this.height))
      &&
      ((game.player.x <= this.x+this.height) &&
      (game.player.x + game.player.height >= this.x + this.height))
      ) {
      game.score++;
      return true;
    }
  }
}
