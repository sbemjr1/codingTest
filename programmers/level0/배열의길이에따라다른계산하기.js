function solution(arr, n) {
  var answer = [];
  if (arr.length % 2) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  } else {
    for (let j = 0; j < arr.length; j++) {
      if (j % 2) {
        answer.push(arr[j] + n);
      } else {
        answer.push(arr[j]);
      }
    }
  }
  return answer;
}
