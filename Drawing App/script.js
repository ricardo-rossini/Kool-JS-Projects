const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 20;
let x = 50;
let y = 50;

canvas.addEventListener('mousedown', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    drawCircle(x,y); 
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}

/* function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x,y); //++ will animate the axe
    requestAnimationFrame(draw);
}

draw(); */