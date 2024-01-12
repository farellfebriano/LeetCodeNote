# REPEATED SUBSTRING PATTERN

## Rules

Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

## Example 1

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

## Example 2

Input: s = "aba"
Output: false

## Example 3

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

## Code

```javascript
var repeatedSubstringPattern = function (s) {
  // keep appending the pattern into the pat variable
  let pat = "";
  // assign the s.length into sLength variable
  const sLength = s.length;
  /*
    - only loop it to the half since if has a pattern the other half will be the same as the first half.
    - we also need to do it by floor so then when s.length<2 it will return false right away
    - however if we want to use .ceil(), we need to do the edge cases on top if s.length<2
    */

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const char = s[i];
    pat += char;
    // if sLength % pat.length === 0, then we are sure then when we do (pat.repeat(sLength / pat.length) === s ) the length will be the same with s.length so then we can just compare th both
    if (sLength % pat.length === 0) {
      if (pat.repeat(sLength / pat.length) === s) {
        return true;
      }
    }
  }
  // if it dosent have the pattern then just return false

  return false;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
