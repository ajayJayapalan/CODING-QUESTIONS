/* Find the factors of a number */
// 6 => 1, 2, 3, 6

// Iteration
((n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
})(6);

// Recursion
const factor = (n, i = 1) => {
  if (i === n) {
    console.log(n);
  } else {
    if (n % i === 0) {
      console.log(i);
    }
    factor(n, ++i);
  }
};

factor(6)
