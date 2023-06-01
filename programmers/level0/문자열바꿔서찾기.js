function solution(myString, pat) {
  var answer = 0;
  let arr = myString.split("");
  const newArr = arr.map(function (s) {
    return s === "A" ? (s = "B") : (s = "A");
  });
  return newArr.join("").includes(pat) ? 1 : 0;
}
