// game.js - Khởi tạo game, main loop, xử lý input
import Player from './player.js';
import Map from './map.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 32;

let keysPressed = {};

const map = new Map(10, 15, tileSize);
const player = new Player(tileSize * 5, tileSize * 7, tileSize - 4, tileSize - 4);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  map.draw(ctx);
  player.draw(ctx);
}

function update() {
  player.handleInput(keysPressed, map);
  draw();
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', e => {
  keysPressed[e.key] = true;
});

window.addEventListener('keyup', e => {
  keysPressed[e.key] = false;
});

gameLoop();
