# Best Time to Buy and Sell Stock

## Rules

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Example 1

Input: prices = [7,6,4,3,1]<br>
Output: 0<br>
Explanation: In this case, no transactions are done and the max profit = 0.<br>

## Example 2

Input: prices = [7,1,5,3,6,4]<br>
Output: 5<br>
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.<br>
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.<br>

## Code

```javascript
var maxProfit = function (prices) {
  let pointer1 = 0; // pointer that stays and only moves if pointer2 values smaller than pointer1 values
  let pointer2 = 1;
  let maxProfit = 0;
  while (pointer2 < prices.length) {
    if (prices[pointer2] < prices[pointer1]) {
      pointer1 = pointer2;
    } else if (prices[pointer2] - prices[pointer1] > maxProfit) {
      maxProfit = prices[pointer2] - prices[pointer1];
    }
    pointer2++;
  }
  return maxProfit;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
