# ROMAN INTO INTEGER

## Rules

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

## Example 1

Input: s = "III"<br>
Output: 3<br>
Explanation: III = 3.<br>

## Example 2

Input: s = "LVIII"<br>
Output: 58<br>
Explanation: L = 50, V= 5, III = 3.<br>

## Example 3

Input: s = "MCMXCIV"<br>
Output: 1994<br>
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.<br>

## First Approach

<h3> --Code--</h3>

```javascript
var romanToInt = function (s) {
  let sum = 0;
  roman_numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // i as 1st pointer
  for (let i = 0; i < s.length; i++) {
    const current = roman_numerals[s[i]];
    const next =
      roman_numerals[s[i + 1]] === undefined ? 0 : roman_numerals[s[i + 1]];
    // if the next character exist and it is bigger than the current one it will turn into a minus
    if (next > current) {
      sum -= current;
    } else {
      sum += current;
    }
  }
  return sum;
};
```

<h3> --Complexity--</h3>

Time Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
