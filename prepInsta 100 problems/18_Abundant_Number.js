/* Write a program to find number is Abundant number or not. */
// the sum of its proper divisors is greater than the number itself.
//  18 => 1,2,3,6,9 => 18 < sum(...divisors)

// Iteration
((n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum > n) {
    console.log("Abundant number");
  } else {
    console.log("Its not a Abundant number");
  }
})(19);

// Recursive
const abundant = (n, i = 1, sum = 0) => {
  if (i >= n / 2) {
    if (sum > n) {
      console.log("Abundant number");
      return;
    } else {
      console.log("Its not a Abundant number");
      return;
    }
  }
  if (n % i === 0) {
    sum += i;
  }
  return abundant(n, ++i, sum);
};

abundant(19);
