function solution(start, end) {
  var answer = [];
  let n = start;
  for (let i = 0; i < start - end + 1; i++) {
    answer.push(n--);
  }
  return answer;
}
/**
 * function solution(start, end) {
    var answer = [];

    for(let i = start; i>=end; i--){
        answer.push(i)
    }

    return answer;
}
 */
