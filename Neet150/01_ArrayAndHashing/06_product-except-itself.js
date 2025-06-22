/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // const productMap = new Map();

  const preProduct = new Array(nums.length);
  const postProduct = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;
    if (i === 0) {
      preProduct[i] = nums[i];
      postProduct[j] = nums[j];
    } else {
      preProduct[i] = preProduct[i - 1] * nums[i];
      postProduct[j] = postProduct[j + 1] * nums[j];
    }
  }

  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      output.push(postProduct[i + 1]);
      continue;
    }
    if (i === nums.length - 1) {
      output.push(preProduct[i - 1]);
      break;
    }
    output.push(preProduct[i - 1] * postProduct[i + 1]);
  }

  return output;
};
