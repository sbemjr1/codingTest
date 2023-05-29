function solution(my_string, index_list) {
  var answer = "";
  let result = [];
  const arr = my_string.split("");
  for (let i = 0; i < index_list.length; i++) {
    let k = index_list[i];
    result.push(arr[k]);
  }
  return (answer = result.join(""));
}
