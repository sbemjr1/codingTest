function solution(a, d, included) {
  var answer = [a];
  let sum = 0;
  for (let i = 0; i < included.length - 1; i++) {
    answer.push((a += d));
  }
  for (let j = 0; j < included.length; j++) {
    if (included[j] === true) {
      sum += answer[j];
    }
  }
  return sum;
}
