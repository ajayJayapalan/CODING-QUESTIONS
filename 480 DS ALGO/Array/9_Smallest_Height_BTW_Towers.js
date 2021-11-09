/* 
Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer. 
Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.
*/

// 1
/* 

    time : O(n*logn)
    space : O(1)

*/

const smallHeight = (arr = [], k) => {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let max = arr[n - 1];
  let min = arr[0];
  let res = max - min;

  for (let i = 1; i < n; i++) {
    max = Math.max(arr[i - 1] + k, arr[n - 1] - k);
    min = Math.min(arr[i] - k, arr[0] + k);
    if (min < 0) continue;
    res = Math.min(res, max - min);
  }

  console.log(res);
};

smallHeight([1, 2, 3, 4], 3);
