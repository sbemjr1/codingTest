function solution(n) {
  let answer = 0;
  let i = 0;
  for (i = 0; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
/** 수열공식을 사용한 다른 풀이
 function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}**/
