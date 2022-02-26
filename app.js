// Find the <canvas/> element in the HTML
const canvas = document.querySelector("canvas");
// Grab the 'context' within it, in which we'll draw stuff
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// set line stroke and line width
const w = 10;
const h = 10;
ctx.lineWidth = 1;

// Run this loop every 10ms
setInterval(() => {
  // Draw 100 things each time
  for (let i = 0; i < 100; i++) {
    const color = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    ctx.fillRect(x, y, w, h);
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}, 10);
