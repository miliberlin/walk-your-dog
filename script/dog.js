class Dog {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.x = (WIDTH - this.width) / 2;
    this.xArray = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420]
    this.y = this.height;
    this.stepCount = 0;
    this.poopArray = [];
    this.newPosition = this.xArray[Math.floor(Math.random() * (this.xArray.length))];
  }
  setup() {
    setInterval(game.dog.bark, Math.floor(random(8000,20000)));
  }
  draw() {
    image(game.dogImage, this.x, this.y, this.width, this.height);

    // changing position
    if (this.newPosition < this.x) {
      this.x -= Math.floor(random(1, game.level*3));
    } else if (this.x < this.newPosition) {
      this.x += Math.floor(random(1, game.level*3));
    }
    else {
      this.newPosition = this.xArray[Math.floor(random(0, this.xArray.length))];
    }

    // changing sprites
    if (game.level < 6) {
      if (this.stepCount < 10) {
        this.stepCount++;
      } else if (this.stepCount === 10) {
        game.dogImage = loadImage('images/dog/dog.png');
        this.stepCount++;
      } else if (this.stepCount < 20) {
        this.stepCount++;
      } else if (this.stepCount === 20) {
        game.dogImage = loadImage('images/dog/dog-l.png');
        this.stepCount++;
      } else if (this.stepCount < 30) {
        this.stepCount++;
      } else if (this.stepCount === 30) {
        game.dogImage = loadImage('images/dog/dog.png');
        this.stepCount++;
      } else if (this.stepCount < 40) {
        this.stepCount++;
      } else if (this.stepCount === 40) {
        game.dogImage = loadImage('images/dog/dog-r.png');
        this.stepCount++;
      } else {
        this.stepCount = 0;
      }
    }

    // pooping
    if (game.level >= 9) {
      if (this.x % 30 === 0) {
        this.poopArray.push(new Poop(game.level));
      }
    } else if (game.level <= 8) {
      if ((this.x % 30 === 0) && (frameCount % 2 === 0)) {
        this.poopArray.push(new Poop(game.level));
      }
    } else if (game.level < 5) {
      if ((this.x % 30 === 0) && (frameCount % 3 === 0)) {
        this.poopArray.push(new Poop(game.level));
      }
    }

    this.poopArray.forEach(function (newPoop) {
      newPoop.draw();
      // remove element from array when it has been collected and update game score
      if (newPoop.pickUpPoop()) {
        game.dog.poopArray.splice(game.dog.poopArray.indexOf(newPoop),1);
        score.innerText = game.score;

        // add cash
        if (game.score % 3 ===0 ) {
          game.cash+=10;
          cash.innerText = game.cash;
        }
        // increase level
        if (game.score % 10 === 0) {
          game.levelUpSound.setVolume(0.2);
          game.levelUpSound.play();
          game.level++;
          game.dog.poopArray = [];
          level.innerText = game.level;
          game.background.generateBackground();
        }
      }
      // remove element from array when it has left the screen
      if (newPoop.y > HEIGHT + 5) {
        game.dog.poopArray.splice(game.dog.poopArray.indexOf(newPoop),1);
        game.cash-=50;
        if (game.cash < 0) {
          game.cash = 0;
        }
        cash.innerText = game.cash;
      }
    })
  }
  bark() {
    if (game.mode === 1 && !game.muted) {
      let bark = game.dogBark[Math.floor(Math.random()*game.dogBark.length)];
      bark.src.setVolume(0.2);
      bark.src.play();
    }
  }
}
