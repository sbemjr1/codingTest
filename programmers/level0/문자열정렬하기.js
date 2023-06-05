function solution(my_string) {
  var answer = [];
  let newArr = my_string.match(/\d/g);
  newArr.sort((a, b) => a - b);
  return (answer = newArr.map((k) => Number(k)));
}
