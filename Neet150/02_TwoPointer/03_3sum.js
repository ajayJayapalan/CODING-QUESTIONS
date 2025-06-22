/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  const length = nums.length;

  const output = new Array();

  for (let index1 = 0; index1 <= length - 3; index1++) {
    for (let index2 = index1 + 1; index2 <= length - 2; index2++) {
      for (let index3 = index2 + 1; index3 <= length - 1; index3++) {
        if (index1 !== 0) {
          if (sortedNums[index1 - 1] === sortedNums[index1]) {
            break;
          }
        }
        const sumOfFirstTwo = sortedNums[index1] + sortedNums[index2];
        const neededNumber = 0 - sumOfFirstTwo;
        if (neededNumber > sortedNums[index3]) {
          continue;
        } else if (neededNumber === sortedNums[index3]) {
          output.push([
            sortedNums[index1],
            sortedNums[index2],
            sortedNums[index3],
          ]);
          break;
        } else {
          break;
        }
      }
    }
  }

  return output;
};

const values = [-1, 0, 1, 2, -1, -4];
const res = threeSum(values);
console.log({ res });
