const dino = document.getElementById("dino");
const obstaculo = document.getElementById("obstaculo");
let isjumping = false;
let speed = 10;
const acceleration = 10;
const interval = 30;
const gameAreaWidth = document.getElementById("gameArea").offsetWidth;

function jump() {
    if (isjumping) return;
    isjumping = true;
    dino.style.animation = "jump 0.5s ease-out";
    setTimeout( () => {
        dino.style.animation = "";
        isjumping = false
    }, 500);
}
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }    
});

function moveObstaculo() {
    let obstaculoPos = obstaculo.offsetLeft;
    obstaculo.style.left = obstaculoPos - speed + "px";
    if (obstaculoPos <= -20) {
        obstaculo.style.left=gameAreaWidth + "px";
    }
checkCollision();

}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const obstaculoReact = obstaculo.getBoundingClientRect();

        if(
            dinoRect.right > obstaculoReact.left &&
            dinoRect.left < obstaculoReact.right &&
            dinoRect.bottom > obstaculoReact.top &&
            dinoRect.top < obstaculoReact.bottom
        ){
            alert("Game Over")
            clearInterval(gameInterval);
            clearInterval(speedInterval);
        }
}

function increaseSpeed() {
    speed += acceleration;
}
const speedInterval = setInterval(increaseSpeed,30000);
const gameInterval = setInterval(moveObstaculo,interval);
    const dino = document.getElementById("dino");
const obstaculo = document.getElementById("obstaculo");
let isjumping = false;
let speed = 10;
const acceleration = 10;
const interval = 30;
const gameAreaWidth = document.getElementById("gameArea").offsetWidth;

function jump() {
    if (isjumping) return;
    isjumping = true;
    dino.style.animation = "jump 0,5s ease-out";
    setTimeout( () => {
        dino.style.animation = "";
        isjumping = false
    }, 500);
}
document.addEventListener("keydown", function(event) {
    if (event.code==="Space") {
        jump();
    }    
});

function moveObstaculo() {
    let obstaculoPos = obstaculo.offsetLeft;
    obstaculo.style.left = obstaculoPos - speed + "PX";
    if (obstaculoPos <= -20) {
        obstaculo.style.left=gameAreaWidth + "px";
    }
checkCollision();

}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const obstaculoReact = obstaculo.getBoundingClientRect;

        if(
            dinoRect.right > obstaculoRect.left &&
            dinoRect.left < obstaculoRect.right &&
            dinoRect.bottom > obstaculoRect.top &&
            dinoRect.top < obstaculoRect.bottom
        ){
            alert("Game Over")
            clearInterval(gameInterval);
            clearInterval(speedInterval);
        }
}

function increaseSpeed() {
    speed += acceleration;
}
const speedInterval = setInterval(increaseSpeed,30000);
const gameInterval = setInterval(moveObstaculo,interval);
    
