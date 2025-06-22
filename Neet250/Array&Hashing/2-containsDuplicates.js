const containDuplicates = (nums = []) => {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

const res = containDuplicates([1, 2, 3, 4]);
console.log(res);
