function solution(arr) {
  var answer = [];
  const result = arr.reduce((acc, cur, idx) => {
    if (cur >= 50 && cur % 2 === 0) {
      answer.push(cur / 2);
    } else if (cur < 50 && cur % 2 === 1) {
      answer.push(cur * 2);
    } else {
      answer.push(cur);
    }
  }, 0);
  return answer;
}
/**
 * function solution(arr) {
    return arr.map(num => {
        if(num >= 50 && !(num % 2)) return num / 2;
        if(num < 50 && num % 2) return num * 2;
        return num;
    })
}
 */
