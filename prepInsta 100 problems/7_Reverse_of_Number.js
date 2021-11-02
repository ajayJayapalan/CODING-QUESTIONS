/* Find the reverse of a number */

// Iteration

((n) => {
  let reverse = 0;
  while (n > 0) {
    reverse = reverse * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  console.log(reverse);
})(123456);

((n) => {
  let reverse = 0;
  for (let clone = n; clone > 0; clone = parseInt(clone / 10)) {
    reverse = reverse * 10 + (clone % 10);
  }
  console.log(reverse);
})(123456);

// Recursion
const reverse = (n, rev = 0) => {
  if (n === 0) return rev;
  rev = rev * 10 + (n % 10);
  return reverse(parseInt(n / 10), rev);
};

console.log(reverse(123456));
