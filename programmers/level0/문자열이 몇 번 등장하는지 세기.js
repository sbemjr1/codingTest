function solution(myString, pat) {
  var answer = 0;
  for (let i = 0; i < myString.length; i++) {
    if (myString.slice(i, i + pat.length).length !== pat.length) {
      break;
    } else if (myString.slice(i, i + pat.length) === pat) {
      answer += 1;
    }
  }
  return answer;
}
