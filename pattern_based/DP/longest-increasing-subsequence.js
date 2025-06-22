const longestIncreasingSubSequence = (nums = []) => {
  const memo = new Array(nums.length).fill(1);

  const findMinIndex = (n, value) => {
    if (n < 0) return -1;
    for (let i = n - 1; i >= 0; i--) {
      if (nums[i] < value) return i;
    }
    return -1;
  };

  const getLongestSubSequenceAtN = (n) => {
    let minIndex = findMinIndex(n, nums[n]);
    if (minIndex !== -1) {
      memo[n] += memo[minIndex];
    }
    return memo[n];
  };

  let maxLen = 0;
  for (let i = 1; i < nums.length; i++) {
    const len = getLongestSubSequenceAtN(i);
    if (maxLen < len) {
      maxLen = len;
    }
  }

  console.log(memo);

  return maxLen;
};

console.log(longestIncreasingSubSequence([1, 3, 6, 7, 9, 4, 10, 5, 6]));
