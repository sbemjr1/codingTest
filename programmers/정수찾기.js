function solution(num_list, n) {
  var answer = 0;
  let count = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      count++;
      break;
    }
  }
  return (answer = count);
}
/**
 * const solution = (num_list, n) => num_list.includes(n) ? 1 : 0
 */
