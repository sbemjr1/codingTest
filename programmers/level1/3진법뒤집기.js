function solution(n) {
  var answer = n.toString(3).split("").reverse().join("");
  return Number.parseInt(answer, 3);
}
