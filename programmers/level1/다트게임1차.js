function solution(dartResult) {
  var answer = [];
  let count = -1;
  for (let i = 0; i < dartResult.length; i++) {
    let n = dartResult[i];
    if (n === "S") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        answer.push(10);
        count += 1;
      } else {
        answer.push(Number(dartResult[i - 1]));
        count += 1;
      }
    } else if (n === "D") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        answer.push(100);
        count += 1;
      } else {
        answer.push(Number(dartResult[i - 1]) ** 2);
        count += 1;
      }
    } else if (n === "T") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        answer.push(1000);
        count += 1;
      } else {
        answer.push(Number(dartResult[i - 1]) ** 3);
        count += 1;
      }
    } else if (n === "*") {
      answer.splice(count, 1, answer[count] * 2);
      if (count > 0) {
        answer.splice(count - 1, 1, answer[count - 1] * 2);
      }
    } else if (n === "#") {
      answer.splice(count, 1, -answer[count]);
    }
  }
  return answer.reduce((acc, cur, idx) => acc + cur, 0);
}
