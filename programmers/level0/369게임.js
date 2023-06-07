function solution(order) {
  var answer = order.toString();
  let count = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] % 3 === 0 && answer[i] != 0) {
      count++;
    }
  }
  return count;
}
