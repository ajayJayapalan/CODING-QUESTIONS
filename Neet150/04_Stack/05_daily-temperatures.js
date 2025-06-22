/**
 * Monotonic Stack
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let index = 0; index < temperatures.length; index++) {
    if (index === 0) {
      stack.push(index);
      continue;
    }
    while (canShrink(temperatures, stack, index)) {
      topIndex = stack[stack.length - 1];
      result[topIndex] = index - topIndex;
      stack.pop();
    }

    stack.push(index);
  }
  return result;
};

const canShrink = (temperatures, stack, index) => {
  if (stack.length === 0) return false;
  const topTemp = temperatures[stack[stack.length - 1]];
  const currentTemp = temperatures[index];
  return topTemp < currentTemp;
};

const res = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log({ res });
