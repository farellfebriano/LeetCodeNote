/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sum = 0;
  while (x != 0) {
    sum = sum * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
  }
  if (sum > 2 ** 31 || sum < -(2 ** 31)) {
    return 0;
  }
  return sum;
};
