function solution(myString) {
  let arr = myString.split("");
  const newArr = arr.map(function (a) {
    return a === "a" || a === "A" ? a.toUpperCase() : a.toLowerCase();
  });
  return newArr.join("");
}
