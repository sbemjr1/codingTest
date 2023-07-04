function solution(sides) {
  var answer = 0;
  sides.sort((a, b) => a - b);
  for (let i = 1; i <= 10000; i++) {
    if (sides[1] < i + sides[0] && i <= sides[1]) {
      answer++;
    } else if (i < sides[1] + sides[0] && i > sides[1]) {
      answer++;
    }
  }
  return answer;
}
