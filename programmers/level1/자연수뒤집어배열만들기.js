function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((a) => Number(a));
}
