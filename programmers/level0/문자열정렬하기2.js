function solution(my_string) {
  var answer = my_string.toLowerCase();
  return answer.split("").sort().join("");
}
