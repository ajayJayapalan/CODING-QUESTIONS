/* Write a program to find number is  Automorphic number or not. */
// Basically automorphic number is a number whose square ends with the same digits as number itself.

// 25 => 625

// BigO(1)
((n) => {
  const len = Math.ceil(Math.log10(Math.abs(n) + 1));
  const sqr = n * n;
  const rem = sqr % Math.pow(10, len);
  if (rem === n) {
    console.log("Its automorphic", rem);
  } else {
    console.log("Its not automorphic", rem);
  }
})(25);

// BigO(n)
((n) => {
  let sqr = n * n;
  let flag = true;
  while (n > 0) {
    if (n % 10 !== sqr % 10) {
      console.log("Not automorphic");
      flag = false;
      break;
    }
    n = parseInt(n / 10);
    sqr = parseInt(sqr / 10);
  }
  if (flag) {
    console.log("automorphic");
  }
})(24);

// Recursion
const automorphic = (n, sqr=n*n) => {
  if (n > 0) {
    if (n % 10 !== sqr % 10) {
      return false;
    }
  } else if (n === 0) {
    return true;
  }
  return automorphic(parseInt(n / 10), parseInt(sqr / 10));
};

console.log(automorphic(24))
