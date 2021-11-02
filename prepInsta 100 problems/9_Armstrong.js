/* Check given number is armstrong */
/* 153 = 1^3 + 5^3 + 3^3 */

// Iteration
((n) => {
  let arm = 0;
  for (let clone = n; clone > 0; clone = parseInt(clone / 10)) {
    arm = arm + Math.pow(clone % 10, 3);
  }
  if (n === arm) {
    console.log(arm, " is an armstrong number");
  } else {
    console.log(arm, " is not an armstrong number");
  }
})(153);

// Recursion
const armstrong = (n, clone = n, arm = 0) => {
  if (clone === 0) {
    if (arm === n) {
      //   return (arm+"  is a armstrong number");
      return true;
    } else {
      return false;
      //   return (arm+"  is a not armstrong number");
    }
  }
  arm = arm + Math.pow(clone % 10, 3);
  return armstrong(n, parseInt(clone / 10), arm);
};

//console.log(armstrong(153));

/* Find all the armstrong number from a range of numbers */
((l, h) => {
  for (let i = l; i <= h; i++) {
    if (armstrong(i)) {
      console.log(i + " is a armstrong number");
    }
  }
})(1, 1000);
