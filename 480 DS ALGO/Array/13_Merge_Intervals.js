/* 
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

/* 

  time: O(n)
  space: O(n)

*/

const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [9, 18],
];

const mergeIntervals = (arr = []) => {
  arr = arr.sort((a, b) => a[0] - b[0]);
  const mergeArr = [];
  loop1: for (let i = 0; i < arr.length; i++) {
    let j = i;
    if (j === arr.length - 1) {
      mergeArr.push([arr[i][0], arr[j][1]]);
      break loop1;
    }
    while (arr[i][1] >= arr[j + 1][0]) {
      j++;
      if (j === arr.length - 1) {
        mergeArr.push([arr[i][0], arr[j][1]]);
        break loop1;
      }
    }
    mergeArr.push([arr[i][0], arr[j][1]]);
    //arr.splice(i + 1, j - (i + 1));
    if (j > i) {
      i += j - i;
    }
  }
  console.log("===output===", mergeArr);
};
console.log("===input===", input);
mergeIntervals(input);
