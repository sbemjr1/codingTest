function solution(num1, num2) {
  var answer = 0;
  if (0 <= num1 <= 100 && 0 <= num2 <= 100) {
    answer = num1 * num2;
  } else {
    console.log("num1,2가 제한사항 맞지 않음.");
  }
  return answer;
}
