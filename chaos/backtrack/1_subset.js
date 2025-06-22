const allSubset = (nums = []) => {
  const result = [];
  const solution = [];

  const backtrack = (index) => {
    if (index === nums.length) {
      result.push(solution.concat());
      return;
    }

    backtrack(index + 1);

    solution.push(nums[index]);
    backtrack(index + 1);
    solution.pop();
  };

  backtrack(0);
  return result;
};

console.log(allSubset([1, 2, 3]));
