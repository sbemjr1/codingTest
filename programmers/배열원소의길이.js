function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer[i] = strlist[i].split("").length;
  }
  return answer;
}
/**function solution(strlist) {
    return strlist.map((el) => el.length)
} */
