/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
  debugger;
  const connections = Array(n).fill(0);
  const result = [];

  edges.forEach(([from, to]) => (connections[to] += 1));
  connections.forEach((num, index) => num === 0 && result.push(index));

  return result;
};

const n = 5,
  edges = [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ];
findSmallestSetOfVertices(n, edges);
