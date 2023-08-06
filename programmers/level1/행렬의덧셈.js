function solution(arr1, arr2) {
  let answer = [[]];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      result.push(arr1[i][j] + arr2[i][j]);
    }
    answer[i] = result;
    result = [];
  }
  return answer;
}
