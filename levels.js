function buildLevel(game, level)
{
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick === 1)
            {
                let position = {x: 80 * brickIndex, y: 75 + 40 * rowIndex};
                bricks.push(new Brick(game, position));
                //console.log(level, row);
            }
        });
    });
    //console.log("it gets here");
    //console.log(bricks[2].position);
    return bricks; 
}

const level1 = [
    [1,0,1,0,1,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
]