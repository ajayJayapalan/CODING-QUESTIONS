const { MaxHeap } = require("./00_imports");

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap();

  for (let stone of stones) {
    maxHeap.insert(stone);
  }

  while (maxHeap.size() !== 1) {
    maxHeap.display();
    let stone1 = maxHeap.removeLargest();
    let stone2 = maxHeap.removeLargest();

    let leftStone = stone1 - stone2;
    maxHeap.insert(leftStone);
  }

  return maxHeap.peekTop();
};

const input = [2, 7, 4, 1, 8, 1];
const res = lastStoneWeight(input);
console.log({ res });
