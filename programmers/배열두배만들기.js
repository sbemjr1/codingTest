function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(2 * numbers[i]);
  }
  return answer;
}
/**
 * function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

const solution = (numbers) => numbers.map((number) => number * 2)
 */
