function solution(age) {
  var answer = [];
  const alphabet = "abcdefghij";
  const ageStr = age.toString();
  for (let i = 0; i < ageStr.length; i++) {
    answer.push(alphabet[ageStr[i]]);
  }
  return answer.join("");
}
