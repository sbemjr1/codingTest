function solution(num_list) {
  var answer = 0;
  const result1 = num_list.reduce((acc, cur) => {
    return acc + cur;
  });
  const result2 = num_list.reduce((acc, cur) => {
    return acc * cur;
  });
  return (answer = result1 ** 2 > result2 ? 1 : 0);
}
