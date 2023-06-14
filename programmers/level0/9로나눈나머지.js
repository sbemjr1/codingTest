function solution(number) {
  var answer = 0;
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  return (answer = sum % 9);
}
