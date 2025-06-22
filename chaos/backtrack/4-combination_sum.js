const combinationSum = (nums = [], target) => {
  const result = [];
  const solution = [];

  const backtrack = (sum, index) => {
    if (sum > target) return;

    if (sum === target) {
      result.push(solution.concat());
      return;
    }

    for (let i = index; i < nums.length; i++) {
      const num = nums[i];

      solution.push(num);
      sum += num;
      backtrack(sum, i);
      sum -= num;
      solution.pop();
    }
  };

  backtrack(0, 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
