function solution(N, stages) {
  var answer = [];
  let count = 0;
  let failCount = 0;
  for (let i = 1; i <= N; i++) {
    stages.forEach((e) => {
      if (e >= i) {
        count++;
      }
      if (e === i) {
        failCount++;
      }
    });
    if (count === 0) {
      answer.push(0);
    } else {
      answer.push(failCount / count);
    }
    count = 0;
    failCount = 0;
  }
  let newAns = [...answer].sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < newAns.length; i++) {
    for (let j = 0; j < newAns.length; j++) {
      if (newAns[i] === answer[j]) {
        result.push(j + 1);
        answer.splice(j, 1, -1);
      }
    }
  }
  return result;
}
