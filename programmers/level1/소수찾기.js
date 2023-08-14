function solution(n) {
  let answer = 0;
  let arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    if (arr[i] === false) {
      continue;
    }

    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return answer;
}
// function solution(n) {
//     const s = new Set();
//     for(let i=1; i<=n; i+=2){
//         s.add(i);
//     }
//     s.delete(1);
//     s.add(2);
//     for(let j=3; j<Math.sqrt(n); j++){
//         if(s.has(j)){
//              for(let k=j*2; k<=n; k+=j){
//                 s.delete(k);
//              }
//         }
//     }
//     return s.size;
// }
