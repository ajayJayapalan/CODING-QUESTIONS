const longestSubArray = (arr, k) => {
  // Map to store the first occurrence of a particular prefix sum
  const prefixSumMap = new Map();
  let prefixSum = 0; // Initialize prefix sum

  let maxSubArrayLength = 0; // Initialize the length of the longest subarray

  for (let i = 0; i < arr.length; i++) {
    // Update the prefix sum with the current array element
    prefixSum += arr[i];

    // If the prefix sum equals k, update the maximum subarray length
    if (prefixSum === k) {
      maxSubArrayLength = Math.max(maxSubArrayLength, i + 1);
    }

    // If the prefix sum is not in the map, add it with its index
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, i);
    }

    // Calculate the sum that needs to be found for a subarray sum to equal k
    let kComplementSum = prefixSum - k;

    // Check if the complement sum exists in the map
    const index = prefixSumMap.get(kComplementSum);
    if (index !== undefined) {
      // Update the maximum subarray length if the current subarray is longer
      maxSubArrayLength = Math.max(maxSubArrayLength, i - index);
    }
  }
  console.log({ prefixSumMap });
  return maxSubArrayLength; // Return the length of the longest subarray
};

// Example usage
const input = [1, 2, 3, 1, 1, 1, 1, 4, 2];
const k = 6;
const output = longestSubArray(input, k);
console.log(output); // Output: 4
