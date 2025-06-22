/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();

  let count = 0;

  for (let num of nums) {
    set.add(num);
  }

  for (let num of set) {
    if (set.has(num - 1)) continue;

    if (!set.has(num - 1)) {
      let currentNum = num;
      let newCount = 0;
      while (set.has(currentNum)) {
        newCount++;
        currentNum++;
      }
      count = Math.max(count, newCount);
    }
  }

  return count;
};

const res = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);

console.log({ res });
