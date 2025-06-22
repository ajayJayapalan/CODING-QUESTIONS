const canSplitArray = (nums = [], k, d) => {
  let localSum = d;
  let count = 1;

  for (let num of nums) {
    if (localSum < num) {
      count++;
      localSum = d;
    }
    localSum -= num;
  }

  if (count > k) return -1; // go for big number
  if (count < k) return -2; // go for small number;
  if (count === k) return 1;
};

const linearSplitArray = (nums = [], k) => {
  const min = Math.max(...nums);
  const max = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = min; i <= max; i++) {
    if (canSplitArray(nums, k, i) === 1) {
      return i;
    }
  }
  return -1;
};

const bsSplitArray = (nums = [], k) => {
  let left = Math.max(...nums);
  let right = nums.reduce((acc, cur) => acc + cur, 0);
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let result = canSplitArray(nums, k, mid);
    if (result === -2 || result === 1) {
      if (result === 1) {
        ans = mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

const res1 = bsSplitArray([1, 2, 3, 4, 5], 3);
const res2 = linearSplitArray([1, 2, 3, 4, 5], 3);
