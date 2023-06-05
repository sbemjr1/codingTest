function solution(n) {
  var answer = 0;
  let sum1 = 0;
  let sum2 = 0;
  if (n % 2) {
    for (let i = 1; i <= n; i += 2) {
      sum1 += i;
    }
    return (answer = sum1);
  } else {
    for (let i = 0; i <= n; i += 2) {
      sum2 += i ** 2;
    }
    return (answer = sum2);
  }
}
