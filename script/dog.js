class Dog {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.x = (WIDTH - this.width) / 2;
        this.xArray = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420]
        this.y = this.height;
        this.stepCount = 0;
        this.speed = 2;
        this.poopArray = [];
        this.newPostion = this.xArray[Math.floor(Math.random() * (this.xArray.length))];
    }
    draw() {
        image(game.dogImage, this.x, this.y, this.width, this.height);

        if (this.newPostion < this.x) {
            this.x -= this.speed;
        } else if (this.x < this.newPostion) {
            this.x += this.speed;
        } else {
            this.newPostion = this.xArray[Math.floor(Math.random() * (this.xArray.length))];
        }

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

        if ((this.x % 30 === 0) && (frameCount % 10 === 0)) {
            this.poopArray.push(new Poop());
        }
        this.poopArray.forEach(function (newPoop) {
            newPoop.draw();
            if (newPoop.pickUpPoop()) {
                game.dog.poopArray.splice(game.dog.poopArray.indexOf(newPoop),1);
                score.innerText = game.score;

                if (game.score % 3 ===0 ) {
                    game.cash+=10;
                    cash.innerText = game.cash;
                }
            }
            if (newPoop.y === HEIGHT+ 5) {
                game.dog.poopArray.splice(game.dog.poopArray.indexOf(newPoop),1);
                game.cash-=50;
                cash.innerText = game.cash;
            }
        })
    }
}
