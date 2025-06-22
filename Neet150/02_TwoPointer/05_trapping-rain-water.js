/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) {
    return 0;
  }

  let leftMostHeightIndex = 0;
  let currentIndex = 1;
  let rightMostHeightIndex = 2;

  while (currentIndex < height.length) {
    const leftMost = height[leftMostHeightIndex];
    const rightMost = height[rightMostHeightIndex];

    // const waterUnit = Math.min(leftMost, rightMost) -
  }
};
