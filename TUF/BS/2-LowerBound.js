const lowerBound = (nums = [], target) => {
  let left = 0;
  let right = nums.length - 1;

  let lastIndex = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let num = nums[mid];
    if (num === target) {
      lastIndex = mid;
      right = mid - 1;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastIndex;
};
