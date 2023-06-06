function solution(num_list) {
  let answer = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 1) {
      sum1 += num_list[i];
    } else {
      sum2 += num_list[i];
    }
  }
  return (answer = sum1 >= sum2 ? sum1 : sum2);
}
