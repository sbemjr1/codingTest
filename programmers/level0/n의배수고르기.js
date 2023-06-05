function solution(n, numlist) {
  var answer = [];
  numlist.map(function (k) {
    return k % n === 0 ? answer.push(k) : 0;
  });
  return answer;
}
