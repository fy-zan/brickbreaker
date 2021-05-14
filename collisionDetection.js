function detectCollision(ball, gameObject)
{
    let bottomBall = ball.position.y + ball.size;
    let topBall = ball.position.y;
    let topObject = gameObject.position.y;
    let leftofObject = gameObject.position.x;
    let rightofObject = gameObject.position.x + gameObject.width;
    let bottomObject = gameObject.position.y + gameObject.height;
    if (bottomBall >= topObject && topBall <= bottomObject && ball.position.x >= leftofObject && ball.position.x + ball.size <= rightofObject)
    {
        return true;
    }
    else
    {
        return false;
    }
}