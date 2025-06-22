const sumString = (str) => {
  let n = str.length;
  const addString = (str1, str2) => {
    const sum = parseInt(str1) + parseInt(str2);

    return "" + sum;
  };

  const backtrack = (start, end) => {
    // Base case
    if (end - start < 2) return false;

    for (let i = start + 1; i < end; i++) {
      for (let j = i + 1; j <= end; j++) {
        const substring1 = str.substring(start, i);
        const substring2 = str.substring(i, j);
        const sum = addString(substring1, substring2);
        const nextSubString = str.substring(j, j + sum.length);

        if (sum === nextSubString) {
          if (j + sum.length === end) {
            return true;
          }
          if (backtrack(i, end)) {
            return true;
          }
        }
      }
    }

    return false;
  };
  return backtrack(0, n);
};

console.log(sumString("1111112223"));
