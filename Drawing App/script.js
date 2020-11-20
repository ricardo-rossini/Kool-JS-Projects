const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const canvas = document.getElementById('canvas');
const colorEl = document.getElementById('color');
const sizeEl = document.getElementById('size'); 
const ctx = canvas.getContext('2d');

let color = 'black';
let size = 20;
let x = undefined;
let y = undefined;
let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    } 
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
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

colorEl.addEventListener('change', (e) => {
    color = e.target.value; 
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
