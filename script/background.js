class Background {
  constructor() {
    this.backgroundArray = [];
    this.speed = 1;
    // this.decorationArray = [];
  }
  setup() {
    // random background array
    for (let i = 0; i < (HEIGHT-SQUARE); i+=SQUARE) {
      let row = [];
      for (let k = 0; k < WIDTH-SQUARE; k+=SQUARE) {
        let randomTile = game.backgroundImages[Math.floor(Math.random()*game.backgroundImages.length)];
        row.push(randomTile);
      }
      this.backgroundArray.push(row);
    }
  }
  draw() {
    let row = 0;
    let col = 0;
    for (let y = 0; y < WIDTH; y+=SQUARE) {
      for (let x = 0; x < HEIGHT; x+=SQUARE) {
        image(this.backgroundArray[row][col].src, x, y, SQUARE, SQUARE);
        col++;
        if (col % 14 === 0) {
          col = 0;
        }
      }
      row++
      if (row % 14 === 0) {
        row = 0;
      }
    }
  }
}