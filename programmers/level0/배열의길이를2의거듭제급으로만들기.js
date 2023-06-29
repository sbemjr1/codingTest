function solution(arr) {
  var answer = 0;
  let result = [...arr];
  for (let i = 0; i <= 10; i++) {
    if (2 ** i >= arr.length) {
      answer = 2 ** i;
      break;
    }
  }
  for (let j = 0; j < answer - arr.length; j++) {
    result.push(0);
  }
  return result;
}
