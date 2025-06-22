const longestKDistinctElementsSubArray = (nums = [], k) => {
  const map = new Map();

  let left = 0;
  let right = 0;

  let max = 0;
  let result = [null, null];

  while (right < nums.length) {
    let length = right - left + 1;
    if (map.size < k || map.has(nums[right])) {
      map.set(nums[right], (map.get(nums[right]) ?? 0) + 1);
      if (max < length) {
        max = length;
        result = [left, right];
      }
      right++;
    } else {
      const leftEl = map.get(nums[left]);
      if (leftEl === 1) {
        map.delete(nums[left]);
      } else {
        map.set(nums[left], leftEl - 1);
      }
      left++;
    }
  }

  return nums.slice(result[0], result[1] + 1);
};

const res = longestKDistinctElementsSubArray([6, 5, 1, 2, 3, 2, 1, 4, 5], 3);
console.log(res);
