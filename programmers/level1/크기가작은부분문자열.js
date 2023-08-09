function solution(t, p) {
  var answer = 0;
  let i = 0;
  while (i <= t.length - p.length) {
    if (Number(t.slice(i, i + p.length)) <= Number(p)) {
      answer++;
    }
    i++;
  }
  return answer;
}
