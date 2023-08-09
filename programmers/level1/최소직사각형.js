function solution(sizes) {
  let w = [];
  let h = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
    sizes[i].sort((a, b) => b - a);
    w.push(sizes[i][0]);
    h.push(sizes[i][1]);
  }
  w.sort((a, b) => b - a);
  h.sort((a, b) => b - a);
  return w[0] * h[0];
}
