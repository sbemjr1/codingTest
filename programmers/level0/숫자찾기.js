function solution(num, k) {
  var answer = 0;
  const strNum = num.toString();
  return (answer = strNum.includes(k) ? strNum.indexOf(k) + 1 : -1);
}
