const { PriorityQueue } = require("./00_imports");

class PrioriyQueueDecorator {
  constructor() {
    this.priorityQueue = new PriorityQueue();
  }

  getDistanceFromOrigin(point = []) {
    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
  }

  insert(point) {
    let value = point;
    let priority = this.getDistanceFromOrigin(point);

    this.priorityQueue.enqueue(value, priority);
  }

  removeTop() {
    let { value } = this.priorityQueue.dequeue();
    return value;
  }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let pQueue = new PrioriyQueueDecorator();

  let closestK = [];

  for (let point of points) {
    pQueue.insert(point);
  }

  let i = 0;
  while (i < k) {
    let top = pQueue.removeTop();
    closestK.push(top);
    i++;
  }

  return closestK;
};

const input = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
const res = kClosest(input, 3);
console.log({ res });
