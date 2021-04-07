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
    for (let y = 0; y < 450; y+=30) {
      const row = [];
      // console.log(y)
      for (let x = 0; x < 450; x+=30) {
        let obj = game.backgroundImages[Math.floor(Math.random()*game.backgroundImages.length)];
        // let obj = game.backgroundImages[0]
        // obj['x'] = x;
        // obj['y'] = y;
        // console.log('   ' +x)
        // console.log(obj)
        // console.log(row)
        row.push(obj)
        // console.log(row)
      }
      // console.log(row)
      this.backgroundArray.push(row);
    }
  }
  draw() {
    // for (let row of this.backgroundArray) {
    //   for (let tile of row) {
    //     image(tile.src, tile.x, tile.y, SQUARE, SQUARE);
    //   }
    // }

    // for (let tile of this.backgroundArray[8]) {
    //   // console.log(tile)
    //   image(tile.src, tile.x, tile.y, SQUARE, SQUARE);
    // }

    let row = this.baseRow;
    let col = 0;
    for (let y = 0; y < HEIGHT+SQUARE; y+=SQUARE) {
      for (let x = 0; x < WIDTH; x+=SQUARE) {
        let tile = this.backgroundArray[row][col];
        tile['x'] = x;
        tile['y'] = y;

        image(tile.src, tile['x'], tile['y'], SQUARE, SQUARE);
        col++;
        if (col % 15 === 0) {
          col = 0;
        }
      }
      row++
      if (row % 15 === 0) {
        row = 0;
      }
    }

    

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