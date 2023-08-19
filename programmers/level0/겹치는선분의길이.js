function solution(lines) {
  let answer = 0;
  const lineMap = new Array(200);
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    const left = lines[i][0];
    const right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }
  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }
  return answer;
}
