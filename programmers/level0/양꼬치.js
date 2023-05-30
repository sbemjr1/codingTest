function solution(n, k) {
  var answer = 0;
  answer = 12000 * n + 2000 * k;
  for (let i = 1; i <= Math.floor(n / 10); i++) {
    answer -= 2000;
  }
  return answer;
}
/**다른 풀이
 * function solution(n, k) {
    return 12000 * n + 2000 * k - 2000 * Math.floor(n/10);
}
 *
 */
