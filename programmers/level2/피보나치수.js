function solution(n) {
  var answer = 0;
  let first = 0,
    second = 1,
    target = 0;

  for (let i = 2; i <= n; i++) {
    target = (first + second) % 1234567;

    first = second;
    second = target;
  }

  return target;
}
