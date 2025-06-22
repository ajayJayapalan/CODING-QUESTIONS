const isSorted = (input) => {
  let isAscend = input[0] <= input[1];
  let isDecend = input[0] >= input[1];

  for (let i = 1; i < input.length; i++) {
    let prev = input[i - 1];
    let num = input[i];
    if (isAscend && prev > num) {
      isAscend = false;
    }
    if (isDecend && prev < num) {
      isDecend = false;
    }
  }

  return isAscend || isDecend;
};

const input = [5, 4, 3, 2, 1];
const output = isSorted(input);

console.log(output);
