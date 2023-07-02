function solution(q, r, code) {
  let answer = [...code.split("")];
  let result = answer.map((val, idx) => (val = idx % q));
  let count = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === r) {
      count.push(answer[i]);
    }
  }
  return count.join("");
}
