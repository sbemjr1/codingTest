function solution(arr, queries) {
  var answer = [];
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    answer = arr.slice(queries[i][0], queries[i][1] + 1);
    answer.push(queries[i][2]);
    answer.sort((a, b) => a - b);
    if (answer[answer.lastIndexOf(queries[i][2]) + 1] === undefined) {
      result.push(-1);
      continue;
    }
    result.push(answer[answer.lastIndexOf(queries[i][2]) + 1]);
  }
  return result;
}

/*function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
>*/
