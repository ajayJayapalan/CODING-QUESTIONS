const equalSumSubsets = (arr, k) => {
  let results = [];

  const backtrack = (index, path, sum) => {
    if (sum === k) {
      results.push([...path]);
    }

    for (let i = index; i < arr.length; i++) {
      let num = arr[i];

      path.push(num);
      sum += num;

      backtrack(i + 1, path, sum);

      path.pop(num);
      sum -= num;
    }
  };

  backtrack(0, [], 0);

  return results;
};

console.log(equalSumSubsets([4, 3, 2, 3, 5, 2, 1], 4));
