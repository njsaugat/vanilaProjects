const showRules=document.body.querySelector('.show-rules')
const close=document.body.querySelector('.close')
const rules=document.body.querySelector('.rules')
const canvas=document.body.querySelector('.game-box')
const canvasWidth=canvas.getAttribute('width')
const canvasHeight=canvas.getAttribute('height')
console.log(canvasHeight)


const fillColor='#0095dd'

let score=0;
const brickRowCount = 9;
const brickColumnCount = 5;
const delay = 500; //delay to reset the game

const ctx=canvas.getContext('2d')

ctx.fillStyle=fillColor;
// const bricks={
//     ROWS :5,
//     COLUMNS :10,
//     XGAP :80,
//     YGAP :30,
//     w :70,
//     h :20,
//     OFFSET :35,
//     visible:true
// }

const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
  };

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}


//Create ball props
const ball={
    x:canvasWidth/2,
    y:canvasHeight/2,
    size:10,
    speed:4,
    dx:4,
    dy:-4,
    visible:true

}

// Create Paddle Props
const paddle={
    x:canvasWidth/2-50,
    y:canvasHeight-20,
    w:100,
    h:10,
    speed:8,
    dx:0,
    visible:true


}



//Draw Ball on Canvas

function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y , ball.size, 0, 2 * Math.PI);
    ctx.fillStyle=fillColor
    ctx.fill()
    ctx.closePath()

}
//draw paddle
function drawPaddle(){
    ctx.fillRect(paddle.x,paddle.y,paddle.w,paddle.h)

}

// Draw bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
      column.forEach(brick => {
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, brick.w, brick.h);
        ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';//most important stuff
        ctx.fill();
        ctx.closePath();
      });
    });
  }

//draw score
function drawScore(){
    ctx.font='20px Arial'
    ctx.fillText(`Score:${score}`,canvasWidth-100,19)
}

// Increase score
function increaseScore() {
    score++;
  
    if (score % (brickRowCount * brickColumnCount) === 0) {
  
        ball.visible = false;
        paddle.visible = false;
  
        //After 0.5 sec restart the game
        setTimeout(function () {
            showAllBricks();
            score = 0;
            paddle.x = canvas.width / 2 - 40;
            paddle.y = canvas.height - 20;
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.visible = true;
            paddle.visible = true;
        },delay)
    }
}

// Make all bricks appear
function showAllBricks() {
    bricks.forEach(column => {
      column.forEach(brick => (brick.visible = true));
    });
}

function movePaddle(){
    paddle.x+=paddle.dx;
    //collision left-right
    if(paddle.x+paddle.w >canvasWidth){
        paddle.x =canvasWidth-paddle.w
    }
    //collision top-bottom
    if(paddle.x<0){
        paddle.x=0
    }
    
    //paddle collision
    if(ball.x -ball.size > paddle.x
         && ball.x+ball.size<paddle.x+paddle.w 
         && ball.y+ball.size>paddle.y){
        ball.dy*=-1
    }

    bricks.forEach(column => {
        column.forEach(brick => {
          if (brick.visible) {
            if (
              ball.x - ball.size > brick.x && // left brick side check
              ball.x + ball.size < brick.x + brick.w && // right brick side check
              ball.y + ball.size > brick.y && // top brick side check
              ball.y - ball.size < brick.y + brick.h // bottom brick side check
            ) {
              ball.dy *= -1;
              brick.visible = false;
    
              increaseScore();
            }
          }
        });
    });
    if (ball.y + ball.size > canvas.height) {
        showAllBricks();
        score = 0;
    }
    


}

function moveBall(){
    ball.x+=ball.dx
    ball.y+=ball.dy

    if(ball.x+ball.size>canvasWidth || ball.x-ball.size<0){
        ball.dx*=-1
    }
    if(ball.y+ball.size>canvasHeight || ball.y-ball.size<0){
        ball.dy*=-1
    }
}

function draw(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    drawBall()
    drawPaddle()
    drawScore()
    drawBricks()
}

function update(){
    movePaddle()
    moveBall()
    draw()

    requestAnimationFrame(update)
}
update()




// ctx.fillRect(0,10,100,20)
// ctx.fillRect(120,10,100,20)
// ctx.fillRect(240,10,100,20)
function keyDown(e){
    if(e.key ==='Right' || e.key ==='ArrowRight'){
        paddle.dx=paddle.speed
    }else if(e.key ==='Left' || e.key ==='ArrowLeft'){
        paddle.dx=-paddle.speed

    }
}
function keyUp(e){
    if(e.key ==='Right' || e.key ==='ArrowRight'|| e.key ==='Left' || e.key ==='ArrowLeft'){
        paddle.dx=0

    }

}

document.addEventListener('keydown',keyDown)
document.addEventListener('keyup',keyUp)


showRules.addEventListener('click',()=>{
    rules.classList.add('show')
})
close.addEventListener('click',()=>{
    rules.classList.remove('show')
})