const subsets = (arr) => {
  let results = [[], []];

  for (let num of arr) {
    results[1].push(num);
    results.push([num]);
  }

  const dfs = (arr) => {
    if (arr.length === 2) {
      return [[arr[0]], [arr[1]]];
    }

    let sets = [];
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const remaining = arr.filter((el) => el !== num);
      const _sets = dfs(remaining);
      for (let set of _sets) {
        set.unshift(num);
        sets.push(set);
      }
    }
    return sets;
  };

  const sets = dfs(arr);
  for (let set of sets) {
    results.push(set);
  }

  return results;
};

const subset2 = (arr) => {
  let results = [[], []];

  const dfs = (arr) => {
    if (arr.length === 1) return [[arr[0]]];
    if (arr.length === 2) return [[arr[0]], [arr[1]]];

    let sets = [];
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let remaining = arr.slice(i + 1);
      const _sets = dfs(remaining);
      for (let set of _sets) {
        set.unshift(num);
        sets.push(set);
      }
    }
    return sets;
  };

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    results.push([num]); // [1] [2] [3]
    results[1].push(num); // [1, 2, 3]

    let remaining = arr.slice(i + 1);
    const sets = dfs(remaining);
    for (let set of sets) {
      set.unshift(num);
      results.push(set);
    }
  }

  return results;
};

const subsets3 = (arr) => {
  let results = [];

  const dfs = (index, path) => {
    // Add the current subset (path) to the results
    results.push([...path]);

    // Generate all subsets starting from the current index
    for (let i = index; i < arr.length; i++) {
      // Include the current element in the subset
      path.push(arr[i]);
      // Recurse with the next element
      dfs(i + 1, path);
      // Backtrack by removing the current element
      path.pop();
    }
  };

  dfs(0, []);
  return results;
};

// Example usage
const arr = [1, 2, 3];
console.log(subsets3(arr));

// console.log(subset2([1, 2, 3, 4]));
