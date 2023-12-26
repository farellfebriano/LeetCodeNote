# MULTIPLY STRINGS

## Rules

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

## Example 1

Input: num1 = "2", num2 = "3"<br>
Output: "6"<br>

## Example 2

Input: num1 = "123", num2 = "456"<br>
Output: "56088"<br>

## Code

```javascript
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const length1 = num1.length,
    length2 = num2.length,
    array = new Array(length1 + length2 - 1).fill(0);
  let carry = 0,
    index = 0;
  //loop inversely from the end of the strings
  for (let i = length1 - 1; i >= 0; i--) {
    const A = num1[i];
    let tempIndex = index;
    let multiply = 0;
    //loop inversely from the end of the strings
    for (let j = length2 - 1; j >= 0; j--) {
      const B = num2[j];
      // add the number that is already in the array,
      // this is why we fill all the aray 0 in the begining
      const placedNumber = array[tempIndex];
      multiply = A * B + placedNumber + carry;
      carry = 0;
      if (multiply > 9) {
        //get the carry to add to next iteration in the array
        carry = (multiply - (multiply % 10)) / 10;
        multiply = multiply % 10;
      }

      array[tempIndex] = multiply;
      tempIndex++;
    }
    //NOTE
    // if the carry is still exist at the end of the nested loop, it meand that we need to add 1 infront

    // With javascript this code bellow will not create a problem since out of index will just considered as push. However this will be a problem in another languafe like python. It will throw an index out of range. hence, we need to create another coditional statement on top.
    if (carry) {
      array[tempIndex] = carry;
      carry = 0;
    }
    index++;
  }
  //reverse the array and join it into a string
  return array.reverse().join("");
};
```

## Complexity

[Time] Complexity O(n^2)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
