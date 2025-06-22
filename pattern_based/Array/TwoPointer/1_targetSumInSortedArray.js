const targetSumInSortedArray = (nums = [], target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return true;

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

const res = targetSumInSortedArray([1, 1, 2, 3], 6);
console.log(res);
