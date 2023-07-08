function solution(score) {
  var answer = [];
  let result = [];
  for (let i = 0; i < score.length; i++) {
    answer.push((score[i][0] + score[i][1]) / 2);
  }
  let newAns = [...answer].sort((a, b) => b - a);
  for (let j = 0; j < answer.length; j++) {
    result.push(newAns.indexOf(answer[j]) + 1);
  }
  return result;
}
