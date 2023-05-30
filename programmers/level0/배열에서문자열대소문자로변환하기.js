function solution(strArr) {
  var answer = [];
  for (let i = 0; i < strArr.length; i++) {
    let n = i % 2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase();
    answer.push(n);
  }
  return answer;
}
/**function solution(strArr) {
    return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
} */
