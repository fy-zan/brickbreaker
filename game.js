class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.ball = new Ball(this);  
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle);
        let bricks = buildLevel(game, level1);
        this.gameObject = [this.ball, this.paddle, ...bricks];
    }

    update(deltaTime){
        this.gameObject.forEach(object => object.update(deltaTime));

        this.gameObject = this.gameObject.filter(object => !object.markedForDeletion);
    }

    draw(ctx){
        this.gameObject.forEach(object => object.draw(ctx));
    }

}