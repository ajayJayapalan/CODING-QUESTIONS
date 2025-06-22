/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === nums[midIndex]) return midIndex;
    if (target > nums[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return "not found babe.";
};

const input = [-1, 0, 3, 5, 9, 12];
for (let tar of input) {
  const res = search(input, tar + 1);
  console.log({ res });
}
