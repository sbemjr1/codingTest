function solution(my_string, m, c) {
  var answer = my_string.split("");
  let result = [];
  for (let i = c; i <= answer.length; i += m) {
    result.push(answer[i - 1]);
  }
  return result.join("");
}
