/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function (piles) {
  const sorted = piles.slice().sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < sorted.length - sorted.length / 3; i += 2) {
    result += sorted[i + 1];
  }

  return result;
};

// maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]);
