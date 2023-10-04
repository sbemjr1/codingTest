function solution(numbers, target) {
  let answer = 0;

  DFS(0, 0);

  function DFS(count, sum) {
    if (count === numbers.length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    DFS(count + 1, sum + numbers[count]);
    DFS(count + 1, sum - numbers[count]);
  }

  return answer;
}
