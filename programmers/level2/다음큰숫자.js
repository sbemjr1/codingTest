function solution(n) {
  let answer = 0;
  let control = true;
  let binaryN = n.toString(2).replace(/0/g, "");
  let m = n;
  while (control) {
    m++;
    let binaryM = m.toString(2).replace(/0/g, "");
    if (binaryN == binaryM) {
      answer = m;
      control = false;
    }
  }
  return answer;
}
