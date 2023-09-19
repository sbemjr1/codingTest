function solution(n) {
  var answer = 0;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let b = Math.floor(Math.sqrt(2 * n + (i ** 2 - i)));
    if (b * (b + 1) === 2 * n + (i ** 2 - i)) answer += 1;
  }

  return answer + 1;
}
