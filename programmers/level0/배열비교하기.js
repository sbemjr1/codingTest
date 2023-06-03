function solution(arr1, arr2) {
  var answer = 0;
  let sum1 = 0,
    sum2 = 0;
  if (arr1.length < arr2.length) {
    answer = -1;
  } else {
    if (arr1.length > arr2.length) {
      answer = 1;
    } else if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
        sum2 += arr2[i];
      }
      if (sum1 > sum2) {
        answer = 1;
      } else if (sum1 < sum2) {
        answer = -1;
      } else if (sum1 === sum2) {
        answer = 0;
      }
    }
  }
  return answer;
}
