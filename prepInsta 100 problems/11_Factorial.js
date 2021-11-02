/* Find factorial of a given number */

// Iteration
((n) => {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  console.log(fact, "factorial");
})(7);

// Recursion
const fact = (n) => {
  if (n === 1) return 1;
  return n * fact(n - 1);
};

console.log(fact(7))
