function solution(n, m) {
  var max = 0;
  for (let i = 1; i <= Math.max(n, m); i++) {
    if (Math.min(n, m) % i === 0 && Math.max(n, m) % i === 0) {
      max = i;
    }
  }
  return [max, max * (n / max) * (m / max)];
}
