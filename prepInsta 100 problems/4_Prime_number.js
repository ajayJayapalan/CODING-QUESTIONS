/* Check given number is prime number or not */

const { performance } = require("perf_hooks");

// linear
((n) => {
  let flag = true;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      console.log(n + " is not prime.");
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(n + " is prime.");
  }
})(11);

// recursion
const prime = (n, i = 0) => {
  if (i < 2) i = 2;
  if (n <= 2) return n === 2 ? true : false;
  if (n % i === 0) return false;
  if (i * i > n) return true;

  return prime(n, i + 1);
};
console.log(prime(23, 0));

//---------------------------------------------------------

/* How many prime number under x */

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num > 2 && num % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

(() => {
  const t1 = performance.now();
  let count = 0;
  for (let i = 0; i < 1000; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  const t2 = performance.now();
  console.log(`count of prime number : ${count}`);
  console.log(`time taken ${t2 - t1}`);
})();
