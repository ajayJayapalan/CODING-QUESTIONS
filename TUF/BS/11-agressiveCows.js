const putCowsInMinDistance = (stalls = [], cows, minDistance) => {
  let count = cows;

  count--; // put cow in the initial position
  let lastCowIndex = 0;

  let putIndex = [lastCowIndex];
  for (let i = 1; i < stalls.length; i++) {
    let distance = stalls[i] - stalls[lastCowIndex];
    if (distance >= minDistance) {
      putIndex.push(i);
      count--;
      lastCowIndex = i;
    }
    if (count === 0) {
      console.log({ putIndex });
      return true;
    }
  }

  console.log({ putIndex });
  return false;
};

const res = putCowsInMinDistance([0, 3, 4, 7, 9, 10], 4, 4);
console.log(res);
