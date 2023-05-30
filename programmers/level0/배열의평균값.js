function solution(numbers) {
  var answer = 0;
  let i = numbers.length - 1;
  answer = (numbers[0] + numbers[i]) / 2;
  return answer;
}
