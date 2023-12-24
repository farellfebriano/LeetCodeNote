# ADD STRINGS

## Rules

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

## Example 1

Input: num1 = "11", num2 = "123"<br>
Output: "134"<br>

## Example 2

Input: num1 = "456", num2 = "77"<br>
Output: "533"<br>

## Example 3

Input: num1 = "0", num2 = "0"<br>
Output: "0"<br>

## Rules

we will use an array to add the number one by one

## Code

```javascript
var addStrings = function (num1, num2) {
  let arr = [];
  let p1 = num1.length - 1,
    p2 = num2.length - 1;
  let carry = 0;
  while (num1[p1] || num2[p2]) {
    const A = num1[p1] ? parseInt(num1[p1]) : 0;
    const B = num2[p2] ? parseInt(num2[p2]) : 0;
    let sum = A + B + carry;
    carry = 0;
    if (sum > 9) {
      sum = sum - 10;
      carry++;
    }
    arr.push(sum);
    p1--;
    p2--;
  }
  carry && arr.push(1);
  return arr.reverse().join("");
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory

## Better faster code

```javascript
var addStrings = function (num1, num2) {
  return String(BigInt(num1) + BigInt(num2));
};
```
