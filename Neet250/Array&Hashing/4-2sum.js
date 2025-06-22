const twoSum = (nums = [], target = 0) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    }
    map.set(num, i);
  }

  return [-1, -1];
};

const res = twoSum([4, 5, 6], 10);
console.log(res);
