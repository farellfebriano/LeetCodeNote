// var plusOne = function (digits) {
//   let pointer = digits.length - 1;
//   digits[pointer] += 1;

//   while (digits[pointer] === 10) {
//     if (pointer === 0) {
//       digits[pointer] = 0;
//       digits.unshift(1);
//       return digits;
//     }
//     digits[pointer] = 0;
//     pointer -= 1;
//     digits[pointer] += 1;
//   }
//   return digits;
// };

var plusOne = function (digits) {
  let pointer = digits.length - 1;
  // the basic probem if ew encounter 9 so the edge case is 10 and we need to initiate it
  digits[pointer] += 1;
  while (digits[pointer] === 10 && 0 > -1) {
    if (pointer === 0) {
      digits[pointer] = 1;
      digits.push(0);
    } else {
      digits[pointer] = 0;
      digits[pointer - 1] += 1;
    }
    pointer--;
  }
  return digits;
};

console.log(plusOne([0]));
