# Pancake Sort -PRAMP

## Rules

Given an array of integers arr:

1.  Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
2.  Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.

## Example 1

input: arr = [1, 5, 4, 3, 2]<br>

output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output<br>

## Example 2

Input: [10,9,8,7,6,5,4,3,2,1]<br>
Expected:[1,2,3,4,5,6,7,8,9,10]<br>

## Example 3

Input: [10,9,8,7,6,5,4,3,2,1]<br>
Expected:[1,2,3,4,5,6,7,8,9,10]<br>

## First Approach

<h3> --Code--</h3>

```javascript
/*
==IDEA++
  # we need to create a function that is reverse cunt from the arr.length-1 > 0
  # we need to find the bigest number with the scope 0-current --Create a Functio--
  # we need to flip it in the scope of the bigestNums's index +1
  # we flip it again until in the scope of currente

++PsuedoCode==

  //create a loop from arr.length-1 > 0;#1
    // bigInt function(current index +1,arr)_-> will search the bigeest number in the socpe of 0- k index #2
    //arr=flip(bigInt+1,arr);#3
    //arr=flip(current index, arr #4

  retrun arr

  --bigInt function-- parameters k,arr;
    ## create variable max for store bigest number val
    ## loop trough the loop until k
      if current value is greater than max update it

    return index of max
*/

function flip(k, arr) {
  substring1 = arr.slice(0, k).reverse();
  substring2 = arr.slice(k);
  return substring1.concat(substring2);
}

function bigIntIdx(k, arr) {
  let max = 0;
  for (let i = 0; i < k; i++) {
    const num = arr[i];
    num > arr[max] && (max = i);
  }
  return max;
}

function pancakeSort(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    //#1
    const bigidx = bigIntIdx(index + 1, arr); //#2
    arr = flip(bigidx + 1, arr); //#3
    arr = flip(index + 1, arr); //#4
  }
  return arr;
}
```
