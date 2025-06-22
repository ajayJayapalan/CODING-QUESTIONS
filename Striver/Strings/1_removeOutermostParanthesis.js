const removeOuerParanthesis = (s) => {
  const split = (s) => {
    let newS = "";
    let count = 0;
    for (let char of s) {
      if (char === "(") {
        count++;
        if (count !== 1) {
          newS += char;
        }
      } else if (char === ")") {
        if (count !== 1) {
          newS += char;
        }
        count--;
      }
    }
    return newS;
  };
  return split(s);
};

console.log(removeOuerParanthesis("(()())(())()"));
