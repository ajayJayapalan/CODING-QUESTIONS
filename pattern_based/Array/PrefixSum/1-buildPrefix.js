const buildPrefixSum = (nums = []) => {
  let prefixSum = [];
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = 0; j <= i; i++) {
      sum += nums[j];
    }
    prefixSum.push(sum);
  }
  return prefixSum;
};

const buildPrefixSum2 = (nums = []) => {
  let prefixSum = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const prefix = prefixSum[i - 1] + nums[i];
    prefixSum.push(prefix);
  }

  return prefixSum;
};
