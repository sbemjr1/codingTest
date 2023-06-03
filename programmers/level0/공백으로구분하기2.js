function solution(my_string) {
  var answer = [];
  answer = my_string.split(/\s+/g);
  return answer.filter((e) => e !== "");
}
