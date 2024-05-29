let cor;
let circuloX; // posição horizontal
let circuloY; // posição verticl

let x2; // posição horizontal
let y1; // posição vertical

function setup() {
  
  createCanvas(400, 400);
  
  background(color(230, 0, 0))
  
  cor=color(random(0, 255), random(0, 255), random(0, 255))
  
  circuloX = [0, 0, 0];
  
  circuloY = [random(height), random(height), random(height)]
  
}