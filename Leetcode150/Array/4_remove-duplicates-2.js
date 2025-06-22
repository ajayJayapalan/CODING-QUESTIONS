const removeDupliates = (nums = []) => {
  if (nums.length <= 2) return nums.length;

  let k = 2; // First two elements are always valid

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return [k, nums.slice(0, k)];
};

console.log(removeDupliates([1, 1, 1, 1, 2, 3, 3]));
