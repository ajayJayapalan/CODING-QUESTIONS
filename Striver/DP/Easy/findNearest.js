const solve = (bools = []) => {
  const result = new Array(bools.length).fill(-1);
  let count = -1;

  for (let i = 0; i < bools.length; i++) {
    const bool = bools[i];
    if (bool) {
      result[i] = 0;

      let k = i - 1;
      count = 1;
      while (k >= 0) {
        if (result[k] === -1 || result[k] > count) {
          result[k] = count;
          count++;
        } else {
          break;
        }
        k--;
      }
      count = 0;
    } else {
      if (count !== -1) {
        result[i] = ++count;
      }
    }
  }

  return result;
};

const bools = [false, true, false, true, false, true];
// [1, 0, 1, 2, 2, 1, 0]

console.log(solve(bools));
