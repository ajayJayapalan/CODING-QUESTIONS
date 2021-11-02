/* Check given number is a strong number or not */
// 145 => 1! + 4! + 5! = 145

// Iteration
((n) => {
  const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  };

  let sum = 0;
  for (let clone = n; clone > 0; clone = parseInt(clone / 10)) {
    sum += factorial(clone % 10);
  }
  if (sum === n) {
    console.log("It's storng", sum);
  } else {
    console.log("It's  not storng", sum);
  }
})(145);

// Recursion
const sumOfFactorialDigit = (n) => {
  const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  };
  if (n === 0) return 0;
  return factorial(n % 10) + sumOfFactorialDigit(parseInt(n / 10));
};

sumOfFactorialDigit(145) === 145
  ? console.log("strong")
  : console.log("not strong");
