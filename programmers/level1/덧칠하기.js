function solution(n, m, sections) {
  var answer = 0;
  let painted = 0;
  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
