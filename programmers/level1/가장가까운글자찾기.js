function solution(s) {
  let answerArr = [];
  let s_str = s;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let answer = -1;
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j]) {
        answer = i - s_str.substr(0, i).lastIndexOf(s[j]);
      }
    }
    answerArr.push(answer);
  }
  return answerArr;
}
