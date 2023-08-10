function solution(n, arr1, arr2) {
  let answer = "";
  let result = [];
  let newArr1 = arr1.map((a) => a.toString(2).padStart(n, "0"));
  let newArr2 = arr2.map((b) => b.toString(2).padStart(n, "0"));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (newArr1[i][j] === "1" || newArr2[i][j] === "1") {
        answer += "#";
      } else {
        answer += " ";
      }
    }
    result.push(answer);
    answer = "";
  }
  return result;
}
