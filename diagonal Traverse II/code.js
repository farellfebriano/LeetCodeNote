function diagonal(array) {
  let output = [];
  for (let r = 0; r < array.length; r++) {
    let row = r;
    let col = 0;
    while (r != col) {
      output.push(array[row--][col++]);
    }
    output.push(array[row][col]);
  }

  return output;
}

console.log(
  diagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// 0 = 0,0
// 1 = 1,0 0,1
// 2 = 2,0 1,1 0,2
