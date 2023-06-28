function solution(arr, queries) {
  var answer = [];
  for (let i = 0; i < queries.length; i++) {
    switchValues(arr, queries[i][0], queries[i][1]);
  }
  return arr;
}
function switchValues(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
