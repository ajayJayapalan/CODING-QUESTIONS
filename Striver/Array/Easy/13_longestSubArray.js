// hashing
const longestSubArray = (arr, k) => {
  const prefixSumMap = new Map();
  let prefixSum = 0;

  let maxSubArrayLength = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, i);
    }

    let kComplementSum = prefixSum - k;
    const index = prefixSumMap.get(kComplementSum);
    if (index !== undefined) {
      maxSubArrayLength = Math.max(maxSubArrayLength, i - index);
    }
  }
  return maxSubArrayLength;
};

// sliding window

const longestSubArray2 = (arr, k) => {
  let left = 0;
  let right = 0;

  let sum = 0;
  let maxLength = 0;

  while (right < arr.length) {
    sum += arr[right];

    if (sum === k) {
      maxLength = Math.max(maxLength, right - left);
    } else if (sum > k) {
      sum -= arr[left];
      left++;
    }
    right++;
  }

  return maxLength;
};

const input = [1, 2, 1, 1, 1, 4, 2, 3];
const k = 5;
const output = longestSubArray(input, k);
console.log(output);
