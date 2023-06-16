function solution(my_string) {
  let sum = 0;
  let answer = my_string.split(/[a-zA-Z]/g);
  answer.filter((a) => a !== "");
  for (let i = 0; i < answer.length; i++) {
    sum += Number(answer[i]);
  }
  return sum;
}
