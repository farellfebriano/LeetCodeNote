/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let pointer1 = 0;
  let pointer2 = 0;
  let profit = 0;
  while (pointer2 < prices.length) {
    if (prices[pointer2] < prices[pointer2 + 1]) {
      while (
        prices[pointer2] < prices[pointer2 + 1] &&
        pointer2 < prices.length
      ) {
        pointer2++;
      }
      profit += prices[pointer2] - prices[pointer1];
      pointer1 = pointer2;
    }
    pointer1++;
    pointer2++;
  }
  return profit;
};
