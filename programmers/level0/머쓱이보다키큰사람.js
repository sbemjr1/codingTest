function solution(array, height) {
  var answer = 0;
  array.push(height);
  array.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < array.length; i++) {
    if (array[i] === height) {
      answer = array.length - 1 - i;
    }
  }
  return answer;
}
/**
 * function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}


function solution(array, height) {
    let result = 0;
    array.map((arr) => height < arr && result++);

    return result;
}

 */
