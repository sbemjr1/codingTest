function solution(x) {
  var answer = false;
  if (
    x %
      (x + "")
        .split("")
        .map((v) => Number(v))
        .reduce((acc, cur) => acc + cur, 0) ===
    0
  ) {
    answer = true;
  }
  return answer;
}
