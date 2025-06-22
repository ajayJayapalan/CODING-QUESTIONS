const largestOddDigit = (str = "") => {
  for (let i = str.length; i > 0; i--) {
    const number = parseInt(str.slice(0, i));
    console.log({ number, i });
    if (number % 2 !== 0) return String(number);
  }
  return "";
};

console.log(largestOddDigit("24864"));
