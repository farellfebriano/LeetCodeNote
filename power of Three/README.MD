# PLUS ONE

## Rules

Given an integer `n`, return `true` if it is a power of three. Otherwise, return `false`.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x.`

## Example 1

Input: n = 27<br>
Output: true<br>
Explanation: 27 = 33<br>

## Example 2

Input: n = 0<br>
Output: false<br>
Explanation: There is no x where 3x = 0.<br>

## Example 3

Input: n = -1<br>
Output: false<br>
Explanation: There is no x where 3x = (-1).<br>

## Code .

```javascript
var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n != 1) {
    n = n / 3;
    if (n % 1 != 0) {
      return false;
    }
  }
  return true;
};
```

## Complexity

Time Complexity:

- O(n)
  Space Complexity:
- O(1)
- Worse scanario O(n)

# PLUS ONE

## Rules

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

## Example 1

nput: digits = [1,2,3]<br>
Output: [1,2,4]<br>
Explanation: The array represents the integer 123.<br>
Incrementing by one gives 123 + 1 = 124.<br>
Thus, the result should be [1,2,4].<br>

## Example 2

Input: digits = [4,3,2,1]<br>
Output: [4,3,2,2]<br>
Explanation: The array represents the integer 4321.<br>
Incrementing by one gives 4321 + 1 = 4322.<br>
Thus, the result should be [4,3,2,2].<br>

## Example 2

Input: digits = [9]<br>
Output: [1,0]<br>
Explanation: The array represents the integer 9.<br>
Incrementing by one gives 9 + 1 = 10.<br>
Thus, the result should be [1,0].<br>

## Code .

```javascript
var plusOne = function (digits) {
  let pointer = digits.length - 1;
  digits[pointer] += 1;

  while (digits[pointer] === 10) {
    if (pointer === 0) {
      digits[pointer] = 0;
      digits.unshift(1);
      return digits;
    }
    digits[pointer] = 0;
    pointer -= 1;
    digits[pointer] += 1;
  }
  return digits;
};
```

## Complexity

Time Complexity:

- O(n)
  Space Complexity:
- O(1)
- Worse scanario O(n)
