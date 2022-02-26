// Find the <canvas/> element in the HTML
const canvas = document.querySelector("canvas");
// Grab the 'context' within it, in which we'll draw stuff
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
// Run this block every 100ms
setInterval(() => {
  ctx.fillStyle = "#00CCFF";
  const x = Math.random() * canvasWidth;
  const y = Math.random() * canvasHeight;
  const w = 10;
  const h = 10;
  ctx.fillRect(x, y, w, h);
}, 100);
