function solution(my_string, target) {
  var answer = 0;
  let matcharr = 0;
  var regexAllCase = new RegExp(target, "g");
  if (my_string.match(regexAllCase) !== null) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
