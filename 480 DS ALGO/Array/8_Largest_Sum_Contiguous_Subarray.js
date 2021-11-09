// Largest Sum of Contiguous Subarray

// 1. bruteforce algorithm
/* 

  time: O(n^2)
  space: O(1)

*/

const getSumOfSubArray = (arr) => {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (maxSum < sum) maxSum = sum;
    }
  }
  console.log(maxSum);
};

getSumOfSubArray([-1, -2, -3, -4]);

// Kadane algorithm
/* 

  time: O(n)
  space: O(1)

*/
const getSumOfSubArray2 = (arr) => {
  let maxSum = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (maxSum < sum) maxSum = sum;
    if (sum < 0) sum = 0;
  }
  console.log(maxSum);
};

getSumOfSubArray2([1, 2, 3, -2, 5]);
