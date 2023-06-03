function solution(numbers) {
  var answer = 0;
  answer = numbers.sort((a, b) => {
    return a - b;
  });
  const result =
    answer[0] * answer[1] >
    answer[numbers.length - 1] * answer[numbers.length - 2]
      ? answer[0] * answer[1]
      : answer[numbers.length - 1] * answer[numbers.length - 2];
  return result;
}
