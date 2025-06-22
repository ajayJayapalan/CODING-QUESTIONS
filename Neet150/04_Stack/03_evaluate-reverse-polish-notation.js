/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let str of tokens) {
    if (isNum(str)) {
      stack.push(str);
    }
    if (isExpression(str)) {
      if (stack.length < 1) {
        console.error("Somethings Wrong");
      }
      const b = stack.pop();
      const a = stack.pop();
      const value = doCalculation(a, b, str);
      stack.push(value);
    }
  }

  return stack.length === 1 ? stack[0] : null;
};

const isNum = (num) => !isNaN(parseInt(num));

const isExpression = (exp) => {
  const expressions = ["+", "-", "*", "/"];
  return expressions.includes(exp);
};

const doCalculation = (a, b, exp) => {
  switch (exp) {
    case "+":
      return parseInt(a) + parseInt(b);
    case "-":
      return parseInt(a) - parseInt(b);
    case "*":
      return parseInt(a) * parseInt(b);
    case "/":
      return parseInt(a) / parseInt(b);

    default:
      return null;
  }
};

const res = evalRPN([
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
]);
console.log(res);
