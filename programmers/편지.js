function solution(message) {
  var answer = 0;
  const newMsg = message.split("");
  answer = 2 * newMsg.length;
  return answer;
}
/** function solution(message) {
    return message.length*2;
} **/
