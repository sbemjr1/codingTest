function solution(n) {
  let answer = [];
  let idx = 2;
  while (n !== 1) {
    if (n % idx === 0) {
      answer.push(idx);
      while (n % idx === 0) {
        n = n / idx;
      }
    } else {
      idx++;
    }
  }
  return answer;
}
