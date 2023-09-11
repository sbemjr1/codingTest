function solution(dots) {
  var answer = 0;

  function cal(a, b, c, d) {
    let ab,
      cd = 0;

    ab = (b[1] - a[1]) / (b[0] - a[0]);
    cd = (d[1] - c[1]) / (d[0] - c[0]);

    if (ab === cd) {
      answer += 1;
    }
  }
  // 1-2, 3-4가 이어졌을 때
  cal(dots[0], dots[1], dots[2], dots[3]);

  // 1-3, 2-4가 이어졌을 때
  cal(dots[0], dots[2], dots[1], dots[3]);

  // 1-4, 2-3가 이어졌을 때
  cal(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}
