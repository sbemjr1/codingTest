function solution(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (j % queries[i][2] === 0) {
        arr.splice(j, 1, (arr[j] += 1));
      }
    }
  }
  return arr;
}
