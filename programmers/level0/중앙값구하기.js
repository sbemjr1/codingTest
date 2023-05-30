function solution(array) {
  var answer = 0;
  array.sort(function (a, b) {
    return a - b;
  });
  const i = 0;
  const mid = (array.length - 1) / 2;

  return (answer = array[mid]);
}
/**
 * function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
 */
