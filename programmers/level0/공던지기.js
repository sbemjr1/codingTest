function solution(numbers, k) {
  var answer = 0;
  for (let i = 0; i < k; i++) {
    answer += 2;

    if (answer >= numbers.length) {
      answer -= numbers.length;
    }
  }
  return answer - 2 > 0
    ? numbers[answer - 2]
    : answer === 0
    ? numbers[numbers.length - 2]
    : numbers[numbers.length - 1];
}
