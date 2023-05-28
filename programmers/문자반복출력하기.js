function solution(my_string, n) {
  var answer = [];
  my_string.split("");
  for (let i = 0; i < my_string.length; i++) {
    for (let k = 0; k < n; k++) {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}
/**function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
} */
