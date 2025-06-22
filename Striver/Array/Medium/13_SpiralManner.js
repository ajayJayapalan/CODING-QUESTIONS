const spiralManner = (arr) => {
  let n = arr.length;

  const spiral = [];

  let rightMax = n;
  let downMax = n;
  let leftMax = -1;
  let upMax = 0;

  let dirCount = 0;

  const DIRECTION = [
    [0, 1, rightMax, "right"], // right: ;
    [1, 0, downMax, "down"], // down
    [0, -1, leftMax, "left"], // left: ;
    [-1, 0, upMax, "up"], // up
  ];
  const getNextDir = () => {
    let dirIndex = dirCount % DIRECTION.length;
    const dir = [...DIRECTION[dirIndex]];

    if ([0, 1].includes(dirIndex)) {
      DIRECTION[dirIndex][2]--;
    } else {
      DIRECTION[dirIndex][2]++;
    }
    dirCount++;

    return dir;
  };

  let endi = Math.floor(n / 2);
  let endj = n % 2 === 0 ? endi - 1 : endi;

  let i = 0;
  let j = 0;

  let direction = getNextDir();
  while (i !== endi || j !== endj) {
    spiral.push(arr[i][j]);

    i += direction[0];
    j += direction[1];
    let minMax = direction[2];
    let dir = direction[3];

    if (["right", "left"].includes(dir) && j === minMax) {
      j -= direction[1];
      direction = getNextDir();
      i += direction[0];
    } else if (["up", "down"].includes(dir) && i === minMax) {
      i -= direction[0];
      direction = getNextDir();
      j += direction[1];
    }
  }
  spiral.push(arr[i][j]);

  return spiral;
};

console.log(
  spiralManner([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
