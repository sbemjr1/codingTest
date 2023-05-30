function solution(n, control) {
  var answer = 0;
  const arr = control.split("");
  for (let i = 0; i < arr.length; i++) {
    answer =
      arr[i] === "w"
        ? (n += 1)
        : arr[i] === "s"
        ? (n -= 1)
        : arr[i] === "d"
        ? (n += 10)
        : arr[i] === "a"
        ? (n -= 10)
        : n;
  }
  return answer;
}
