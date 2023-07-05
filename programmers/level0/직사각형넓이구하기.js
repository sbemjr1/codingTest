function solution(dots) {
  let width = 0;
  let height = 0;
  for (let i = 0; i < dots.length - 1; i++) {
    if (dots[i][0] - dots[i + 1][0] !== 0) {
      width = Math.abs(dots[i][0] - dots[i + 1][0]);
    }

    if (dots[i][1] - dots[i + 1][1] !== 0) {
      height = Math.abs(dots[i][1] - dots[i + 1][1]);
    }
  }
  return width * height;
}
