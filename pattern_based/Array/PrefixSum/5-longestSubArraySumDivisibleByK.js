const longestSubarraySumDivByK = (nums = [], k) => {
  const map = new Map();
  map.set(0, -1); // Handle case when prefix sum is directly divisible

  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // Handle negative modulo
    let rem = ((sum % k) + k) % k;

    if (map.has(rem)) {
      const prevIndex = map.get(rem);
      maxLen = Math.max(maxLen, i - prevIndex);
    } else {
      map.set(rem, i); // Store first occurrence of this remainder
    }
  }

  return maxLen;
};
