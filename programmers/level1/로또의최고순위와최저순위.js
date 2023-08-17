function solution(lottos, win_nums) {
  var answer = [];
  let dreamCount = 0;
  let count = 0;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) {
        count++;
      }
    }
    if (lottos[i] === 0) {
      dreamCount++;
    }
  }
  dreamCount += count;
  answer = [dreamCount, count];
  for (let i = 0; i < 2; i++) {
    if (answer[i] < 2) {
      answer.splice(i, 1, 6);
    } else {
      answer.splice(i, 1, 7 - answer[i]);
    }
  }
  return answer;
}
