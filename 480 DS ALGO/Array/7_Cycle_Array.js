// Cyclically rotate an array by one

/* 

    time : O(n);
    space : O(1);

*/

const cycle = (arr) => {
  const firstEl = arr[0];

  for (let i = 1; i < arr.length; i++) {
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
  }
  arr[arr.length - 1] = firstEl;

  console.log(arr);
};

cycle([9, 8, 7, 6, 4, 2, 1, 3]);
