function solution(arr) {
  var answer = [];
  const result = arr.reduce((acc, cur, idx) => {
    if (cur >= 50 && cur % 2 === 0) {
      answer.push(cur / 2);
    } else if (cur < 50 && cur % 2 === 1) {
      answer.push(cur * 2);
    } else {
      answer.push(cur);
    }
  }, 0);
  return answer;
}
/**
 * const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)
 */
