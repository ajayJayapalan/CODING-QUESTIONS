const generateParentheses = (count) => {
  const result = [];
  const solution = [];

  let open = 0;
  let close = 0;

  const backtrack = () => {
    if (close > open) return;
    if (open > count) return;
    if (open + close === 2 * count) {
      result.push(solution.join(""));
      return;
    }

    for (let para of "()") {
      if (para === "(") open++;
      if (para === ")") close++;

      solution.push(para);
      backtrack();
      solution.pop();

      if (para === "(") open--;
      if (para === ")") close--;
    }
  };
  backtrack();

  return result;
};

console.log(generateParentheses(3));
