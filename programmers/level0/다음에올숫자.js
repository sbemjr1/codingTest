function solution(common) {
  var answer = 0;
  let fir = common[1] - common[0];
  let las = common[common.length - 1] - common[common.length - 2];
  if (fir === las) {
    answer = common[common.length - 1] + fir;
  } else if (fir !== las) {
    answer = common[common.length - 1] * (common[1] / common[0]);
  }
  return answer;
}
