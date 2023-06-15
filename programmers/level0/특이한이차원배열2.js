function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      answer = arr[i][j] === arr[j][i] ? 1 : 0;
      if (answer === 0) {
        return (answer = 0);
      }
    }
  }
  return answer;
}
