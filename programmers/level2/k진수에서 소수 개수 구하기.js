function solution(n, k) {
  let answer = 0;
  let result = n.toString(k);
  let resultArr = result.split("0");

  for (let i = 0; i < resultArr.length; i++) {
    if (qqq(Number(resultArr[i]))) {
      answer++;
    }
  }

  return answer;
}

function qqq(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
