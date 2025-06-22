const bruteMergeIntervals = (nums = []) => {
  if (nums.length === 1) return nums;

  const results = [];
  const used = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (used.has(i)) continue;

    let [start, end] = nums[i];

    for (let j = 0; j < nums.length; j++) {
      if (i === j && used.has(j)) continue;

      let [currStart, currEnd] = nums[j];

      if (Math.max(start, currStart) <= Math.min(end, currEnd)) {
        start = Math.min(start, currStart);
        end = Math.max(end, currEnd);
        used.add(j);
      }
    }

    results.push([start, end]);
    used.add(i);
  }

  return results;
};

console.log(
  bruteMergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
