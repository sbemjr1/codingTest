function solution(dot) {
  var answer = 0;
  if (dot[0] > 0 && dot[1] > 0) {
    answer = 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    answer = 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    answer = 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    answer = 4;
  }
  return answer;
}
/**
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
 **/
