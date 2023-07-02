function solution(order) {
  var answer = 0;
  for (let i = 0; i < order.length; i++) {
    if (
      order[i] === "iceamericano" ||
      order[i] === "americanoice" ||
      order[i] === "hotamericano" ||
      order[i] === "americanohot" ||
      order[i] === "americano" ||
      order[i] === "anything"
    ) {
      answer += 4500;
    } else {
      answer += 5000;
    }
  }
  return answer;
}
