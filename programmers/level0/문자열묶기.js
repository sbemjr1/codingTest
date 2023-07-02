function solution(strArr) {
  let answer = [];
  for (let i = 1; i <= 30; i++) {
    answer.push(strArr.filter((a) => a.length === i).length);
  }
  answer.sort((a, b) => b - a);
  return answer[0];
}
