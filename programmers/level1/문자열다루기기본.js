function solution(s) {
  var answer = false;
  if ((s.length === 4 || s.length === 6) && !/[a-zA-Z]/.test(s)) {
    answer = true;
  }
  return answer;
}
