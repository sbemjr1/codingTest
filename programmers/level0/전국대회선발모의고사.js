function solution(rank, attendance) {
  var answer = 0;
  let newArr = [...rank];
  let result = [];
  newArr.sort((a, b) => a - b);
  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      if (newArr[i] === rank[j] && attendance[j] === true) {
        result.push(j);
      }
      if (result.length === 3) {
        break;
      }
    }
  }
  return 10000 * result[0] + 100 * result[1] + result[2];
}
