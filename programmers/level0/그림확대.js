function solution(picture, k) {
  let ans = [];
  for (let p of picture)
    ans.push(
      ...Array(k).fill(
        p
          .split("")
          .map((v) => v.repeat(k))
          .join("")
      )
    );
  return ans;
}
