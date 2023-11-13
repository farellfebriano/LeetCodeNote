var plusOne = function (digits) {
  let pointer = digits.length - 1;
  digits[pointer] += 1;

  while (digits[pointer] === 10) {
    if (pointer === 0) {
      digits[pointer] = 0;
      digits.unshift(1);
      return digits;
    }
    digits[pointer] = 0;
    pointer -= 1;
    digits[pointer] += 1;
  }
  return digits;
};
