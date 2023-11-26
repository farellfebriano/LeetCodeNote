# Single Number

## Rules

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

## Example 1

Input: nums = [2,2,1]<br>
Output: 1<br>

## Example 2

Input: nums = [4,1,2,1,2]<br>
Output: 4<br>

## my Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let mem = {};
  let sum = 0;
  for (let i of nums) {
    if (mem[i]) {
      sum += -i;
    } else {
      mem[i] = i;
      sum += i;
    }
  }
  return sum;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory

## beter code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};
```

##

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
