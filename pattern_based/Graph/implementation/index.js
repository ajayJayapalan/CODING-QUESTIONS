const edgeList = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [3, 6],
  [3, 7],
  [4, 2],
  [4, 5],
  [5, 2],
];

class DirectGraph {
  adjList = null;

  constructor(matrix) {
    this.adjList = this.getAdjacenceyListFromMatrix(matrix);
  }

  getAdjacenceyListFromMatrix(matrix) {
    const adjList = {};

    for (let v1 of matrix) {
      let v1Neighbours = matrix[v1];
      for (let v2 of v1Neighbours) {
        if (v2 === 0) continue;

        if (adjList?.[v1]) {
          adjList[v1].push(v2);
        } else {
          adjList[v1] = [v2];
        }
      }
    }

    return adjList;
  }

  static getMatrixFromEdgeList(list = []) {
    let matrix = new Array(list.length).fill(new Array(list.length).fill(0));
    for (let [v1, v2] of edgeList) {
      matrix[v1][v2] = 1;
      //   matrix[v2][v1] = 1; if undirected
    }

    return matrix;
  }

  addVertex(v) {
    if (!this.adjList?.[v]) {
      this.adjList[v] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjList?.[v1]) this.addVertex(v1);

    if (!this.adjList[v1].includes(v2)) {
      this.adjList[v1].push(v2);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjList[v1]) {
      let index = this.adjList[v1].findIndex((item) => item === v2);
      if (index !== -1) {
        this.adjList[v1].splice(index, 1);
      }
    }
  }

  removeVertex(v1) {
    if (this.adjList[v1]) {
      delete this.adjList[v1];

      for (let v in this.adjList) {
        if (this.adjList[v].includes(v1)) {
          this.adjList[v] = this.adjList[v].filter((item) => item !== v1);
        }
      }
    }
  }

  dfsRecursive(start) {
    let seen = new Set();

    const dfs = (node) => {
      if (seen.has(node)) return;

      seen.add(node);

      for (let nodeItem of this.adjList[node]) {
        dfs(nodeItem);
      }
    };

    dfs(start);
    return seen.values();
  }

  dfsIterative(start) {
    let seen = new Set();
    let stack = [start];

    while (stack.length) {
      let node = stack.pop();
      if (seen.has(node)) continue;
      seen.add(node);

      for (let item of this.adjList[node]) {
        stack.push(item);
      }
    }

    return seen.values();
  }

  bfs(start) {
    let seen = new Set();
    let queue = [start];

    while (queue.length) {
      let node = queue.shif();
      if (seen.has(node)) continue;
      seen.add(node);

      for (let item of this.adjList[node]) {
        queue.push(item);
      }
    }

    return seen.values();
  }
}

const matrix = DirectGraph.getMatrixFromEdgeList(edgeList);

const graph = new DirectGraph(matrix);
