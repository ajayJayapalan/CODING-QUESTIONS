/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums = [], index = 0, res = [], subset = []) {
  for (let i = index; i < nums.length; i++) {
    subset.push(nums[i]);
    console.log(subset);
    res.push(subset);
    subsets(nums, i + 1, res, subset);

    subset.pop();
    res.push(subset);
    subsets(nums, i + 1, res, subset);
  }

  return res;
};

const input = [1, 2, 3];
const res = subsets(input);
console.log({ res });
