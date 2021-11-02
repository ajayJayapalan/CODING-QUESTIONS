/* Find HCF or GCD of two number */

// Iteration - 1
((a, b) => {
  let gcd = 1;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  console.log("GCD = ", gcd);
})(1701, 3768);

// common factor
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
})(11);

// HCF using common factor
((a, b) => {
  let cf = [];
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      cf.push(i);
      a = a / i;
      b = b / i;
      i--;
    }
  }
  const result = cf.reduce((prev, cur) => prev * cur);
  console.log(result);
})(36, 60);

// Euclidian Algorithm
((a, b) => {
  let divident = a > b ? a : b;
  let divisor = a > b ? b : a;
  let gcd;
  do {
    if (divident % divisor !== 0) {
      gcd = divident % divisor;
      divident = divisor;
      divisor = gcd;
    }
  } while (divident % divisor !== 0);
  console.log(gcd);
})(10, 45);

//----------------------------------------------------------------------

// Recursion

// Euclidian ALgorithm

const gcd = (n1, n2) => {
  if (n1 === 0) return n2;
  if (n2 === 0) return n1;
  else return gcd(n2, n1 % n2);
};

console.log(gcd(10, 0));

function gcd2(a, b) {
  // Everything divides 0
  if (a == 0) return b;
  if (b == 0) return a;

  // base case
  if (a == b) return a;

  // a is greater
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

console.log(gcd2(5, 0));

const gcd3 = (a, b, i = 1, gcd = 1) => {
  if (a == 0) return b;
  if (b == 0) return a;
  if (!(i <= a && i <= b)) return gcd;

  if (a % i === 0 && b % i === 0) {
    gcd = i;
  }

  return gcd3(a, b, ++i, gcd);
};

console.log(gcd3(270, 192));
