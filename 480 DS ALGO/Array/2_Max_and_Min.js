// Find min and max form an array.

// 1.
((arr) => {
  let min = arr[0];
  let max = arr[0];
  for (ar of arr) {
    if (min > ar) {
      min = ar;
    }
    if (max < ar) {
      max = ar;
    }
  }
  console.log(min, max);
})([1, 2, 3, 4, 5, 6]);

// t : o(n)
// s : o(1)
