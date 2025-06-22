/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let index1 = 0;
  let index2 = numbers.length - 1;

  while (index1 < index2) {
    const sum = numbers[index1] + numbers[index2];
    if (sum === target) {
      return [index1 + 1, index2 + 1];
    } else if (sum > target) {
      index2--;
    } else if (sum < target) {
      index1++;
    }
  }
  return [-1, -1];
};
