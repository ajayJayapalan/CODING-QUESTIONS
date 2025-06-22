// brute force
const leaderArray2 = (arr) => {
  let n = arr.length;
  let leaders = [];
  for (let i = 0; i < n - 1; i++) {
    let isGreater = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        isGreater = false;
      }
    }
    if (isGreater) {
      leaders.push(arr[i]);
    }
  }

  leaders.push(arr.at(-1));

  return leaders;
};

// optimal
const leaderArray = (arr) => {
  let n = arr.length;

  let leaders = [];
  let max = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
      leaders.push(max);
    }
  }

  return leaders;
};

console.log(leaderArray([10, 22, 12, 3, 0, 6]));
