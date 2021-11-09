/* 
Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
Note: Return -1 if you can't reach the end of the array.
*/

// Dynamic Programming
/* 

  time: O(n^2)
  space: O(n)

*/
const getJumps = (arr = [], n = arr.length) => {
  let minJumpArr = [0];

  for (let i = 1; i < n; i++) {
    minJumpArr[i] = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      if (i <= j + arr[j]) {
        minJumpArr[i] = Math.min(minJumpArr[i], minJumpArr[j] + 1);
      }
    }
  }

  const result = minJumpArr[minJumpArr.length - 1];
  if (result === Number.MAX_VALUE) return -1;

  return result;
};

console.log(getJumps([0, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
