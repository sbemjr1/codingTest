function solution(myString) {
  var answer = [];
  const newarr = myString.split("x");
  for (let i = 0; i < newarr.length; i++) {
    answer.push(newarr[i].length);
  }
  return answer;
}
