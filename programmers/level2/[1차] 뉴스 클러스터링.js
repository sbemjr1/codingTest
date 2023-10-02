function solution(str1, str2) {
  let answer = [];
  let result = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    arr1.push(str1.slice(i, i + 2));
  }

  for (let i = 0; i < str2.length - 1; i++) {
    arr2.push(str2.slice(i, i + 2));
  }

  arr1 = arr1
    .map((el) => (/[^a-z]/g.test(el) ? (el = "") : el))
    .filter((v) => v !== "");
  arr2 = arr2
    .map((el) => (/[^a-z]/g.test(el) ? (el = "") : el))
    .filter((v) => v !== "");

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && arr1[i] !== "" && arr2[j] !== "") {
        answer.push(arr1[i]);
        arr1.splice(i, 1);
        i -= 1;
        arr2.splice(j, 1);
        j -= 1;
      }
    }
  }
  return arr1.length === 0 && arr2.length === 0
    ? 65536
    : (result = Math.floor(
        (65536 * answer.length) / (answer.length + arr1.length + arr2.length)
      ));
}
