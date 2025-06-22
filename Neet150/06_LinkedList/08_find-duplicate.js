/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const sumOfN = (nums.length * (nums.length - 1)) / 2;

  let sumOfNums = 0;
  for (let num of nums) {
    sumOfNums += num;
  }

  return sumOfNums - sumOfN;
};

const input = [1, 3, 4, 2, 3, 5];
const res = findDuplicate(input);
console.log({ res });
