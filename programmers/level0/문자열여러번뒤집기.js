function solution(my_string, queries) {
  queries.forEach((a) => {
    const copyArr = [...my_string];
    const [from, to] = a;
    const sliceStr = copyArr.slice(from, to + 1);
    const revStr = sliceStr.reverse().join("");
    copyArr.splice(from, to - from + 1, revStr);
    my_string = copyArr.join("");
  });
  return my_string;
}
