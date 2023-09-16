function solution(wallpaper) {
  var answer = [0, 0, 0, 0];
  let left = [];
  let right = [];
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      answer[0] = i;
      break;
    }
  }
  for (let i = wallpaper.length - 1; i >= 0; i--) {
    if (wallpaper[i].includes("#")) {
      answer[2] = i + 1;
      break;
    }
  }
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      left.push(wallpaper[i].indexOf("#"));
      right.push(wallpaper[i].lastIndexOf("#"));
    }
  }
  left.sort();
  right.sort((a, b) => b - a);
  answer[1] = left[0];
  answer[3] = right[0] + 1;
  return answer;
}
