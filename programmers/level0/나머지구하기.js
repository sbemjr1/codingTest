function solution(num1, num2) {
  var answer = -1;
  0 < num1 <= 100;
  0 < num2 <= 100;
  answer = num1 % num2;
  return answer;
}
