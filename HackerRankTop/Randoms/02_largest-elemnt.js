const largestElement = (nums = []) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let num of nums) {
    max = Math.max(max, num);
  }

  return max;
};

console.log(largestElement([10, 24, 45, 90, 67]));
