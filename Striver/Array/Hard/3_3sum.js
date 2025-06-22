const threeSum = (arr) => {
  const solutions = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const element = 0 - arr[i] + arr[j];
      for (let k = j + 1; k < arr.length; k++) {
        if (element === arr[k]) {
          const ans = [arr[i], element, arr[j]];
          ans.sort((a, b) => a - b);
          solutions.add(JSON.stringify(ans));
          break;
        }
      }
    }
  }

  return Array.from(solutions).map(JSON.parse);
};

const threeSum2 = (arr) => {
  const solutions = new Set();

  for (let i = 0; i < arr.length; i++) {
    let map = new Map();
    for (let j = i + 1; j < arr.length; j++) {
      const element = -(arr[i] + arr[j]);
      if (map.has(element)) {
        const ans = [arr[i], arr[j], element];
        ans.sort((a, b) => a - b);
        solutions.add(JSON.stringify(ans));
      } else {
        map.set(arr[j], j);
      }
    }
  }

  return Array.from(solutions).map(JSON.parse);
};

const threeSum3 = (arr) => {
  arr.sort((a, b) => a - b);

  const solution = new Set();

  let i = 0;
  let k = arr.length - 1;
  while (i < k) {
    let j = i + 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else if (sum === 0) {
        solution.add([arr[i], arr[j], arr[k]]);
        do {
          j++;
        } while (arr[j] === arr[j - 1] && j < k);
      }
    }
    k = arr.length - 1;
    do {
      i++;
    } while (arr[i] === arr[i - 1] && i < k);
  }

  return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum2([-1, 0, 1, 2, -1, -4]));
console.log(threeSum3([-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2]));
