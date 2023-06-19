function solution(n) {
  var answer = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      answer.push(n / 2);
      n = n / 2;
    } else if (n % 2 !== 0) {
      answer.push(n * 3 + 1);
      n = n * 3 + 1;
    }
  }
  return answer;
}
