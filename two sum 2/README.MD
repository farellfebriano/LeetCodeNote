# Best Time to Buy and Sell Stock

## Rules

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

## Example 1

Input: numbers = [2,7,11,15], target = 9 <br>
Output: [1,2]<br>
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].<br>

## Example 2

Input: numbers = [2,3,4], target = 6<br>
Output: [1,3]<br>
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].<br>

## Code

```javascript
var twoSum = function (numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (p1 < p2) {
    if (numbers[p1] + numbers[p2] === target) {
      return [p1 + 1, p2 + 1];
    } else if (numbers[p1] + numbers[p2] < target) {
      p1++;
    } else {
      p2--;
    }
  }
  return [];
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
