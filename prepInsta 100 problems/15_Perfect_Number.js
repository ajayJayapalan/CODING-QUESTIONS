/* Find a given number perfect or not */
// divisor of 28 => 1, 2, 4, 7, 14 => sum(...divisor) => 28

// Iteration
((n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n) {
    console.log("its perfect", sum);
  } else {
    console.log("its not perfect", sum);
  }
})(27);

// Recursion
const perfect = (n, i = 1, sum = 0) => {
  if (i === n / 2 + 1) {
    if (sum === n) {
      return `perfect ${sum}`;
    } else {
      return `not perfect ${sum}`;
    }
  }
  if (n % i === 0) {
    sum += i;
  }
  return perfect(n, ++i, sum);
};

console.log(perfect(28));
