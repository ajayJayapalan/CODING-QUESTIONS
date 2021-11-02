/* Find the sum of digits of a number. */

// Iterative
((n) => {
  let sum = 0;
  let clone = n;
  while (clone > 0) {
    sum += clone % 10;
    clone = Math.floor(clone / 10);
  }
  console.log(sum);
})(123456);

((n) => {
  let sum = 0;
  for (let clone = n; clone > 0; clone = Math.floor(clone / 10)) {
    sum += clone % 10;
  }
  console.log(sum);
})(123456);

// String wise
((n) => {
  let sum = 0;
  let clone = n.toString();
  for (let i = 0; i < clone.length; i++) {
    sum += Number(clone[i]);
  }
  console.log(sum);
})(123456);

// Recursive
const sumOfDigit = (n) => {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigit(parseInt(n / 10));
};
console.log(sumOfDigit(123456))
