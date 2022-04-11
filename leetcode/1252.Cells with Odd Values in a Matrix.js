/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (row, col, indices) {
  const matrix = Array.from(Array(row), () => Array(col).fill(0));

  for (let i = 0; i < indices.length; i++) {
    const [r, c] = indices[i];

    for (let j = 0; j < matrix[r].length; j++) {
      matrix[r][j] += 1;
    }

    for (let k = 0; k < matrix.length; k++) {
      matrix[k][c] += 1;
    }
  }

  const result = matrix.reduce(
    (result, current) =>
      result +
      current.reduce((sum, cell) => {
        return cell % 2 !== 0 ? sum + 1 : sum;
      }, 0),
    0
  );

  return result;
};

// 참고
// var oddCells = function (n, m, indices) {
//   const nn = Array(n).fill(false);
//   const mm = Array(m).fill(false);
//   indices.forEach(([x, y]) => {
//     nn[x] = !nn[x];
//     mm[y] = !mm[y];
//   });
//   const numR = nn.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
//   const numC = mm.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
//   return numR * m + numC * n - 2 * numR * numC;
// };
