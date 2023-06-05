function solution(array) {
  var answer = [];
  const max = array.reduce((a, b) => {
    return Math.max(a, b);
  });
  answer.push(max);
  answer.push(array.indexOf(max));
  return answer;
}
