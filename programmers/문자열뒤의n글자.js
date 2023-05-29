function solution(my_string, n) {
  var answer = "";
  const result = my_string.split("");
  answer = result.slice(result.length - n);
  return answer.join("");
}
/**
 * function solution(my_string, n) {
    return my_string.substring(my_string.length - n);
}
 */
