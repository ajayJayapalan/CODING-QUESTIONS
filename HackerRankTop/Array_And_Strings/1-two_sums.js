// brute-force : find all possible solution
// time - n^2
// space - 1

const twoSum1 = (nums = [], target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) return [i, j];
    }
  }

  return [-1, -1];
};

// better Approach - use hash map.
// time - n
// space - n

const twoSum2 = (nums = [], target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) return [i, map.get(complement)];
    map.set(complement, i);
  }

  return [-1, -1];
};
