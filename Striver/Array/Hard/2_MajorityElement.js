// n/3 times
const majorityElement1 = (arr) => {
  const majors = new Set();

  const neededCount = Math.floor(arr.length / 3);

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === element) {
        count++;
      }
      if (count > neededCount) {
        majors.add(element);
      }
    }
  }

  return majors;
};

const majorityElement2 = (arr) => {
  const map = new Map();
  const majors = new Set();

  const neededCount = Math.floor(arr.length / 3);

  for (let el of arr) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
    if (map.get(el) > neededCount) {
      majors.add(el);
    }
  }

  return majors;
};

const majorityElement3 = (arr) => {
  const neededCount = Math.ceil(n / 3);
  const majors = new Array(neededCount);
  const counts = new Array(neededCount).fill(0);
};

console.log(majorityElement1([11, 33, 33, 11, 33, 11]));
console.log(majorityElement2([11, 33, 33, 11, 33, 11]));
