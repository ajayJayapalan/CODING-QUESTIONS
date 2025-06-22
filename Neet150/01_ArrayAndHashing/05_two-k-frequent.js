/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let num of nums) {
    let count = 1;

    if (map.has(num)) {
      count = map.get(num);
      count++;
    }

    map.set(num, count);
  }

  return [...map.entries()]
    .sort((a, b) => a[1] - b[1])
    .slice(-k)
    .map((i) => i[0]);
};

var topKFrequent2 = function (nums, k) {
  const map = new Map();
  const countArray = new Array(nums.length);

  for (let num of nums) {
    let count = 1;

    if (map.has(num)) {
      count = map.get(num);
      count++;
    }

    map.set(num, count);
  }

  for (let [num, count] of map) {
    if (!Array.isArray(countArray[count])) {
      countArray[count] = [];
    }
    countArray[count].push(num);
  }

  let output = [];
  let kClone = k;
  for (let i = countArray.length - 1; i > 0; i--) {
    if (!Array.isArray(countArray[i]) || countArray[i].length === 0) continue;

    output.push(...countArray[i]);
    kClone--;

    if (kClone === 0) break;
  }

  return output;
};
