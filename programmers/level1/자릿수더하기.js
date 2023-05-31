function solution(n) {
  var answer = n.toString().split("");
  const result = answer.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return result;
}
