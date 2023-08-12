function solution(name, yearning, photo) {
  var answer = [];
  let result = 0;
  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      for (let k = 0; k < name.length; k++) {
        if (photo[i][j] === name[k]) {
          result += yearning[k];
        }
      }
    }
    answer.push(result);
    result = 0;
  }
  return answer;
}
