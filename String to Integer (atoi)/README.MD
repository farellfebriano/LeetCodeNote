# Single Number

## Rules

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
6. Return the integer as the final result.

## Example 1

Input: s = "42"<br>
Output: 42<br>
Explanation: The underlined characters are what is read in, the caret is the current reader position.<br>
Step 1: "42" (no characters read because there is no leading whitespace)<br>

Step 2: "42" (no characters read because there is neither a '-' nor '+')<br>

Step 3: "42" ("42" is read in)<br>

The parsed integer is 42.<br>
Since 42 is in the range [-231, 231 - 1], the final result is 42.<br>

## Example 2

Input: s = "4193 with words"<br>
Output: 4193<br>
Explanation:<br>
Step 1: "4193 with words" (no characters read because there is no leading whitespace)<br>

Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')<br>

Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)<br>

The parsed integer is 4193.<br>
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.<br>

## my Code

```javascript
var myAtoi = function (s) {
  s = s.trim();
  const regulaExpression = /[0-9]/;
  let multiplier = 1;
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && s[i] === "-") {
      multiplier = -1;
    } else if (i === 0 && s[i] === "+") {
      continue;
    } else if (!regulaExpression.test(s[i])) {
      break;
    } else {
      out += s[i];
    }
  }
  out = multiplier * Number(out);
  if (out > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (out < -(2 ** 31 - 1)) {
    return -(2 ** 31);
  }
  return out;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
