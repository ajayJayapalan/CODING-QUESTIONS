/* Find the power of a number */

// Iteration
((n, e) => {
  let pow = 1;
  for (let i = 0; i < e; i++) {
    pow *= n;
  }
  console.log(pow);
})(5, 2);

// Recursion
const pow = (n, e, power = 1) => {
  if (e === 0) return power;
  power *= n;
  return pow(n, --e, power);
};

console.log(pow(5, 2), " is power.");
