function solution(number, limit, power) {
  let answer = [];
  let newCount = 0;
  for (let i = 1; i <= number; i++) {
    if (division(i) <= limit) {
      answer.push(division(i));
    } else {
      newCount++;
    }
  }
  return answer.reduce((acc, cur, idx) => acc + cur, 0) + newCount * power;
}

function division(num) {
  let count = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num / i === i) {
      count--;
    }
    if (num % i === 0) {
      count += 2;
    }
  }
  return count;
}
