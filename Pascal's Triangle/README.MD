# Pascal's triangle

## Rules

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

## Example 1

Input: numRows = 5<br>
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]<br>

## Example 2

Input: numRows = 1<br>
Output: [[1]],br

## First Approach

<h3> --Code--</h3>

```javascript
var generate = function (numRows) {
  /* since i need a previous array to get the next one, we need
    to start from premaid array like the bellow */
  let result = [[1], [1, 1]];
  let temp = result[1];
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }
  // i is start from three because we have the primade arry on top
  /* "numRows + 1" is because we technically start from 1 and we want to
  use the i as future length in the array */
  for (let i = 3; i < numRows + 1; i++) {
    const arr = [];

    //we will use a pointer to navigate the array
    let pointer1 = 0;
    /*the loop is design 'i - 1' beacuse we know that tehe end is always 1 hence we
     need to stop at the last index and add it after the loop is done */
    while (arr.length < i - 1) {
      const number =
        //"(temp[pointer1 - 1] ? temp[pointer1 - 1] : 0) means that when the pointer-1 is nt exist just add 0"
        temp[pointer1] + (temp[pointer1 - 1] ? temp[pointer1 - 1] : 0);
      arr.push(number);
      pointer1++;
    }
    arr.push(1);
    // when all done we need to save arr for the next hence we put the temp in the temp for the next iteration
    temp = arr;
    result.push(arr);
  }
  return result;
};
```

<h3> --Complexity--</h3>

Time Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
