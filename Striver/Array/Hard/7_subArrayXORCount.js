const subArrayXORCount = (arr, k) => {
  let prefixXOR = 0;
  const map = new Map();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixXOR = prefixXOR ^ arr[i];

    if (arr[i] === k && prefixXOR !== k) {
      count++;
    }

    if (prefixXOR === k) {
      count++;
    } else if (map.get(prefixXOR ^ k)) {
      count++;
    } else {
      map.set(prefixXOR, i);
    }
  }

  return count;
};

console.log(subArrayXORCount([4, 2, 2, 6, 4], 6));
console.log(subArrayXORCount([5, 6, 7, 8, 9], 5));
