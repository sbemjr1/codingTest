function solution(s) {
  let pcount = 0;
  let ycount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      pcount++;
    } else if (s[i] === "y" || s[i] === "Y") {
      ycount++;
    }
  }
  return pcount === ycount ? true : false;
}
