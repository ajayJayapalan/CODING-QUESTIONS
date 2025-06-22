const allPermutation = (nums = []) => {
  const result = [];
  const solution = [];

  const backtrack = () => {
    if (solution.length === nums.length) {
      result.push(solution.concat());
      return;
    }

    for (let num of nums) {
      if (!solution.includes(num)) {
        solution.push(num);
        backtrack();
        solution.pop();
      }
    }
  };

  backtrack();

  return result;
};

console.log(allPermutation([1, 2, 3]));
