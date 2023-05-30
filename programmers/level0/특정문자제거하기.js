function solution(my_string, letter) {
  var answer = "";
  var regexAllCase = new RegExp(letter, "g");
  answer = my_string.replace(regexAllCase, "");
  return answer;
}
/** function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}
**/
