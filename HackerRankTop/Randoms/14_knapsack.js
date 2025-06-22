const knapsack = (values, weights, capacit) => {
  const map = new Map();

  const dp = (n, w) => {
    if (n === 0 || w === 0) return 0;

    let key = "" + n + "-" + w;
    if (map.has(key)) return map.get(key);

    if (weights[n - 1] > w) {
      const result = dp(n - 1, w);
      map.set(key, result);

      return result;
    }

    const include = values[n - 1] + dp(n - 1, w - weights[n - 1]);
    const excluede = dp(n - 1, w);

    const result = Math.max(include, excluede);
    map.set(key, result);

    return result;
  };

  return dp(values.length, capacit);
};
