/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxRectArea = 0;
  let prevHeight = null;
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    if (prevHeight === null) {
      prevHeight = currentHeight;
      maxRectArea = currentHeight;
      stack.push(i);
    } else if (prevHeight < currentHeight) {
      stack.push(i);
      prevHeight = currentHeight;
      maxRectArea = Math.max(maxRectArea, currentHeight);
    } else if (prevHeight > currentHeight) {
      while (heights[stack.at(-1)] > currentHeight) {
        console.log("loop", { stack });
        const topIndex = stack.at(-1);
        const top = heights[topIndex];
        const rectHeight = top;
        const rectWidth = i - topIndex;
        const rectArea = rectHeight * rectWidth;
        maxRectArea = Math.max(maxRectArea, rectArea);

        stack.pop();
      }
      prevHeight = currentHeight;
    } else if (prevHeight === currentHeight) {
      maxRectArea = Math.max(maxRectArea, currentHeight);
    }
  }

  console.log({ stack });

  while (stack.length > 0) {
    const topIndex = stack.at(-1);
    const top = heights[topIndex];
    const rectHeight = top;
    const rectWidth = heights.length - topIndex;
    const rectArea = rectHeight * rectWidth;
    maxRectArea = Math.max(maxRectArea, rectArea);

    stack.pop();
  }

  return maxRectArea;
};

const input = [1, 2, 3, 4, 2];
const res = largestRectangleArea(input);
console.log({ res });
