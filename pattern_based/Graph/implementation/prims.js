class Minheap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap.at(0);
  }

  add(from, to, weight) {
    this.heap.push([from, to, weight]);
    this.heap.sort((a, b) => a[2] - b[2]);
  }

  pop() {
    return this.heap.shift();
  }

  size() {
    return this.heap.length;
  }
}

const prims = (graph, vLength) => {
  const mst = [];
  const visited = new Set();
  const heap = new Minheap();

  let pivot = Object.keys(graph)[0];
  heap.add(pivot, graph[pivot][0], graph[pivot][1]);
  visited.add(pivot);

  while (heap.size() === 0) {

    let neighbors = heap.pop();
  }
};

const graph = {
  0: [
    [1, 2],
    [3, 6],
  ],
  1: [
    [0, 2],
    [2, 3],
    [3, 8],
    [4, 5],
  ],
  2: [
    [1, 3],
    [4, 7],
  ],
  3: [
    [0, 6],
    [1, 8],
  ],
  4: [
    [1, 5],
    [2, 7],
  ],
};
console.log(prims(graph, 5));
