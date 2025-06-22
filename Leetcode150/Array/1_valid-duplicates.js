// brute force approach
// time - n^2
// space - 1
const validDuplicates = (nums = []) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

// better approach
// time - nlogn + n
// space - 1
const validDuplicates2 = (nums = []) => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};

// optimal approach
// time - n
// space - n
const validDuplicates3 = (nums = []) => {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};
