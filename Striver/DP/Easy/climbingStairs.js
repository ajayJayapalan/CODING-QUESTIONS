const climbingStaris = (n) => {
  const dp = new Array(n + 1).fill(-1);

  const findCounts = (index) => {
    if (index === 0) return 1;
    if (index === 1) return 1;
    if (dp[index] !== -1) return dp[index];

    dp[index] = findCounts(index - 1) + findCounts(index - 2);

    return dp[index];
  };

  return findCounts(n);
};

console.log(climbingStaris(3));
