// 1. Delete middle element from stack
const deleteMiddleElementFromStack = (stack = [], n, count = 0) => {
  // base condition
  if (Math.trunc((n + 1) / 2) === count) {
    stack.pop();
    return;
  }

  const top = stack.at(-1);
  stack.pop();

  deleteMiddleElementFromStack(stack, n, count + 1);
  stack.push(top);
};

// const stack = [83, 74, 67, 49, 94, 8, 11, 1];
// deleteMiddleElementFromStack(stack, stack.length - 1);
// console.log({ stack });

//----------------------------------------------------------------------------

// 2. Insert element at bottom
const insertAtBottomOfStack = (stack = [], n) => {
  // base condition
  if (stack.length === 0) {
    stack.push(n);
    return;
  }

  const top = stack.at(-1);
  stack.pop();

  insertAtBottomOfStack(stack, n);
  stack.push(top);
};

// const stack = [7, 1, 4, 5];
// insertAtBottomOfStack(stack, 9);
// console.log({ stack });

//----------------------------------------------------------------------------

// 3. Reverse a Stack using Recursion
const reverseStack = (stack = []) => {
  if (stack.length === 0) {
    return;
  }

  const top = stack.at(-1);
  stack.pop();
  reverseStack(stack);
  insertAtBottomOfStack(stack, top);
};

// const stack = [1, 2, 3, 4, 5, 6];
// reverseStack(stack);
// console.log({ stack });

//----------------------------------------------------------------------------

// 4. Sort Stack in descending order
// https://www.codingninjas.com/studio/problems/sort-a-stack_985275?
const insertDescending = (stack, element) => {
  if (stack.length === 0 || element <= stack.at(-1)) {
    stack.push(element);
    return;
  }

  const top = stack.at(-1);
  stack.pop();

  insertDescending(stack, element);
  stack.push(top);
};

const sortStackDescending = (stack = []) => {
  if (stack.length === 0) {
    return;
  }
  const top = stack.at(-1);
  stack.pop();
  sortStackDescending(stack);
  insertDescending(stack, top);
};

// const stack = [-3, 14, 18, -5, 30];
// sortStackDescending(stack);
// console.log({ stack });

//----------------------------------------------------------------------------

// 5. Redundant Bracket
// https://www.codingninjas.com/studio/problems/redundant-brackets_975473
const findRedundantBracket = (exp) => {
  const stack = [];
  const operators = ["+", "-", "*", "/"];
  for (let token of exp) {
    console.log("====stack====", stack);
    if (token === "(" || operators.includes(token)) {
      stack.push(token);
    } else {
      if (token === ")") {
        let isRedundant = true;
        while (stack.length > 0 && stack.at(-1) !== "(") {
          const top = stack.at(-1);
          if (operators.includes(top)) {
            isRedundant = false;
          }
          stack.pop();
        }
        stack.pop(); // removing "("
        if (isRedundant) {
          return "YES";
        }
      }
    }
  }
  console.log("====stack====", stack);
  return stack.length === 0 ? "NO" : "YES";
};

// const string = "(a+c*b)+(c))";
// const res = findRedundantBracket(string);
// console.log({ res });

//----------------------------------------------------------------------------

// 6. Minimum Cost to make String Valid
// https://www.codingninjas.com/studio/problems/minimum-cost-to-make-string-valid_1115770
const minCostToMakeStringValid = (string) => {
  const stack = [];
  let cost = 0;

  for (let token of string) {
    if (token === "{") {
      stack.push("{");
    } else if (token === "}") {
      if (stack.length === 0) {
        stack.push("{");
        cost++;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length % 2 === 0) {
    cost = cost + stack.length / 2;
    return cost;
  } else {
    return -1;
  }
};

// const string = "}{{";
// const res = minCostToMakeStringValid(string);
// console.log({ res });

//----------------------------------------------------------------------------

// 7. Next Greatest Element
const nextGreatestElement = (nums = []) => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  // 1. using index and traverse array from front
  for (let i = 0; i < nums.length; i++) {
    while (stack.length !== 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      result[topIndex] = nums[i];
    }
    stack.push(i);
  }

  // 2. using num and traverse array from back
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length !== 0) {
      if (nums[i] < stack.at(-1)) {
        result[i] = stack.at(-1);
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(nums[i]);
  }

  return result;
};

// const input = [4, 12, 5, 3, 1, 2, 1, 3, 1, 2, 4, 6];
// const res = nextGreatestElement(input);
// console.log({ res });

//----------------------------------------------------------------------------

// 8. Next Frequent Element
const nextFrequentElement = (nums) => {
  const freqMap = {};
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length !== 0 &&
      freqMap[nums[i]] > freqMap[nums[stack.at(-1)]]
    ) {
      const topIndex = stack.pop();
      result[topIndex] = nums[i];
    }

    stack.push(i);
  }

  // for (let i = nums.length - 1; i >= 0; i--) {
  //   while (stack.length !== 0) {
  //     if (freqMap[nums[i]] < freqMap[stack.at(-1)]) {
  //       result[i] = stack.at(-1);
  //       break;
  //     } else {
  //       stack.pop();
  //     }
  //   }

  //   stack.push(nums[i]);
  // }

  return result;
};

// const input = [1, 1, 2, 3, 4, 2, 1];
// const res = nextFrequentElement(input);
// console.log({ res });

//-----------------------------------------------------------------------------------------

// 9. LRProduct
const LRProduct = (nums = []) => {
  const leftGreater = new Array(nums.length).fill(0);
  const rightGreater = new Array(nums.length).fill(0);

  let stackLeft = [];
  let stackRight = [];

  for (let i = 0; i < nums.length; i++) {
    while (stackLeft.length > 0 && nums[i] > nums[stackLeft.at(-1)]) {
      const topIndex = stackLeft.pop();
      leftGreater[topIndex] = i + 1;
    }

    while (stackRight.length > 0) {
      if (nums[i] < nums[stackRight.at(-1)]) {
        const topIndex = stackRight.at(-1);
        rightGreater[i] = topIndex + 1;
        break;
      } else {
        stackRight.pop();
      }
    }

    stackLeft.push(i);
    stackRight.push(i);
  }

  const lrProductArr = [];
  let maximumProductOfIndexes = null;
  for (let i = 0; i < nums.length; i++) {
    let product = leftGreater[i] * rightGreater[i];
    if (maximumProductOfIndexes === null) {
      maximumProductOfIndexes = product;
    } else {
      maximumProductOfIndexes = Math.max(maximumProductOfIndexes, product);
    }
    lrProductArr.push(product);
  }

  console.log({ lrProductArr, leftGreater, rightGreater });
  return maximumProductOfIndexes;
};

const input = [5, 4, 3, 4, 5];
const response = LRProduct(input);
console.log({ response });
