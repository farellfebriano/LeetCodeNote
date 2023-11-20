# REVERSE NUMBER

## Rules

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

## Example 1

Input: x = 123<br>
Output: 321<br>

## Example 2

Input: x = -123<br>
Output: -321<br>

## Example 3

Input: x = 120<br>
Output: 21<br>

## CODE

```javascript
var reverse = function (x) {
  let sum = 0;
  // if the number is not zero keep the loop going
  while (x != 0) {
    //add the sum with 10 and add ( x % 10 )
    sum = sum * 10 + (x % 10);
    //minus the number with ( x % 10 ) and divide it with 10
    x = (x - (x % 10)) / 10;
  }
  // the edgex cases for the 32 digits number
  if (sum > 2 ** 31 || sum < -(2 ** 31)) {
    return 0;
  }
  return sum;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
