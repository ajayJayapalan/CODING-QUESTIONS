const ratInAMaze = (mazeBoard) => {
  const direction = {
    u: [-1, 0],
    d: [1, 0],
    r: [0, 1],
    l: [0, -1],
  };
  const visited = new Set();
  const solutions = [];
  const n = mazeBoard.length;

  const backtrack = (r, c, path) => {
    if (r === n - 1 && c === n - 1) {
      solutions.push(path);
      return;
    }

    for (let [key, value] of Object.entries(direction)) {
      const [dr, dc] = value;
      const newR = r + dr;
      const newC = c + dc;

      let visitKey = `${newR}- ${newC}`;
      if (
        newR < n &&
        newR > -1 &&
        newC < n &&
        newC > -1 &&
        mazeBoard[newR][newC] &&
        !visited.has(visitKey)
      ) {
        path += key;
        visited.add(visitKey);
        backtrack(newR, newC, path);
        visited.delete(visitKey);
        path = path.slice(0, -1);
      }
    }

    return;
  };

  backtrack(0, 0, "");

  return solutions;
};

const input = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const output = ratInAMaze(input);
console.log(output);
