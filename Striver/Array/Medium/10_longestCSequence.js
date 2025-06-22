// brute force
const longestConsecutiveSequence = (arr) => {
  let n = arr.length;
  let sequenceCount = 1;

  for (let i = 0; i < n; i++) {
    let num = arr[i];
    let count = 1;
    num++;
    for (let j = 0; j < n; j++) {
      if (num === arr[j]) {
        count++;
        num++;
      }
    }

    sequenceCount = Math.max(sequenceCount, count);
  }

  return sequenceCount;
};

// better approach

const longestConsecutiveElement = (arr) => {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let count = 1;
  let temp_count = 1;

  let num = arr[0];
  num++;

  for (let i = 1; i < n; i++) {
    if (arr[i] === num) {
      num++;
      temp_count++;
    } else {
      count = Math.max(count, temp_count);
      temp_count = 1;
      num = arr[i];
      num++;
    }
  }

  return count;
};

// optimal

const longestSuccessiveElements = (arr) => {
  let n = arr.length;

  const set = new Set();

  for (let el of arr) {
    set.add(el);
  }

  let count = 1;
  for (let i = 0; i < n; i++) {
    let tempCount = 1;
    let num = arr[i];
    num++;
    while (set.has(num)) {
      num++;
      tempCount++;
    }
    count = Math.max(tempCount, count);
  }

  return count;
};

console.log(longestSuccessiveElements([100, 200, 1, 3, 2, 4]));
