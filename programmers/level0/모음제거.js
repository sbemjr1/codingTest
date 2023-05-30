function solution(my_string) {
  var answer = "";
  answer = my_string.match(/[^aeiou]/gi);
  if (answer === null) {
    return (answer = "");
  }
  return answer.join("");
}

/** function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
} **/
