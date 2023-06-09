function solution(strArr) {
  var answer = [];
  const regex = /ad/;
  for (let i = 0; i < strArr.length; i++) {
    regex.test(strArr[i]) ? 0 : answer.push(strArr[i]);
  }
  return answer;
}
