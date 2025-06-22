function fillShape(canvas) {
  const rows = canvas.length;
  const cols = canvas[0].length;

  function isValid(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols && canvas[x][y] === 0;
  }

  function bfsFill(startX, startY) {
    const queue = [[startX, startY]];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      canvas[x][y] = 1;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (isValid(nx, ny)) {
          queue.push([nx, ny]);
        }
      }
    }
  }

  // Find the border of the shape and start filling from the inside
  outerLoop: for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (canvas[i][j] === 1) {
        bfsFill(i, j);
        break outerLoop;
      }
    }
  }

  return canvas;
}

// Create a 20x20 canvas filled with 0s
const canvas = Array.from({ length: 20 }, () => Array(20).fill(0));

// Example shape: a rectangle border
for (let i = 5; i <= 14; i++) {
  canvas[5][i] = 1;
  canvas[14][i] = 1;
}
for (let i = 5; i <= 14; i++) {
  canvas[i][5] = 1;
  canvas[i][14] = 1;
}

// Print canvas before filling
console.log("Canvas before filling:");
canvas.forEach((row) => console.log(row.join(" ")));

const filledCanvas = fillShape(canvas);

// Print canvas after filling
console.log("\nCanvas after filling:");
filledCanvas.forEach((row) => console.log(row.join(" ")));
