// map.js - quản lý bản đồ đơn giản (tiles)

// 0 = không cản, 1 = tường
const sampleMapData = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,0,0,1],
    [1,0,1,0,0,0,1,0,0,1],
    [1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,0,0,1,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
  ];
  
  export default class Map {
    constructor(cols, rows, tileSize) {
      this.cols = cols;
      this.rows = rows;
      this.tileSize = tileSize;
  
      // Dữ liệu bản đồ
      this.data = sampleMapData;
    }
  
    draw(ctx) {
      // Vẽ tiles
      for(let r=0; r<this.rows; r++) {
        for(let c=0; c<this.cols; c++) {
          if(this.data[r][c] === 1) {
            ctx.fillStyle = '#264653'; // tường màu xanh đậm
            ctx.fillRect(c*this.tileSize, r*this.tileSize, this.tileSize, this.tileSize);
          } else {
            ctx.fillStyle = '#2a9d8f'; // đất màu xanh lục nhạt
            ctx.fillRect(c*this.tileSize, r*this.tileSize, this.tileSize, this.tileSize);
          }
        }
      }
    }
  
    isCollision(x, y, width, height) {
      // Kiểm tra collision với tường
      // tính ô tile từ tọa độ pixel
      const leftCol = Math.floor(x / this.tileSize);
      const rightCol = Math.floor((x + width) / this.tileSize);
      const topRow = Math.floor(y / this.tileSize);
      const bottomRow = Math.floor((y + height) / this.tileSize);
  
      // Nếu ngoài bản đồ coi là wall
      if(leftCol < 0 || rightCol >= this.cols || topRow < 0 || bottomRow >= this.rows) return true;
  
      // Check từng tile ở những vị trí va chạm
      for(let row = topRow; row <= bottomRow; row++) {
        for(let col = leftCol; col <= rightCol; col++) {
          if(this.data[row][col] === 1) return true;
        }
      }
      return false;
    }
  }
  