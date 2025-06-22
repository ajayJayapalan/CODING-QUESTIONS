const validParanthesis = (str = "") => {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];
  for (let s of str) {
    if (s === " ") continue;
    if (["(", "{", "["].includes(s)) {
      stack.push(s);
    } else {
      let popped = stack.pop();
      if (map[s] !== popped) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

const res = validParanthesis("( )[ { } ( ) ]");
console.log(res);
