function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0));

  let num = 1;
  let row = 0;
  let col = 0;

  for (let i = n; i > 0; i -= 2) {
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    col--;
    row--;
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    col++;
    row++;
  }
  return result;
}
