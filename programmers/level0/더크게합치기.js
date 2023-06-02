function solution(a, b) {
  var answer = 0;
  answer =
    Number(a.toString() + b.toString()) >= Number(b.toString() + a.toString())
      ? Number(a.toString() + b.toString())
      : Number(b.toString() + a.toString());
  return answer;
}
