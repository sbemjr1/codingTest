function solution(num_str) {
  var answer = 0;
  const result = num_str.split("");
  return (answer = result.reduce((a, c) => Number(a) + Number(c)));
}
