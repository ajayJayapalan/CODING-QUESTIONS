const NQueens = (n) => {
  const solutions = [];
  let board = [];

  let queenCount = 0;
  let posDiagonals = new Set();
  let negDiagonals = new Set();
  let columns = new Set();

  const resetBoard = () => {
    let newBoard = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(".");
      }
      newBoard.push(row);
    }
    board = newBoard;
    queenCount = 0;
    posDiagonals = new Set();
    negDiagonals = new Set();
    columns = new Set();
  };

  const backtrack = (c, r) => {
    if (r >= n) {
      if (queenCount === n) {
        return true;
      } else {
        return false;
      }
    }

    if (c >= n) return backtrack(0, r + 1);

    if (columns.has(c)) return backtrack(c + 1, r);

    let negDiagonal = c - r;
    let posDiagonal = c + r;

    if (posDiagonals.has(posDiagonal) || negDiagonals.has(negDiagonal))
      return backtrack(c + 1, r);

    board[r][c] = "Q";
    queenCount++;
    columns.add(c);
    negDiagonals.add(negDiagonal);
    posDiagonals.add(posDiagonal);

    return backtrack(0, r + 1);
  };

  resetBoard();
  for (let i = 0; i < n; i++) {
    if (backtrack(i, 0)) {
      solutions.push(board);
    }
    resetBoard();
  }

  return solutions;
};

console.log(NQueens(4));
