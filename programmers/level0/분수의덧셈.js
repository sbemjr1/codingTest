function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let denom = denom1 * denom2;
  let num1 = numer1 * (denom / denom1);
  let num2 = numer2 * (denom / denom2);
  let num = num1 + num2;
  for (let i = 2; i < 100; i++) {
    if (num % i === 0 && denom % i === 0) {
      num = num / i;
      denom = denom / i;
      i--;
    }
  }
  return (answer = [num, denom]);
}
