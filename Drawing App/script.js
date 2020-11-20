const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const canvas = document.getElementById('canvas');
const sizeEl = document.getElementById('size'); 
const ctx = canvas.getContext('2d');
let size = 20;
let x = 50;
let y = 50;
let isPressed = false;

canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x,y);
    } 
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}

increaseBtn.addEventListener('click', () => {
    size += 5;
    if(size > 50) {
        size =50;
    }

    updateize()
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if(size < 5) {
        size = 5;
    }

    updateize()
});

function updateize() {
    sizeEl.innerHTML = size;
}

/* function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x,y); //++ will animate the axe
    requestAnimationFrame(draw);
}

draw(); */
