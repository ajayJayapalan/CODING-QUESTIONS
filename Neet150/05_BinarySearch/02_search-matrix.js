var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === nums[midIndex]) return true;
    if (target > nums[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let leftMatrixIndex = 0;
  let rightMatrixIndex = matrix.length - 1;

  while (leftMatrixIndex <= rightMatrixIndex) {
    let midMatrixIndex = Math.floor((leftMatrixIndex + rightMatrixIndex) / 2);
    const arr = matrix[midMatrixIndex];
    if (target >= arr[0] && target <= arr[arr.length - 1]) {
      return search(arr, target);
    }
    if (target > arr[arr.length - 1]) {
      leftMatrixIndex = midMatrixIndex + 1;
    } else {
      rightMatrixIndex = midMatrixIndex - 1;
    }
  }

  // optimised way

  return false;
};

// log(m * n);
const optimisedSearchMatrix = function (matrix, target) {
  let [cols, rows] = [matrix.length, matrix[0].length];
  let leftMatrixIndex = 0;
  let rightMatrixIndex = cols * rows - 1;

  while (leftMatrixIndex <= rightMatrixIndex) {
    let midMatrixIndex = (leftMatrixIndex + rightMatrixIndex) >> 1; // left + right / 2;
    let matrixIndex = Math.floor(midMatrixIndex / rows);
    let arrayIndex = midMatrixIndex % rows;
    const element = matrix[matrixIndex][arrayIndex];

    if (target === element) return true;
    if (target > element) {
      leftMatrixIndex = midMatrixIndex + 1;
    } else {
      rightMatrixIndex = midMatrixIndex - 1;
    }
  }

  return false;
};

const input = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

for (let arr of input) {
  for (let tar of arr) {
    const res = optimisedSearchMatrix(input, tar);
    console.log({ res });
  }
}
