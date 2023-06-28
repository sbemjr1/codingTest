function solution(array) {
  var answer = 0;
  let result = array.join("");
  for (let i = 0; i < result.length; i++) {
    result[i] === "7" ? answer++ : 0;
  }
  return answer;
}
