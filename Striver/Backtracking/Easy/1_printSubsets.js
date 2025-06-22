const printSubsets = (arr) => {
  const results = [];

  const backtrack = (index, path) => {
    results.push([...path]);

    for (let i = index; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };

  backtrack(0, []);

  return results;
};

console.log(printSubsets([1, 2, 3]));
/* 
[
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 2, 3 ],
  [ 1, 3 ], [ 2 ],
  [ 2, 3 ], [ 3 ]
]
*/
