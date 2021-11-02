// LCM - Least Common Mulitples

const isPrime = (n, i = 0) => {
  if (i < 2) i = 2;
  if (n <= 2) return n === 2 ? true : false;
  if (n % i === 0) return false;
  if (i * i > n) return true;

  return isPrime(n, i + 1);
};

const primeUnder = (n) => {
  const cf = [];
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      cf.push(i);
    }
  }
  return cf;
};

const primeFactors = (a, i = 2, cf = []) => {
  if (i > a) return cf;
  if (a % i === 0) {
    cf.push(i);
    return primeFactors(a / i, i, cf);
  }

  return primeFactors(a, ++i, cf);
};

const LCMofNumbers = (a, b) => {
  const primeFactorsOfA = primeFactors(a);
  const primeFactorsOfB = primeFactors(b);
  const primeNumbers = primeUnder(a > b ? a : b);
  let cf = [];
  for (let i = 0; i < primeNumbers.length; i++) {
    if (primeFactorsOfA.includes(el) || primeFactorsOfB.includes(el)) {
      cf.push(el);
    }
  }
  console.log(cf);
};

LCMofNumbers(20, 50);
