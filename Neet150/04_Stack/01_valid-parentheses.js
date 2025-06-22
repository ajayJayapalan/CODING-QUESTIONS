/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stringStack = [];

  for (let str of s) {
    if (!map[str]) {
      stringStack.push(str);
    } else {
      if (stringStack.length === 0) return false;
      const lastStr = stringStack[stringStack.length - 1];
      if (map[str] === lastStr) {
        stringStack.pop();
      } else {
        return false;
      }
    }
  }

  if (stringStack.length === 0) {
    return true;
  }
};
