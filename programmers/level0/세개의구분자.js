function solution(myStr) {
  var answer = myStr.split(/[abc]/g).filter((a) => a !== "");
  return answer.length !== 0 ? answer : ["EMPTY"];
}
