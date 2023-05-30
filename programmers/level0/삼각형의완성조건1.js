function solution(sides) {
  var answer = 0;
  let most = 0;
  for (let i = 0; i < sides.length - 1; i++) {
    sides[i] > sides[i + 1] ? (most = sides[i]) : (most = sides[i + 1]);
  }
  const findSidesArr = sides.indexOf(most);
  if (findSidesArr > -1) {
    sides.splice(findSidesArr, 1);
  }
  if (most < sides[0] + sides[1]) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}
/**
 function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
**/
