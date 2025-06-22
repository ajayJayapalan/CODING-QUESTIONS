const countSubArraySum = (arr, k) => {
  const prefixSumMap = new Map();
  let prefixSum = 0;

  let totalCount = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, 1);
    } else {
      let count = prefixSumMap.get(prefixSum);
      count++;
      prefixSumMap.set(prefixSum, count);
    }

    let kComplementSum = prefixSum - k;
    const count = prefixSumMap.get(kComplementSum);
    if (count !== undefined) {
      totalCount += count;
    }
  }
  return totalCount;
};
