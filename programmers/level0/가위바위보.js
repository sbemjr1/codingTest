function solution(rsp) {
  var answer = [];
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") {
      answer.push("0");
    } else if (rsp[i] === "0") {
      answer.push("5");
    } else if (rsp[i] === "5") {
      answer.push("2");
    }
  }
  return answer.join("");
}
