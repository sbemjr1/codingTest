function solution(arr) {
  let answer = 0;
  let prevArr = arr;
  while (true) {
    const changeArr = prevArr.map((a) =>
      a >= 50 && a % 2 === 0 ? a / 2 : a < 50 && a % 2 === 1 ? a * 2 + 1 : a
    );

    const allSame = prevArr.every((a, i) => a === changeArr[i]);
    if (allSame) break;

    answer += 1;

    prevArr = changeArr;
  }
  return answer;
}
