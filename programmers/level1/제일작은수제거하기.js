function solution(arr) {
  var answer = [...arr];
  answer.sort((a, b) => a - b);
  return arr.length !== 1 ? arr.filter((v) => v !== answer[0]) : [-1];
}
