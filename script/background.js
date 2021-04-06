class Background {
  constructor() {
    this.backgroundArray = [];
  }
  setup() {
    for (let i = 0; i < (HEIGHT-SQUARE); i+=SQUARE) {
      let row = [];
      for (let k = 0; k < WIDTH-SQUARE; k+=SQUARE) {
        let randomTile = game.backgroundImages[Math.floor(Math.random()*game.backgroundImages.length)];
        randomTile.x = k;
        randomTile.y = i;
        row.push(randomTile);
      }
      this.backgroundArray.push(row);
    }
  }
  draw() {
    let k = 0;
    let l = 0;
    for (let i = 0; i < WIDTH; i+=SQUARE) {
      for (let j = 0; j < HEIGHT; j+=SQUARE) {
        image(this.backgroundArray[k][l].src, j, i, SQUARE, SQUARE);
        l++;
        if (l % 14 === 0) {
          l = 0;
        }
      }
      k++
      if (k % 14 === 0) {
        k = 0;
      }
    }

  }
}