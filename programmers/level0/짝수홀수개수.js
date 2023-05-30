function solution(num_list) {
  var answer = [];
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      evenCount++;
    } else if (num_list[i] % 2 !== 0) {
      oddCount++;
    }
  }
  answer[0] = evenCount;
  answer[1] = oddCount;
  return answer;
}
/** function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
} **/
