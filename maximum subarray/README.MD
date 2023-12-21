# MAXIMUM SUBARRAY

## Rules

Given an integer array nums, find the
subarray
with the largest sum, and return its sum.

## Example 1

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]<br>
Output: 6<br>
Explanation: The subarray [4,-1,2,1] has the largest sum 6.<br>

## Example 2

Input: nums = [1]<br>
Output: 1<br>
Explanation: The subarray [1] has the largest sum 1.<br>

## Example 3

Input: nums = [5,4,-1,7,8]<br>
Output: 23<br>
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.<br>

## Code

```javascript
var maxSubArray = function (nums) {
  let max = -Infinity;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    max = Math.max(max, current);
    if (current < 0) {
      current = 0;
    }
  }
  return max;
};
```

## Complexity

[Time] Complexity O(1)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
