function solution(s, n) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      if (s.charCodeAt(i) + n > 90) {
        answer += String.fromCharCode(s.charCodeAt(i) - 26 + n);
      } else {
        answer += String.fromCharCode(s.charCodeAt(i) + n);
      }
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      if (s.charCodeAt(i) + n > 122) {
        answer += String.fromCharCode(s.charCodeAt(i) - 26 + n);
      } else {
        answer += String.fromCharCode(s.charCodeAt(i) + n);
      }
    }
  }
  return answer;
}
