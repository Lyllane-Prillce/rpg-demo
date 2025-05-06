// player.js - quản lý nhân vật

export default class Player {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = '#f4a261';
      this.speed = 2;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    handleInput(keys, map) {
      let newX = this.x;
      let newY = this.y;
  
      if(keys['ArrowUp'] || keys['w']) newY -= this.speed;
      if(keys['ArrowDown'] || keys['s']) newY += this.speed;
      if(keys['ArrowLeft'] || keys['a']) newX -= this.speed;
      if(keys['ArrowRight'] || keys['d']) newX += this.speed;
  
      if(!map.isCollision(newX, this.y, this.width, this.height)) {
        this.x = newX;
      }
      if(!map.isCollision(this.x, newY, this.width, this.height)) {
        this.y = newY;
      }
    }
  }
  