function solution(angle) {
  var answer = 0;
  if (0 < angle && angle < 90) {
    return (answer = 1);
  } else if (angle === 90) {
    return (answer = 2);
  } else if (90 < angle && angle < 180) {
    return (answer = 3);
  } else if (angle === 180) {
    return (answer = 4);
  } else {
    console.log("error");
  }
}
/**다른 풀이
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
**/
