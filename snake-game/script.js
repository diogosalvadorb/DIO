let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0]={
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG() {
    context.fillstyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra(){
    for(i=0; i < snake.length; i++){
        context.fillstyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobra();
     
}

