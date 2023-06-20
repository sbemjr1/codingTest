function solution(i, j, k) {
  let answer = 0;
  let count = 0;
  for (let a = i; a <= j; a++) {
    answer = a.toString().split("");
    for (let b = 0; b < answer.length; b++) {
      if (Number(answer[b]) === k) {
        count++;
      }
    }
  }
  return count;
}
