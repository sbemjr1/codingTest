function solution(k, score) {
  let answer = [];
  let result = [];
  for (let i = 0; i < score.length; i++) {
    if (answer.length === k && score[i] >= answer[0]) {
      answer.reverse().pop();
    } else if (answer.length === k && score[i] < answer[0]) {
      result.push(answer[0]);
      continue;
    }
    answer.push(score[i]);
    answer.sort((a, b) => a - b);
    result.push(answer[0]);
  }
  return result;
}

// function solution(k, score) {
//     const stack = []
//     return score.reduce((a,c) => {
//         if(stack.length < k) {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//         }
//         else {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//             stack.shift()
//         }
//         a.push(stack[0])
//         return a
//     },[])
// }
