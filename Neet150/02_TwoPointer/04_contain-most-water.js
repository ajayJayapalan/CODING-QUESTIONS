/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let bigArea = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const possibleHeight = Math.min(height[i], height[j]);
      const possibleWidth = j - i;
      const area = possibleHeight * possibleWidth;
      bigArea = Math.max(area, bigArea);
    }
  }

  return bigArea;
};
