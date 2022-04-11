/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = function (nums, l, r) {
  const chechArithmetic = (arr) => {
    const diff = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
      const currentDiff = arr[i] - arr[i - 1];

      if (currentDiff !== diff) {
        return false;
      }

      return true;
    }
  };

  return l.map((_, i) =>
    chechArithmetic(nums.slice(l[i], r[i] + 1).sort((a, b) => a - b))
  );
};

const nums = [4, 6, 5, 9, 3, 7],
  l = [0, 0, 2],
  r = [2, 3, 5];
checkArithmeticSubarrays(nums, l, r);
