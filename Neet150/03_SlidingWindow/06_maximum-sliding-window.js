/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let [startIndex, endIndex] = [0, k];
  const maxSubArray = [];

  while (endIndex <= nums.length) {
    const subArray = [...nums].slice(startIndex, endIndex);
    const max = findMaxFromSubArray(subArray);
    maxSubArray.push(max);
    startIndex++;
    endIndex++;
  }

  return maxSubArray;
};

const findMaxFromSubArray = (subArray) => {
  return Math.max(...subArray);
};

const res = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log(res);
