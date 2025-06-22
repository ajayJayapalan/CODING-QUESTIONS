/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = new Map();
  const columnMap = new Map();
  const subArrayMap = new Map();

  for (let i = 0; i < 9; i++) {
    // row
    for (let j = 0; j < 9; j++) {
      // column
      const subArray_i = Math.floor(i / 3);
      const subArray_j = Math.floor(j / 3);
      const currentElement = board[i][j];

      const rowMapKey = [i, currentElement].toString();
      const columnMapKey = [j, currentElement].toString();
      const subArrayMapKey = [
        subArray_i,
        subArray_j,
        currentElement,
      ].toString();

      if (
        rowMap.has(rowMapKey) ||
        columnMap.has(columnMapKey) ||
        subArrayMap.has(subArrayMapKey)
      ) {
        return false;
      }

      if (currentElement !== ".") {
        rowMap.set(rowMapKey, 1);
        columnMap.set(columnMapKey, 1);
        subArrayMap.set(subArrayMapKey, 1);
      }
    }
  }

  return true;
};

const res = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

console.log(res);
