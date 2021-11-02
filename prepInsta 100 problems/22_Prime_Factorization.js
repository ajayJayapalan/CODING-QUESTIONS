// prime factorization
((a) => {
  let cf = [];
  for (let i = 2; i <= a; i++) {
    if (a % i === 0) {
      cf.push(i);
      a = a / i;
      i--;
    }
  }
  console.log(cf);
})(100);

// Recursion
const primeFactors = (a, i = 2, cf = []) => {
  if (i > a) return cf;
  if (a % i === 0) {
    cf.push(i);
    return primeFactors(a / i, i, cf);
  }

  return primeFactors(a, ++i, cf);
};

console.log(primeFactors(100));
