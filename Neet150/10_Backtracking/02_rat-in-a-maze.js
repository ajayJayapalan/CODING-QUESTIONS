const ratInAMaze = (maze, [rowIndex, colIndex], path = []) => {
  const movements = ["U", "D", "R", "L"];

  const colCount = maze.length;
  const rowCount = maze[0].length;

  const canGo = (mov) => {
    switch (mov) {
      case movements[0]:
        return colIndex - 1 >= 0 ? [rowIndex, colIndex - 1] : [-1, -1];
      case movements[1]:
        return colIndex + 1 < colCount ? [rowIndex, colIndex + 1] : [-1, -1];
      case movements[2]:
        return rowIndex + 1 < rowCount ? [rowIndex + 1, colIndex] : [-1, -1];
      case movements[3]:
        return rowCount - 1 >= 0 ? [rowIndex - 1, colIndex] : [-1, -1];

      default:
        break;
    }
  };

  const fromPosition = path.at(-1);

  if (fromPosition) {
    for (let mov of movements) {
      let [row, col] = canGo(mov);
      if (col !== -1) {
        path.push(maze[col][row]);
        break;
      }
    }
  } else {
    path.push(maze[colIndex][rowIndex]);
  }
  ratInAMaze(maze);
};

let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
