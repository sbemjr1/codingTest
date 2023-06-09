function solution(a, b) {
  var answer = 0;
  const ab = Number(a.toString() + b.toString());
  return (answer = ab >= 2 * a * b ? ab : 2 * a * b);
}
