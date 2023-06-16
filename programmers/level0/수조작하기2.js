function solution(numLog) {
  var answer = [];
  for (let i = 0; i < numLog.length; i++) {
    numLog[i + 1] - numLog[i] === 1
      ? answer.push("w")
      : numLog[i + 1] - numLog[i] === -1
      ? answer.push("s")
      : numLog[i + 1] - numLog[i] === 10
      ? answer.push("d")
      : numLog[i + 1] - numLog[i] === -10
      ? answer.push("a")
      : 0;
  }
  return answer.join("");
}
