function solution(A, B) {
  var answer = 0;
  let str = B + B;
  answer = str.indexOf(A);
  return answer;
}
