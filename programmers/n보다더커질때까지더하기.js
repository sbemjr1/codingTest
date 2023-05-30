function solution(numbers, n) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      break;
    }
  }
  return answer;
}
/**
 * function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}
 */
