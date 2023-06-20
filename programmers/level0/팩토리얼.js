function solution(n) {
  let answer = [];
  let sum = 1;
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
      sum = sum * j;
      if (i === j) {
        answer.push(sum);
        sum = 1;
      }
    }
  }
  return answer.filter((a) => a <= n).length;
}
