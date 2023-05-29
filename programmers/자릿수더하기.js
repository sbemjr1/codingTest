function solution(n) {
  var answer = 0;
  const numstring = n.toString();
  const result = numstring.split("");
  for (let i = 0; i < result.length; i++) {
    answer += Number(result[i]);
  }
  return answer;
}
