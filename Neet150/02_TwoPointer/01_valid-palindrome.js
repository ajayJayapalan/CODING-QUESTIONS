/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let palindrome = "";
  let reverse_palindrome = "";

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123) // lower alpha (a-z)
    ) {
      palindrome = palindrome + s[i].toLowerCase();
      reverse_palindrome = s[i].toLowerCase() + reverse_palindrome;
    }
  }

  return reverse_palindrome === palindrome;
};

const value = "A man, a plan, a canal: Panama";
const res = isPalindrome(value);
console.log({ res });
