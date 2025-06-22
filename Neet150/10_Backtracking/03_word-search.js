const canFindWordInSearch = (matrix, index) => {
  let [colIndex, rowIndex] = index;
  if (colIndex > matrix.length && rowIndex > matrix[0].length) {
    return false;
  }
};

const searchWord = (matrix) => {
  let index = [0, 0];

  const isPreset = canFindWordInSearch(matrix, index);
};
