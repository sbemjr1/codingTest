function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i++) {
    i % 5 === 0 ? answer.push(names[i]) : 0;
  }
  return answer;
}
