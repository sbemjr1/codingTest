function solution(my_string, s, e) {
  const revStr = my_string.slice(s, e + 1).split("");
  return (
    my_string.slice(0, s) + revStr.reverse().join("") + my_string.slice(e + 1)
  );
}
