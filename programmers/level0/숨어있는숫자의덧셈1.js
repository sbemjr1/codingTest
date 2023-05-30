function solution(my_string) {
  var answer = 0;
  const num = my_string.match(/\d/g);
  answer = num.reduce((a, c) => Number(a) + Number(c));
  return answer;
}
