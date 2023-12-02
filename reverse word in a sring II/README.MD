# Best Time to Buy and Sell Stock

## Rules

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Example 1

Input: s = "the sky is blue"<br>
Output: "blue is sky the"<br>

## Example 2

Input: s = " hello world "<br>
Output: "world hello"<br>
Explanation: Your reversed string should not contain leading or trailing spaces.<br>

## Example 3

Input: s = "a good example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

## Code

```javascript
var reverseWords = function (s) {
  const arr = s.split(" ");
  const newArr = arr
    .map((word) => {
      return word === "" ? false : word;
    })
    .filter(Boolean);
  console.log(arr);
  let release = "";
  for (let i = 0; i < newArr.length; i++) {
    if (i === newArr.length - 1) {
      release = `${newArr[i]}` + release;
      continue;
    }
    release = ` ${newArr[i]}` + release;
  }
  return release;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory

## Better Code

```javascript
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((c) => c.trim())
    .reverse()
    .join(" ");
};
```
