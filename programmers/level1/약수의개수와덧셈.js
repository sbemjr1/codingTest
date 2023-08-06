function solution(left, right) {
  var answer = [];
  let count = 0;
  let result = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      answer.push(i);
    } else {
      answer.push(-i);
    }
    count = 0;
  }
  return answer.reduce((acc, cur, idx) => acc + cur, 0);
}

//제곱근이 정수이면 약수의 개수가 홀수...
