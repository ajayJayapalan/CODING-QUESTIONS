// brute force - fill all the subarray
// space - 1;
// time - n^2

const maxSubArr1 = (nums = []) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }

  return max;
};

// better - kadane's algo
// space - 1;
// time - n

const maxSubArr2 = (nums = []) => {
  let currentSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
