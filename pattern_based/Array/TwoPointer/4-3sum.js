const threeSum = (nums = []) => {
  nums.sort((a, b) => a - b);

  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skiping already did

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      while (left < right && nums[left] === nums[left + 1]) left++; // skipping duplicates
      while (left < right && nums[right] === nums[right - 1]) right--; // skipping duplicates

      if (!(left < right)) break;

      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

const res = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(res);
