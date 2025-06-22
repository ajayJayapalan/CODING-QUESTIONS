const nQueens = (n) => {
  let solutions = [];

  let queensCount = 0;
  let posDiagonals = new Set();
  let negDiagonals = new Set();
  let columns = new Set();

  let board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(".");
    }
    board.push(row);
  }

  const backtrack = (row) => {
    if (row >= n) {
      if (queensCount === n) {
        solutions.push(JSON.parse(JSON.stringify(board)));
      }
      return;
    }

    for (let c = 0; c < n; c++) {
      let negDiagonal = c - row;
      let posDiagonal = c + row;

      const isAssignable =
        !posDiagonals.has(posDiagonal) &&
        !negDiagonals.has(negDiagonal) &&
        !columns.has(c);

      if (isAssignable) {
        board[row][c] = "Q";
        queensCount++;
        posDiagonals.add(posDiagonal);
        negDiagonals.add(negDiagonal);
        columns.add(c);

        backtrack(row + 1, c);

        board[row][c] = ".";
        queensCount--;
        posDiagonals.delete(posDiagonal);
        negDiagonals.delete(negDiagonal);
        columns.delete(c);
      }
    }
  };

  backtrack(0);
  return solutions;
};

console.log(nQueens(4));
