/* Check given number is palindrome or not */

// Iteration
((n) => {
  let reverse = 0;
  for (let clone = n; clone > 0; clone = parseInt(clone / 10)) {
    reverse = reverse * 10 + (clone % 10);
  }
  if (n === reverse) {
    console.log("It's a palindrome ", n);
  } else {
    console.log("It's not a palindrome ", n);
  }
})(122);

// Recursion

const palindrome = (n, clone = n, rev = 0) => {
  if (clone === 0) {
    if (n === rev) {
      return "" + n + " is a palindrome.";
    } else {
      return "" + n  + " is not a palindrome.";
    }
  }
  rev = rev * 10 + (clone % 10);
  return palindrome(n, parseInt(clone / 10), rev);
};

console.log(palindrome(122));
