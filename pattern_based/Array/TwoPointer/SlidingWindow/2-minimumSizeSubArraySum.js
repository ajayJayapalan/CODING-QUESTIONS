const minSizeSubArraySum = (nums = [], target) => {
  if (!nums.length) return 0; // Handle empty array
  let min = Infinity;
  let right = 0;
  let left = 0;
  let sum = 0; // Initialize sum safely

  while (right < nums.length) {
    sum += nums[right]; // Add current element
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++; // Move right after processing
  }

  return min === Infinity ? 0 : min;
};

const res = minSizeSubArraySum([2, 3, 1, 2, 4, 3], 7);
console.log(res);
