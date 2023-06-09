function solution(arr, idx) {
  var answer = 0;
  let newArr = arr.splice(idx);
  return (answer = newArr.indexOf(1) !== -1 ? newArr.indexOf(1) + idx : -1);
}
