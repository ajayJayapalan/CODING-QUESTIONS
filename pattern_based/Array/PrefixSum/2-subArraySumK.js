const subArraySumK = (nums = [], k) => {
  const map = new Map();
  let prefixSum = 0;
  let count = 0;

  map.set(0, 1); // start of the subarray

  for (let num of nums) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) ?? 0) + 1);
  }

  console.log({ map });
  return count;
};

// const res = subArraySumK([1, -1, 1, 1, 1, 1, 1], 3);
// console.log(res);

const prinSubArrayIndexK = (nums = [], k) => {
  const map = new Map();
  map.set(0, [0]);

  let sum = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sum += num;
    if (map.has(sum - k)) {
      const startIndexes = map.get(sum - k);
      for (let index of startIndexes) {
        result.push([index, i]);
      }
    }

    const startIndexs = map.get(sum) ?? [];
    map.set(sum, [...startIndexs, i + 1]);
  }

  return result;
};

const input = [1, -1, 1, 1, 1, 1, 1];
const res2 = prinSubArrayIndexK(input, 3);
for (let res of res2) {
  console.log(input.slice(res[0], res[1] + 1));
}
console.log(res2);
