/* Write a C program to find number is  Friendly Pair or Not */

// sum of divisors of a === b
// sum of divisors of b === a

const getSumOfDivisor = (n, i = 1, sum = 0) => {
  if (i > n / 2) {
    return sum;
  }
  if (n % i === 0) {
    sum += i;
  }
  return getSumOfDivisor(n, ++i, sum);
};

((a, b) => {
  if (a === getSumOfDivisor(b) && b === getSumOfDivisor(a)) {
    console.log("Friendly pair");
  } else {
    console.log("Not Friendly pair");
  }
})(1184, 1210);
