const allCombinationOrdered = (n, k) => {
  const result = [];
  const solution = [];

  const backtrack = () => {
    if (solution.length === k) {
      result.push(solution.concat());
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!solution.includes(i)) {
        solution.push(i);
        backtrack();
        solution.pop();
      }
    }
  };

  backtrack();
  return result;
};
const allCombinationUnOrdered = (n, k) => {
  const result = [];
  const solution = [];

  const backtrack = (index) => {
    if (solution.length === k) {
      result.push(solution.concat());
      return;
    }

    for (let i = index; i <= n; i++) {
      solution.push(i);
      backtrack(i + 1);
      solution.pop();
    }
  };

  backtrack(1);
  return result;
};

// console.log(allCombinationOrdered(4, 2));
console.log(allCombinationUnOrdered(4, 2));
