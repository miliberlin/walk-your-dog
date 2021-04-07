class Background {
  constructor() {
    this.backgroundArray = [];
    this.speed = 10;
  }
  setup() {
    this.generateBackground();
  }
  generateBackground() {
    for (let y = 0; y < HEIGHT+SQUARE; y+=SQUARE) {
      let row = [];
      for (let x = 0; x < WIDTH; x+=SQUARE) {
        let obj = game.backgroundImages[Math.floor(Math.random()*game.backgroundImages.length)];
        row.push(obj)
        obj['x'] = x;
        obj['y'] = y;
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

    // let row = 0;
    // let col = 0;
    // for (let y = 0; y < HEIGHT+SQUARE; y+=SQUARE) {
    //   for (let x = 0; x < WIDTH; x+=SQUARE) {
    //     let tile = this.backgroundArray[row][col];
    //     // tile['x'] = x;
    //     // tile['y'] = y;

    //     image(tile.src, tile['x'], tile['y'], SQUARE, SQUARE);
    //     col++;
    //     if (col % 15 === 0) {
    //       col = 0;
    //     }
    //   }
    //   row++
    //   if (row % 15 === 0) {
    //     row = 0;
    //   }
    // }

    // adding movement to the tiles by increasing the Y coordinates
    // for (let row of this.backgroundArray) {
    //   for (let tile of row) {
    //     tile['y'] += this.speed;
    //     if (tile['y'] > HEIGHT) {
    //       tile['y'] = 0;
    //     }
    //   }
    // }
  }
}