# fibonaci number

## Rules

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1<br>
F(n) = F(n - 1) + F(n - 2), for n > 1.<br>

## Example 1

Input: n = 2<br>
Output: 1<br>
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.<br>

## Example 2

Input: n = 3<br>
Output: 2<br>
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.<br>

## First Approach

since the sum is equal the last sum and second last sum, we need to start with the 1 interation. Hence the loop start form i = 1

<h3> --Code--</h3>

```javascript
var fib = function (n) {
  if (n == 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let sum = 0;
  let sum1 = 1;
  let sum2 = 0;
  for (let i = 1; i < n; i++) {
    sum = sum2 + sum1;
    sum2 = sum1;
    sum1 = sum;
  }
  return sum;
};
```

<h3> --Complexity--</h3>

Time Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory

## Better approach

since the time complexity will always be O(n) we can minimize the space complexity into O(1)

<h3>--Code--</h3>

```javascript
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
```

--Note--
This code determine that if the first index of a value is the same with the last index of the same value, if its true just return the same index

## How The Code Works Visualy

- this is how the patterns look like visualy in the first while loop
  ![View Design](assets/odd-and-even.png)

- this is how the patterns look like visualy in the second while loop for `ODD`
  ![View Design](assets/odd.png)

- this is how the patterns look like visualy in the second while loop for `EVEN`
  ![View Design](assets/even.png)

## Complexity

Time Complexity `O(n)`

Space Complexity `O(1)`
