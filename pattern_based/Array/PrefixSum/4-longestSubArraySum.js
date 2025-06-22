const longestSubArraySumWithK = (nums = [], k) => {
  let map = new Map();
  map.set(0, -1);

  let sum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sum += num;

    if (map.has(sum - k)) {
      const j = map.get(sum - k);
      max = Math.max(max, i - j);
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return max;
};

const input = [1, -1, 1, 1, 1, 1, 1];
const res2 = longestSubArraySumWithK(input, 3);
console.log({ res2 });
