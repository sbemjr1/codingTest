function solution(my_string) {
  let str = my_string.split(" ");
  let answer = Number(str[0]);
  for (let i = 1; i <= str.length; i = i + 2) {
    if (str[i] === "+") {
      answer += Number(str[i + 1]);
    } else if (str[i] === "-") {
      answer -= Number(str[i + 1]);
    }
  }
  return answer;
}
