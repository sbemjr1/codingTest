function solution(numbers) {
  var answer = 0;
  numbers.sort(function (a, b) {
    return b - a;
  });
  return (answer = numbers[1] * numbers[0]);
}
