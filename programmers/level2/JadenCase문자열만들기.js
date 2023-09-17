function solution(s) {
  let result = "";
  let answer = s.split(" ");
  answer = answer.map((v) => v.toLowerCase());
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      if (j === 0) {
        result += answer[i][j].toUpperCase();
      } else if (!answer[i][j]) {
        result += " ";
      } else {
        result += answer[i][j];
      }
    }
    if (i !== answer.length - 1) {
      result += " ";
    }
  }
  return result;
}
