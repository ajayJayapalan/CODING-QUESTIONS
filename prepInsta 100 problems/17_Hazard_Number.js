/* Write a Program to find number is Harshad number or not. */
//  a Harshad number is a number that is  divisible by the sum of its digits
// 21 => 21%2+1 == 0

// Iteration
((n) => {
  let sum = 0;
  let clone = n;
  while (clone > 0) {
    sum += clone % 10;
    clone = parseInt(clone / 10);
  }
  if (n % sum === 0) {
    console.log("It a hazard number");
  } else {
    console.log("It not a hazard number");
  }
})(4991);

// Recursion
const hazard = (n, sum = 0, clone = n) => {
  if (clone === 0) {
    if (n % sum === 0) {
      console.log("It a hazard number");
      return;
    } else {
      console.log("It not a hazard number");
      return;
    }
  } else if (clone > 0) {
    sum += clone % 10;
  }
  return hazard(n, sum, parseInt(clone / 10));
};

hazard(491)