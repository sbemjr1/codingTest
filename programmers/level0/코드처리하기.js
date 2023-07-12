function solution(code) {
  var answer = [];
  let mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (code[i] == "1" && mode === 0) {
      mode = 1;
    } else if (code[i] == "1" && mode === 1) {
      mode = 0;
    } else if (mode === 0) {
      if (i % 2 === 0) {
        answer.push(code[i]);
      }
    } else if (mode === 1) {
      if (i % 2 !== 0) {
        answer.push(code[i]);
      }
    }
  }
  return answer.join("") !== "" ? answer.join("") : "EMPTY";
}
