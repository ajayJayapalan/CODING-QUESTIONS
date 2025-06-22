const nextPermutation = (arr) => {
  let nextSmallestFromLast = 0;
  // 1. find the next smalles element from the last
  for (let i = arr.length; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      nextSmallestFromLast = i - 1;
      break;
    }
  }

  // 2. find the next greatest element from the right
  // 3. swap it with the nextSmallest Element

  if (nextSmallestFromLast === 0) return arr.sort((a, b) => a - b);

  let smallestToRight = nextSmallestFromLast + 1;
  for (let i = nextSmallestFromLast + 1; i < arr.length; i++) {
    if (arr[smallestToRight] > arr[i]) {
      smallestToRight = i;
    }
  }

  [arr[nextSmallestFromLast], arr[smallestToRight]] = [
    arr[smallestToRight],
    arr[nextSmallestFromLast],
  ];

  // 4. sort the right elements
};
