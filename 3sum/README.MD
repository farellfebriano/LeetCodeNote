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
var threeSum = function (nums) {
  const newNums = nums.sort(function (a, b) {
    return a - b;
  });
  let result = [];

  let p1 = 0;
  // the loop will stop when p1 value is bigger than 0
  while (newNums[p1] < 1) {
    let p2 = p1 + 1;
    let p3 = newNums.length - 1;
    if (newNums[p1] === newNums[p1 - 1]) {
      p1++;
      continue;
    }
    // this will find the match so then equal 0
    // the loop will stop when p2 and p3 is crossing
    while (p2 < p3) {
      if (newNums[p1] + newNums[p2] + newNums[p3] > 0) {
        // i put the code bellow because i tough it would be more faster since it will skipp duplication
        // while (newNums[p3] === newNums[p3 - 1]) p3--;
        p3--;
      } else if (newNums[p1] + newNums[p2] + newNums[p3] < 0) {
        // i put the code bellow because i tough it would be more faster since it will skipp duplication
        //  while (newNums[p2] === newNums[p2 + 1]) p2++;
        p2++;
      } else {
        result.push([newNums[p1], newNums[p2], newNums[p3]]);
        // skipt the duplication when the it matches
        while (newNums[p2] === newNums[p2 + 1]) p2++;
        while (newNums[p3] === newNums[p3 - 1]) p3--;
        p2++;
        p3--;
      }
    }
    p1++;
  }
  return result;
};
```

## Complexity

[Time] Complexity O(n^2)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
