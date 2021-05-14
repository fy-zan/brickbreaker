
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
/*
ctx.clearRect(0,0,800,600); 
ctx.fillStyle = '#f00';
ctx.fillRect(20,20,100,100);

ctx.fillStyle = "#00f";
ctx.fillRect(200,200, 50,50);
*/
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


let lastTime = 0;
function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);