function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

const rotateDPlaces = (arr, d) => {
  let n = arr.length;
  let gcdVal = gcd(d, n);

  for (let i = 0; i < gcdVal; i++) {
    let temp = arr[i];
    console.log({ temp });
    for (let j = i; j < n - gcdVal; j = j + gcdVal) {
      arr[j] = arr[j + gcdVal];
    }
    console.log(n, gcdVal, i, n - gcdVal + i);
    arr[n - gcdVal + i] = temp;
  }

  return arr;
};

function rotateArray(arr, d) {
  const n = arr.length;
  // Adjust d in case it is larger than n
  d = d % n;
  // Find the GCD of d and n
  const gcdVal = gcd(d, n);

  // Loop through each set of elements
  for (let i = 0; i < gcdVal; i++) {
    // Store the current element to be replaced later
    let temp = arr[i];
    let j = i;

    console.log({ temp });

    while (true) {
      // Calculate the new index k
      let k = j + d;
      if (k >= n) {
        k = k - n; // Wrap around if k goes out of bounds
      }
      if (k === i) {
        break; // Break if we have completed the cycle
      }
      // Move the element from index k to index j
      arr[j] = arr[k];
      // Update j to be k for the next iteration
      j = k;
    }
    // Place the stored element in its correct position
    arr[j] = temp;
  }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
rotateArray(arr, d);
console.log(arr); // Output: [3, 4, 5, 6, 7, 1, 2]
