class Background {
  constructor() {
    this.backgroundArray = [];
    this.speed = 1;
    this.baseRow = 0;
  }
  setup() {
    this.generateBackground();
  }
  generateBackground() {
    let bgLevel = 0;
    if (game.level % 2 === 0) {
      bgLevel = 0
    } else { bgLevel = 1}

    for (let y = -SQUARE; y < HEIGHT+SQUARE; y+=30) {
      const row = [];
      for (let x = 0; x < WIDTH; x+=30) {
        let obj = {... game.backgroundImages[bgLevel][Math.floor(Math.random()*game.backgroundImages[bgLevel].length)] };
        obj['x'] = x;
        obj['y'] = y;
        row.push(obj)
      }
      this.backgroundArray.push(row);
    }
  }
  draw() {
    for (let row of this.backgroundArray) {
      for (let tile of row) {
        image(tile.src, tile.x, tile.y, SQUARE, SQUARE);
      }
    }

    // adding movement to the tiles by increasing the Y coordinates
    for (let row of this.backgroundArray) {
      for (let tile of row) {
        tile['y'] += this.speed;
        if ((tile['y']+SQUARE) === HEIGHT+SQUARE) {
          tile['y'] = -SQUARE;
        }
      }
    }
  }
}