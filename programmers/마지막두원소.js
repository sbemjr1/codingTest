function solution(num_list) {
  const arrl = num_list.length - 1;
  if (num_list[arrl] > num_list[arrl - 1]) {
    num_list.push(num_list[arrl] - num_list[arrl - 1]);
  } else {
    num_list.push(num_list[arrl] * 2);
  }
  return num_list;
}
