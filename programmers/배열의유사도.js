function solution(s1, s2) {
  var answer = 0;
  let count = 0;
  const n1 = s1.length;
  const n2 = s2.length;
  for (let i = 0; i < n1; i++) {
    for (let k = 0; k < n2; k++) {
      if (s1[i] === s2[k]) {
        count++;
      }
    }
  }
  return (answer = count);
}
/**
 * function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}
 */
